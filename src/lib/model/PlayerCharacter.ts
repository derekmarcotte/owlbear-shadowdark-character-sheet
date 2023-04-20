import { writable } from "svelte/store";
import { findAny } from "../compendium";
import {
  ALIGNMENTS,
  ANCESTRIES,
  BACKGROUNDS,
  CLASSES,
  DEITIES,
  LANGUAGES,
  TITLES,
  TITLE_MAP,
} from "../constants";
import { clamp, toInfo } from "../utils";
import type { ArmorInfo } from "./Armor";
import type { Bonus } from "./Bonus";
import type { Gear } from "./Gear";
import type { SpellInfo } from "./Spell";
import type { WeaponInfo } from "./Weapon";

export const PlayerCharacterStore = writable<PlayerCharacter>();

export type Alignment = (typeof ALIGNMENTS)[number];
export type Deity = (typeof DEITIES)[number];
export type Background = (typeof BACKGROUNDS)[number];
export type Class = (typeof CLASSES)[number];
export type Title = (typeof TITLES)[number];
export type Ancestry = (typeof ANCESTRIES)[number];
export type Language = (typeof LANGUAGES)[number];

export type StatBlock = {
  STR: number;
  DEX: number;
  CON: number;
  INT: number;
  WIS: number;
  CHA: number;
};

export type Stat = keyof StatBlock;

export type PlayerCharacter = {
  name: string;
  ancestry: Ancestry;
  class: Class;
  level: number;
  title: Title;
  alignment: Alignment;
  background: Background;
  deity: Deity;
  gear: Gear[];
  stats: StatBlock;
  bonuses: Bonus[];
  maxHitPoints: number;
  armorClass: number;
  gearSlotsTotal: number;
  gold: number;
  silver: number;
  copper: number;
  languages: string[];
  xp: number;
  spells: SpellInfo[];
  hitPoints: number;
};

export function calculateModifierForPlayerStat(
  pc: PlayerCharacter,
  stat: Stat
): number {
  let finalModifier = 0;
  const baseModifier = clamp(Math.floor((pc.stats[stat] - 10) / 2), -4, 4);
  finalModifier += baseModifier;
  return finalModifier;
}

export function calculateArmorClassForPlayer(pc: PlayerCharacter) {
  let acModifier = 0;
  for (const b of pc.bonuses) {
    if (b.bonusType === "modifyAmt" && b.bonusTo === "armorClass") {
      acModifier += b.bonusAmount;
    }
  }

  const gearBonuses = pc.gear
    .map((g) => ({ isEquipped: g.equipped, g: findAny(g.name) }))
    .filter(({ isEquipped, g }) => {
      return !g.canBeEquipped || (g.canBeEquipped && isEquipped);
    })
    .map(({ g }) => g.playerBonuses)
    .filter(Boolean)
    .flat();

  for (const b of gearBonuses) {
    if (b.bonusType === "modifyAmt" && b.bonusTo === "armorClass") {
      acModifier += b.bonusAmount;
    }
  }

  const armor = pc.gear
    .filter((g) => g.equipped)
    .map(toInfo<ArmorInfo>)
    .filter((g) => g.type === "Armor");

  for (const a of armor) {
    let statModifier = 0;
    if (a.ac.stat) {
      statModifier = calculateModifierForPlayerStat(pc, a.ac.stat);
    }

    acModifier += a.ac.modifier + statModifier;

    if (a.ac.base > 0) {
      return a.ac.base + acModifier;
    }
  }

  return pc.armorClass + acModifier;
}

export function calculateTitleForPlayer(pc: PlayerCharacter): Title {
  return TITLE_MAP[pc.class][pc.alignment][
    Math.max(0, Math.floor((pc.level - 1) / 2))
  ];
}

export function calculateSpellCastingModifierForPlayer(
  pc: PlayerCharacter
): number {
  let result = 0;
  const baseModifier = calculateModifierForPlayerStat(
    pc,
    pc.class === "Priest" ? "WIS" : "INT"
  );
  result += baseModifier;

  // TODO bonuses

  return result;
}

export function calculateAttackBonusForPlayerWeapon(
  pc: PlayerCharacter,
  w: WeaponInfo
): number {
  return 0;
}

export function calculateGearSlotsForPlayer(pc: PlayerCharacter) {
  const base = Math.max(10, pc.stats.STR);

  // TODO Hauler talent

  const bonuses = pc.bonuses.reduce((acc: number, b: Bonus) => {
    if (b.bonusType === "modifyAmt" && b.bonusTo === "gearSlots") {
      return acc + b.bonusAmount;
    } else {
      return acc;
    }
  }, 0);

  return base + bonuses;
}

export function levelUpPlayer(pc: PlayerCharacter) {
  const xpCap = pc.level === 0 ? 10 : pc.level * 10;

  if (pc.xp < xpCap) return;
  if (pc.level == 10) return;

  pc.level += 1;
  pc.xp -= xpCap;
}

export function playerHasSpell(pc: PlayerCharacter, spell: SpellInfo) {
  return pc.spells.findIndex((s) => s.name === spell.name) > -1;
}

export function playerCanLearnSpell(pc: PlayerCharacter, spell: SpellInfo) {
  return pc.class.toLowerCase() === spell.class.toLowerCase();
}

export function learnSpellForPlayer(pc: PlayerCharacter, spell: SpellInfo) {
  if (playerHasSpell(pc, spell)) return;
  pc.spells.push(spell);
}

export function unlearnSpellForPlayer(pc: PlayerCharacter, spell: SpellInfo) {
  pc.spells = pc.spells.filter((s) => s.name !== spell.name);
}

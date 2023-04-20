import type { SpellInfo } from "../types";

const SPELLS: SpellInfo[] = [
  {
    name: "Charm Person",
    range: "Near",
    class: "Wizard",
    tier: 1,
    desc: "You magically beguile one humanoid of LV 2 or less within near range, who regards you as a friend for the duration.The spell ends if you or your allies do anything harmful to the target.The target knows it was magically charmed after the spell ends.Roll [[/r 1d8]] to determine amount of days effective",
    duration: { type: "Day", roll: { numDice: 1, diceType: "d8" } },
  },
  {
    name: "Feather Fall",
    range: "Self",
    class: "Wizard",
    tier: 1,
    desc: "You may make an attempt to cast this spell when you fall.Your rate of descent slows so that you land safely on your feet.",
    duration: { type: "Instant", amt: 0 },
  },
  {
    name: "Acid Arrow",
    range: "Far",
    class: "Wizard",
    tier: 2,
    desc: "You conjure a corrosive bolt that hits one foe, dealing [[/r 1d6]] damage a round. The bolt remains in the target for as long as you focus.",
    duration: { type: "Focus", amt: 0 },
  },
  {
    name: "Silence",
    range: "Far",
    class: "Wizard",
    tier: 2,
    desc: "You magically mute sound in a near cube within the spell’s range. Creatures inside the area are deafened, and any sounds they create cannot be heard.",
    duration: { type: "Focus", amt: 0 },
  },
  {
    name: "Cleansing Weapon",
    range: "Close",
    class: "Priest",
    tier: 2,
    desc: "One weapon you touch is wreathed in purifying flames. It deals an additional [[/r 1d4]] damage ([[/r 1d6]] vs. undead) for the duration.",
    duration: { type: "Round", amt: 5 },
  },
  {
    name: "Floating Disk",
    range: "Near",
    class: "Wizard",
    tier: 1,
    desc: "You create a floating, circular disk of force with a concave center. It can carry up to 20 gear slots. It hovers at waist level and automatically stays within near of you. It can’t cross over drop- offs or pits taller than a human.",
    duration: { type: "Round", amt: 10 },
  },
  {
    name: "Misty Step",
    range: "Self",
    class: "Wizard",
    tier: 2,
    desc: "In a puff of smoke, you teleport a near distance to an area you can see.",
    duration: { type: "Instant", amt: 0 },
  },
  {
    name: "Augury",
    range: "Self",
    class: "Priest",
    tier: 2,
    desc: "You interpret the meaning of supernatural portents and omens. Ask the GM one question about a specific course of action. The GM says whether the action will lead to “weal” or “woe.”",
    duration: { type: "Instant", amt: 0 },
  },
  {
    name: "Mage Armor",
    range: "Self",
    class: "Wizard",
    tier: 1,
    desc: "An invisible layer of magical force protects your vitals. Your armor class becomes 14 (18 on a critical spellcasting check) for the spell’s duration.",
    duration: { type: "Round", amt: 10 },
  },
  {
    name: "Holy Weapon",
    range: "Close",
    class: "Priest",
    tier: 1,
    desc: "One weapon you touch is imbued with a sacred blessing.The weapon becomes magical and has +1 to attack and damage rolls for the duration.",
    duration: { type: "Round", amt: 5 },
  },
  {
    name: "Hold Person",
    range: "Near",
    class: "Wizard",
    tier: 2,
    desc: "You magically paralyze one humanoid creature of LV 4 or less you can see within range.",
    duration: { type: "Focus", amt: 0 },
  },
  {
    name: "Mirror Image",
    range: "Self",
    class: "Wizard",
    tier: 2,
    desc: "You create a number of illusory duplicates of yourSelf equal to half your level rounded down (minimum 1). The duplicates surround you and mimic you.Each time a creature attacks you, the attack misses and causes one of the duplicates to evaporate.If all of the illusions have disappeared, the spell ends.",
    duration: { type: "Round", amt: 5 },
  },
  {
    name: "Bless",
    range: "Close",
    class: "Priest",
    tier: 2,
    desc: "One creature you touch gains a luck token.",
    duration: { type: "Instant", amt: 0 },
  },
  {
    name: "Burning Hands",
    range: "Close",
    class: "Wizard",
    tier: 1,
    desc: "You spread your fingers with thumbs touching, unleashing a circle of flame that fills a close area around where you stand.Creatures within the area of effect take [[/r 1d6]] damage.Unattended flammable objects ignite.",
    duration: { type: "Instant", amt: 0 },
  },
  {
    name: "Blind/Deafen",
    range: "Near",
    class: "Priest",
    tier: 2,
    desc: "You utter a divine censure, blinding or deafening one creature you can see in range. The creature has disadvantage on tasks requiring the lost sense.",
    duration: { type: "Focus", amt: 0 },
  },
  {
    name: "Web",
    range: "Far",
    class: "Wizard",
    tier: 2,
    desc: "You create a near-sized cube of sticky, dense spider web within the spell’s range. A creature stuck in the web can’t move and must succeed on a Strength check opposed by your spellcasting check to free itself.",
    duration: { type: "Round", amt: 5 },
  },
  {
    name: "Light",
    range: "Close",
    class: "Priest",
    tier: 1,
    desc: "One object you touch glows with bright, heatless light, illuminating out to a near distance for 1 hour of real time.",
    duration: { type: "Hour", subType: "RealTime", amt: 1 },
  },
  {
    name: "Cure Wounds",
    range: "Close",
    class: "Priest",
    tier: 1,
    desc: "Your touch restores ebbing life.Roll a number of d6s equal to 1 + half your level (rounded down).One target you touch regains that many hit points.",
    duration: { type: "Instant", amt: 0 },
  },
  {
    name: "Invisibility",
    range: "Close",
    class: "Wizard",
    tier: 2,
    desc: "A creature you touch becomes invisible for the spell’s duration.The spell ends if the target attacks or casts a spell.",
    duration: { type: "Round", amt: 10 },
  },
  {
    name: "Detect Magic",
    range: "Near",
    class: "Wizard",
    tier: 1,
    desc: "You can sense the presence of magic within near range for the spell's duration. If you focus for two rounds, you discern its general properties. Full barriers block this spell.",
    duration: { type: "Focus", amt: 0 },
  },
  {
    name: "Knock",
    range: "Near",
    class: "Wizard",
    tier: 2,
    desc: "A door, window, gate, chest, or portal you can see within range instantly opens, defeating all mundane locks and barriers.This spell creates a loud knock audible to all within earshot.",
    duration: { type: "Instant", amt: 0 },
  },
  {
    name: "Magic Missile",
    range: "Far",
    class: "Wizard",
    tier: 1,
    desc: "You have advantage on your check to cast this spell.A glowing bolt of force streaks from your open hand, dealing [[/r 1d4]] damage to one target.",
    duration: { type: "Instant", amt: 0 },
  },
  {
    name: "Detect Thoughts",
    range: "Near",
    class: "Wizard",
    tier: 2,
    desc: "You peer into the mind of one creature you can see within the spell’s range.Each round, you learn the target’s immediate thoughts.On its turn, the target makes a Wisdom check opposed by your last spellcasting check. If the target succeeds, it notices your presence in its mind and the spell ends.",
    duration: { type: "Focus", amt: 0 },
  },
  {
    name: "Smite",
    range: "Near",
    class: "Priest",
    tier: 2,
    desc: "You call down punishing flames on a creature you can see within range. It takes [[/r 1d6]] damage.",
    duration: { type: "Instant", amt: 0 },
  },
  {
    name: "Protection From Evil",
    range: "Close",
    class: "Priest",
    tier: 1,
    desc: "For the spell’s duration, chaotic beings have disadvantage on attack rolls and hostile spellcasting checks against the target. These beings also can’t possess, compel, or beguile it.When cast on an already-possessed target, the possessing entity makes a CHA check vs. the last spellcasting check. On a failure, the entity is expelled.",
    duration: { type: "Focus", amt: 0 },
  },
  {
    name: "Levitate",
    range: "Self",
    class: "Wizard",
    tier: 2,
    desc: "You can float a near distance vertically per round on your turn.You can also push against solid objects to move horizontally.",
    duration: { type: "Focus", amt: 0 },
  },
  {
    name: "Alarm",
    range: "Close",
    class: "Wizard",
    tier: 1,
    desc: "You touch one object, such as a door threshold, setting a magical alarm on it.If any creature you do not designate while casting the spell touches or crosses past the object, a magical bell sounds in your head.If any creature you do not designate while casting the spell touches or crosses past the object, a magical bell sounds in your head.",
    duration: { type: "Day", amt: 1 },
  },
  {
    name: "Shield of Faith",
    range: "Self",
    class: "Priest",
    tier: 1,
    desc: "A protective force wrought of your holy conviction surrounds you. You gain a +2 bonus to your armor class for the duration.",
    duration: { type: "Round", amt: 5 },
  },
  {
    name: "Turn Undead",
    range: "Near",
    class: "Priest",
    tier: 1,
    desc: "You rebuke undead creatures, forcing them to flee. You must present a holy symbol to cast this spell.Undead creatures within near of you must make a CHA check opposed by your spellcasting check. If a creature fails by 10+ points and is equal to or less than your level, it is destroyed. Otherwise, on a fail, it flees from you for 5 rounds.",
    duration: { type: "Instant", amt: 0 },
  },
  {
    name: "Sleep",
    range: "Near",
    class: "Wizard",
    tier: 1,
    desc: "This spell fills a near-sized cube extending from you. Choose a number of living creatures in the area up to your level. Those creatures fall into a deep sleep if they are LV 2 or less. Injury or vigorous shaking wakes them.",
    duration: { type: "Instant", amt: 0 },
  },
  {
    name: "Fixed Object",
    range: "Close",
    class: "Wizard",
    tier: 2,
    desc: "An object you touch that weighs no more than 5 pounds becomes fixed in its current location. It can support up to 5,000 pounds of weight for the duration of the spell.",
    duration: { type: "Round", amt: 5 },
  },
  {
    name: "Alter Self",
    range: "Self",
    class: "Wizard",
    tier: 2,
    desc: "You magically change your physical form, gaining one feature that modifies your existing anatomy.For example, you can grow functional gills on your neck or bear claws on your fingers. This spell can’t grow wings or limbs.",
    duration: { type: "Round", amt: 5 },
  },
  {
    name: "Hold Portal",
    range: "Near",
    class: "Wizard",
    tier: 1,
    desc: "You magically hold a portal closed for the duration. A creature must make a successful STR check vs. your spellcasting check to open the portal.The knock spell ends this spell.",
    duration: { type: "Round", amt: 10 },
  },
  {
    name: "Zone of Truth",
    range: "Near",
    class: "Priest",
    tier: 2,
    desc: "You compel a creature you can see to speak truth. It can’t utter a deliberate lie while within range.",
    duration: { type: "Focus", amt: 0 },
  },
];

const SPELL_COMPENDIUM: { [name: string]: SpellInfo } = {};
for (const s of SPELLS) {
  SPELL_COMPENDIUM[s.name.toLowerCase()] = s;
}
export default SPELL_COMPENDIUM;

// const tempSpells: SpellInfo[] = [];
//
// oldSpells.forEach((s) => {
//   const durationVal = s.system.duration.value;
//
//   const convert: { [key: string]: DurationType } = {
//     days: "Day",
//     instant: "Instant",
//     rounds: "Round",
//   };
//
//   function converttoRoll(s: string): Roll {
//     const numDice = parseInt(s[0]);
//     const diceType = s.substring(1) as DiceType;
//     return { numDice, diceType };
//   }
//
//   tempSpells.push({
//     name: s.name,
//     range: s.system.range as RangeType,
//     class: s.system.class[0] as "Wizard" | "Priest",
//     tier: s.system.tier as Tier,
//     desc: s.system.description.replaceAll("<p>", "").replaceAll("</p>", ""),
//     duration: {
//       type:
//         convert[s.system.duration.type] ??
//         (s.system.duration.type as DurationType),
//       roll: isNaN(Number(durationVal))
//         ? converttoRoll(`${durationVal}`)
//         : undefined,
//       amt: !isNaN(Number(durationVal)) ? Number(durationVal) : undefined,
//     },
//   });
// });
//
// console.log(JSON.stringify(tempSpells));
import type { Hero, SoulJadeSetup, SoulJadeSetupCategory } from '~/@types';
import { WieldingType } from '~/@types/index.d';
import { hiCloudAngledZap, hiFire, hiSnow, hiZap } from '~/iconsets/stroke';

// noinspection JSUnusedGlobalSymbols
export default function () {
  const heroes = useHeroes();
  const jades = useSoulJades();
  const potentials = usePotentials();

  const burn: SoulJadeSetupCategory = {
    name: 'Burn',
    icon: hiFire
  };

  const thunder: SoulJadeSetupCategory = {
    name: 'Thunder',
    icon: hiCloudAngledZap
  };

  const thunderbolt: SoulJadeSetupCategory = {
    name: 'Thunderbolt',
    icon: hiZap
  };

  const ice: SoulJadeSetupCategory = {
    name: 'Ice',
    icon: hiSnow
  };

  const incinerate: SoulJadeSetup = {
    name: 'Incinerate',
    difficulty: 4.5,
    jades: [
      jades.incineration, jades.ember, jades.defuseRagingFlame, jades.dracoStride, jades.defuseFlamingBlade, jades.copperWard
    ],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.feriaShen, heroes.tarkaJi, heroes.tianhai, heroes.matari
    ],
    attributes: [],
    category: burn,
    strengths: [
      'Has the highest amount of Burn Damage possible',
      'Can instakill some mobs when Defused and Dodge Canceled',
      'No wasted Burn ticks if you Dodge Cancel close enough after every Defuse'
    ],
    weaknesses: [
      'Applies self-burns',
      'Heroes with Defuse · Solve (unreliable Defuses)',
      'Without sufficient healing, can leave you critically low on Health'
    ],
    potential: potentials.fireTranscendence
  };

  const skyfireStorm: SoulJadeSetup = {
    name: 'Skyfire Storm',
    difficulty: 3,
    jades: [
      jades.stormstrideSword, jades.skyfire, jades.defuseRagingFlame, jades.defuseAegisBreak, jades.defuseSolidification,
      jades.defuseFlamingBlade
    ],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.feriaShen, heroes.wuchen
    ],
    attributes: [],
    category: burn,
    strengths: [
      'Charges Defuse · Raging Flames quickly',
      'Greatly increases the DPS of Defuse Counterattacks with many hits',
      'Deals heavy damage to tightly packed groups of enemies'
    ],
    weaknesses: [
      'Requires constant Defuses to maintain power',
      'Heroes with Defuse · Solve (unreliable Defuses)',
      'Wastes Burn damage if you reapply the same Burn before it expires'
    ],
    potential: potentials.thunderousPower
  };

  const torrentFlames: SoulJadeSetup = {
    name: 'Torrent Flames',
    difficulty: 2.5,
    jades: [
      jades.skyfire, jades.defuseRagingFlame, jades.torrentFlowThunderWielding, jades.defuseAegisBreak, jades.defuseSolidification,
      jades.defuseFlamingBlade
    ],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.yueshan
    ],
    attributes: [],
    category: burn,
    strengths: [
      'Deals high damage over time alongside bursts of damage from Skyfire',
      'Versatile in what it can handle',
      'Extreme power boost following a defuse'
    ],
    weaknesses: [
      'Requires at least 1 Defuse every 10-15 seconds to maintain power',
      'Can be tricky to chain Defuses on Yueshan',
      'Wastes Burn damage if you reapply the same Burn before it expires'
    ],
    potential: potentials.flameTranscendence
  };

  const cauterize: SoulJadeSetup = {
    name: 'Cauterize',
    difficulty: 3.5,
    jades: [
      jades.incineration, jades.ember, jades.defuseSoulsnatch, jades.defuseRagingFlame, jades.dracoStride, jades.defuseFlamingBlade
    ],
    wieldingType: WieldingType.Ice,
    heroes: [
      heroes.tianhai, heroes.tarkaJi, heroes.matari
    ],
    attributes: [],
    category: burn,
    strengths: [
      'Decent bursts of damage from HydroFlares',
      'Potentially can instakill some mobs when Defused and Dodge Canceled',
      'No wasted Burn ticks if you Dodge Cancel after every Defuse'
    ],
    weaknesses: [
      'Without sufficient healing, can burn through Health and Armor, leaving you at 1 HP',
      'Heroes with Defuse · Solve (unreliable Defuses)',
      'Failure to activate HydroFlare from Burn stacks will result in major loss in damage'
    ],
    potential: potentials.incineration
  };

  const thunderWielder: SoulJadeSetup = {
    name: 'Thunder Wielder',
    difficulty: 3,
    jades: [
      jades.thunderpull, jades.thunderCounter, jades.springsCall, jades.velocityUntoldThunderWielding, jades.iceBreak,
      jades.subZeroSeal
    ],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.feriaShen, heroes.tianhai, heroes.temulch, heroes.tarkaJi, heroes.kurumi, heroes.yueshan, heroes.wuchen
    ],
    attributes: [],
    category: thunder,
    strengths: [
      'Thunder Counters are always at full power',
      'Can unleash full power from regular parries and Thunder Counter',
      'Highest potential hit damage value'
    ],
    weaknesses: [
      'Frostbite builds on self gradually',
      'Loses damage buff while below 50% HP',
      'May be hard to get a parry in Trios'
    ],
    potential: potentials.thunderCounter
  };

  const lightningRod: SoulJadeSetup = {
    name: 'Lightning Rod',
    difficulty: 2.5,
    jades: [
      jades.thunderpull, jades.thunderCounter, jades.springsCall, jades.thunderproof, jades.iceBreak, jades.subZeroSeal
    ],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.viperNing, heroes.tianhai, heroes.wuchen
    ],
    attributes: [],
    category: thunder,
    strengths: [
      'Fast build-up from Thunderpull for Thunder Counters',
      'Universal Souljades (not hero specific)',
      'No flinching from Divine Thunder on yourself'
    ],
    weaknesses: [
      'Lacks a Wielding Souljade for activating Divine Thunder on enemies easier',
      'Relies on more openings to land Thunder Counters safely',
      'Requires high Divine Thunder DMG to compensate for lack of base DPS'
    ],
    potential: potentials.thunderCounter
  };

  const divineDesperation: SoulJadeSetup = {
    name: 'Divine Desperation',
    difficulty: 4,
    jades: [
      jades.thunderpull, jades.thunderCounter, jades.desperation, jades.stormstride, jades.velocityUntoldThunderWielding,
      jades.backfire
    ],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.temulch, heroes.tarkaJi, heroes.kurumi, heroes.valdaCui,
      heroes.yueshan
    ],
    attributes: [],
    category: thunder,
    strengths: [
      'Consistent high damage output',
      'Doesn\'t build frostbite',
      'Bonus DPS from Dodge Canceling & regular dodges'
    ],
    weaknesses: [
      'Vulnerable to burn, poison, and corruption ailments',
      'Loses damage buff above 50% HP',
      'Has a lower cap in its full power'
    ],
    potential: potentials.thunderCounter
  };

  const thunderSap: SoulJadeSetup = {
    name: 'Thunder Sap',
    difficulty: 3.5,
    jades: [
      jades.thunderpull, jades.thunderCounter, jades.stormstride, jades.sap, jades.velocityUntoldThunderWielding,
      jades.backfire
    ],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.temulch, heroes.tarkaJi, heroes.kurumi, heroes.valdaCui,
      heroes.yueshan
    ],
    attributes: [],
    category: thunder,
    strengths: [
      'Consistent high damage output',
      'Allows the use of Sap Souljade',
      'Bonus DPS from Dodge Canceling & regular dodges'
    ],
    weaknesses: [
      'Heal from Sap may be limited due to Backfire',
      'Somewhat vulnerable to burn, poison and corruption ailments',
      'Has a lower cap in its full power'
    ],
    potential: potentials.thunderCounter
  };

  const blinkStrike: SoulJadeSetup = {
    name: 'Blink Strike',
    difficulty: 2.5,
    jades: [
      jades.thunderSword, jades.thunderpull, jades.thunderMastery, jades.thunderCounter, jades.stormstride,
      jades.verticalBlinkStrikeThunderWielding
    ],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.kurumi
    ],
    attributes: [],
    category: thunderbolt,
    strengths: [
      'Empowers Kurumi\'s Vertical Blink Strike significantly',
      'Builds up Thundershock for Thunder Counter quickly from attacks',
      'Features high base damage'
    ],
    weaknesses: [
      'Stamina management can get tricky when spamming Blink Strikes',
      'Thunderbolts can build Thundershock unintentionally',
      'Low base attack bonus'
    ],
    potential: potentials.thunderousPower
  };

  const lightningDash: SoulJadeSetup = {
    name: 'Lightning Dash',
    difficulty: 2,
    jades: [
      jades.stormstrideSword, jades.thunderMastery, jades.stormstride, jades.arcaneThunder, jades.assassinsLungeIceWielding,
      jades.quickAttack
    ],
    wieldingType: WieldingType.Ice,
    heroes: [
      heroes.matari
    ],
    attributes: [],
    category: thunderbolt,
    strengths: [
      'Every action you can do will summon a Thunderbolt',
      'Effective against both bosses and mobs',
      'Somewhat makes up for Matari\'s low base damage'
    ],
    weaknesses: [
      'Stamina management can be difficult when spamming Assassin\'s Lunge',
      'Failure to land your Stormstrides can result in major loss in damage',
      'Using a Charged Attack will debuff your Attack temporarily'
    ],
    potential: potentials.thunderousPower
  };

  const staticShock: SoulJadeSetup = {
    name: 'Static Shock',
    difficulty: 2.5,
    jades: [
      jades.thunderSword, jades.thunderpull, jades.thunderMastery, jades.thunderCounter, jades.stormstride, jades.thunderproof
    ],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.viperNing
    ],
    attributes: [],
    category: thunderbolt,
    strengths: [
      'Quickest Thundershock generation possible for Viper from Thunderpull',
      'Boosts both her Charged Attacks and her Aegis-break (if you Dodge Cancel it)',
      'Not staggered by Divine Thunder'
    ],
    weaknesses: [
      'Relies more so on Divine Thunder DMG from Thunder Counter than Thunderbolts',
      'Struggles with maintaining Honed status',
      'May unintentionally build Thundershock from Thunderbolts'
    ],
    potential: potentials.thunderousPower
  };

  const thunderBreak: SoulJadeSetup = {
    name: 'Thunder Break',
    difficulty: 2.5,
    jades: [
      jades.stormstrideSword, jades.thunderpull, jades.thunderMastery, jades.thunderCounter, jades.stormstride,
      jades.crescentSlamThunderWielding
    ],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.valdaCui, heroes.feriaShen
    ],
    attributes: [],
    category: thunderbolt,
    strengths: [
      'Boosts Uncharged Attacks with multiple hits significantly',
      'Builds Thundershock from Thunderpull quickly for Thunder Counter',
      'Stormstride rewards you for Dodge Canceling'
    ],
    weaknesses: [
      'Honed status may be difficult to build up',
      'Low base attack bonus',
      'Focuses on attacks that are less safe, due to the time required to carry them out'
    ],
    potential: potentials.honedRage
  };

  const icyShadow: SoulJadeSetup = {
    name: 'Icy Shadow',
    difficulty: 3.5,
    jades: [
      jades.successiveIceBlast, jades.depthsBlast, jades.yushanShadows, jades.frozenBlast, jades.subZeroSeal,
      jades.tundraMight
    ],
    wieldingType: WieldingType.Ice,
    heroes: [
      heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.temulch, heroes.kurumi, heroes.valdaCui, heroes.matari,
      heroes.wuchen
    ],
    attributes: [],
    category: ice,
    strengths: [
      'Has the fastest activation rate for Ice Blasts',
      'Great for clearing mobs',
      'Yushan Shadows proccs Ice Blast in one hit on bosses'
    ],
    weaknesses: [
      'Can freeze you quickly if you fail to Defuse the freeze',
      'Yushan Shadows can often activate while Ice Blast is on cooldown',
      'Relies on correct Potential to be efficient'
    ],
    /* TODO: Verify that this is the correct potential as only a PATH was previously specified */
    potential: potentials.elementalBlast
  };

  const springsAdvent: SoulJadeSetup = {
    name: 'Spring\'s Advent',
    difficulty: 3,
    jades: [
      jades.successiveIceBlast, jades.frozenBlast, jades.springsCall, jades.velocityUntoldThunderWielding, jades.defuseThaw,
      jades.subZeroSeal
    ],
    wieldingType: WieldingType.Ice,
    heroes: [
      heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.temulch, heroes.kurumi, heroes.valdaCui, heroes.matari,
      heroes.wuchen
    ],
    attributes: [],
    category: ice,
    strengths: [
      'Potentially high hit damage bonus',
      'Clears mobs quickly',
      'High burst damage'
    ],
    weaknesses: [
      'Low base damage bonus',
      'Passive generation of Frostbite is slightly faster',
      'Requires a successful defuse to be at full power'
    ],
    potential: potentials.elementalBlast
  };

  const yueshanEnigma: SoulJadeSetup = {
    name: 'Yueshan Enigma',
    difficulty: 2,
    jades: [
      jades.successiveIceBlast, jades.frozenBlast, jades.incineration, jades.arcaneThunder, jades.subZeroSeal, jades.tundraMight
    ],
    wieldingType: WieldingType.Ice,
    heroes: [
      heroes.viperNing
    ],
    attributes: [],
    category: ice,
    strengths: [
      'Strongest Ice Build',
      'Clears non-Boss mobs with ease',
      'Activates Ice Blast the quickest from Viper\'s ability'
    ],
    weaknesses: [
      'Requires 100% [Moderation] to be effective',
      'Can take a little while to activate Ice Blast if you mistime your ability on the same target',
      'Requires using Viper\'s Ability or Ultimate to avoid Freeze'
    ],
    potential: potentials.elementalBlast
  };

  const steamCannon: SoulJadeSetup = {
    name: 'Steam Cannon',
    difficulty: 1.5,
    jades: [
      jades.successiveIceBlast, jades.repairRoll, jades.flamebreath, jades.cinderfrost, jades.subZeroSeal, jades.tundraMight
    ],
    wieldingType: WieldingType.Ice,
    heroes: [
      heroes.tarkaJi, heroes.yueshan
    ],
    attributes: [],
    category: ice,
    strengths: [
      'Amazing for clearing mobs, takes 2 shots to kill groups of small mobs',
      'High burst damage between HydroFlares and Ice Blast',
      'Builds high amounts of Honed Status from Flame Transcendence'
    ],
    weaknesses: [
      'Awkward damage vs bosses',
      'Relies on a decent supply of Weaponry Kits',
      'Build is essentially inactive when below 50% HP'
    ],
    potential: potentials.cannon
  };

  const all: SoulJadeSetup[] = [
    incinerate,
    skyfireStorm,
    torrentFlames,
    cauterize,
    thunderWielder,
    lightningRod,
    divineDesperation,
    thunderSap,
    blinkStrike,
    lightningDash,
    staticShock,
    thunderBreak,
    icyShadow,
    springsAdvent,
    yueshanEnigma,
    steamCannon
  ];

  const categories: SoulJadeSetupCategory[] = [
    burn,
    thunder,
    thunderbolt,
    ice
  ];

  const forHero = (hero: Hero): SoulJadeSetup[] => all.filter(setup => setup.heroes.find(h => h.name === hero.name));

  const byCategory = (category: string): SoulJadeSetup[] => all.filter(setup => setup.category.name === category);

  const toUrl = (setup: SoulJadeSetup): string => setup.name.toLowerCase().replace(/\s|'/g, '-');

  return {
    all,
    categories,

    incinerate,
    skyfireStorm,
    torrentFlames,
    cauterize,
    thunderWielder,
    lightningRod,
    divineDesperation,
    thunderSap,
    blinkStrike,
    lightningDash,
    staticShock,
    thunderBreak,
    icyShadow,
    springsAdvent,
    yueshanEnigma,
    steamCannon,

    forHero,
    byCategory,
    toUrl
  };

}
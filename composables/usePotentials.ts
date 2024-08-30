import type { PotentialPath, PotentialPlan } from '~/@types';
import { hiCells, hiFire, hiRain, hiTropicalStorm } from '~/iconsets/stroke';

// noinspection JSUnusedGlobalSymbols
export default function() {

  const heroes = useHeroes();

  const blazingFlame: PotentialPath = {
    icon: hiFire,
    name: 'Blazing Flame',
    description: 'This Potential Path focuses on the left Green side. It increases the damage of your Burns by 55% at base, that scales with any Health % bonuses that you have, including the 20% from hero levels. Furthermore, it makes your Divine Thunder (excluding Thunder Counter) apply a decent Burn alongside boosting your Martial Skills Aegis-Break and Defuse Counterattack',
    heroes: heroes.all
  };

  const elementalBlast: PotentialPath = {
    icon: hiCells,
    name: 'Elemental Blast',
    description: 'This Potential Path focuses on maximizing elemental accumulation by boosting the base rate of all attacks and an extreme boost to your Martial Skills, Aegis-Break & Defuse Counterattack. Ice builds in particular no longer have a dedicated section for them, however, you can still boost your frostbite accumulation rate from two glyphs: Flame-Thunder Chant and Frost Douse. However, it does struggle with maintaining Honed Status',
    heroes: [heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.telmuch, heroes.kurumi, heroes.valdaCui, heroes.matari, heroes.wuchen]
  };

  const divineStorm: PotentialPath = {
    icon: hiTropicalStorm,
    name: 'Divine Storm',
    description: 'This Potential Path primarily emphasizes the Divine Storm glyph, which is located in the middle Red section. This path greatly increases your Thunderbolt damage and can stack Honed Status quickly the more Thunderbolts you can summon',
    heroes: [heroes.feriaShen, heroes.tarkaJi, heroes.kurumi, heroes.matari, heroes.wuchen]
  };

  const hydroFlare: PotentialPath = {
    icon: hiRain,
    name: 'HydroFlare',
    description: 'This Potential Path is focused on the Fiery Bath glyph, located in the Blue section on the right. It is focused on applying Hydroflare as much as possible whether from Ice Blasts, Draco Stride or even Valda Cui\'s abilities',
    heroes: [heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.telmuch, heroes.kurumi, heroes.valdaCui]
  };

  const paths: PotentialPath = [
    blazingFlame,
    elementalBlast,
    divineStorm,
    hydroFlare
  ];

  const flameTranscendence: PotentialPlan = {
    path: blazingFlame,
    name: 'Flame Transcendence',
    description: 'Focuses on spamming your Aegis-Break for damage output and proccing Divine Thunder on enemies, which then apply a Burn for further increased Honed Status duration. This variant is recommended for all Thunder builds',
    heroes: [heroes.viperNing, heroes.feriaShen, heroes.kurumi, heroes.valdaCui, heroes.matari, heroes.wuchen]
  };

  const fireTrascendence: PotentialPlan = {
    path: blazingFlame,
    name: 'Fire Transcendence',
    description: 'Synergizes with the Incineration & Ember Souljades in that it makes all Burns non-lethal while also granting Honed Status from them alongside successful Defuses. Burn immunity doesn\'t become active until you\'ve reached glyph #7. Extremely effective against Burn-based Omens',
    heroes: [heroes.tianhai, heroes.tarkaJi, heroes.yueshan, heroes.matari]
  };

  const thunderousPower: PotentialPlan = {
    path: blazingFlame,
    name: 'Thunderous Power',
    description: 'For heroes who have lots of hits on their Martial Skills and therefore make great use of Stormstride Sword to increase their DPS',
    heroes: [heroes.feriaShen, heroes.wuchen]
  };

  const thunderCounter: PotentialPlan = {
    path: blazingFlame,
    name: 'Thunder Counter',
    description: 'Meant for builds making use of Thunderpull and Thunder Counter, giving you great sustain from your counters',
    heroes: heroes.all
  };

  const divineAegisBreak: PotentialPlan = {
    path: elementalBlast,
    name: 'Divine Aegis-break',
    description: 'For heroes who still benefit greatly from Honed Rage (Honed Tyranny replacement) to deal great DPS with their Martial Skill Aegis-Break',
    heroes: [heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.valdaCui, heroes.matari, heroes.wuchen]
  };

  const divineDefuse: PotentialPlan = {
    path: elementalBlast,
    name: 'Divine Defuse',
    description: 'Alternate path giving increased Honed Duration from successful Defuses, better for those who don\'t benefit particularly from Honed Rage',
    heroes: [heroes.telmuch]
  };

  const yushanEnigma: PotentialPlan = {
    path: elementalBlast,
    name: 'Yushan Enigma',
    description: 'With the matching Souljades, makes for an extremely powerful build for Viper Ning if you manage to get at least 100% [Moderation] to activate your ability repeatedly for instant Ice Blasts',
    heroes: [heroes.viperNing]
  };

  const fullRed: PotentialPlan = {
    path: divineStorm,
    name: 'Full Red',
    description: 'Completely focuses on Thunderbolt based damage output. Great for heroes who can use multiple Thunderbolt Souljades effectively',
    heroes: [heroes.tarkaJi, heroes.kurumi, heroes.matari]
  };

  const honedRage: PotentialPlan = {
    path: divineStorm,
    name: 'Honed Rage',
    description: 'Combines Thunderbolt damage with Honed Rage, great for Heroes that have either lots of hits on their Martial Skill Aegis-Break to proc Stormstride Sword and/or who gain DPS from Honed Rage',
    heroes: [heroes.feriaShen, heroes.kurumi, heroes.matari, heroes.wuchen]
  };

  const incineration: PotentialPlan = {
    path: hydroFlare,
    name: 'Incineration',
    description: 'Can be combined with the Incineration + Ember Souljades for a very risky 1 HP DPS build. Has an extremely high skill floor to use effectively, mainly for those looking for a challenge',
    heroes: [heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.telmuch, heroes.kurumi, heroes.valdaCui]
  };

  const cannon: PotentialPlan = {
    path: hydroFlare,
    name: 'Cannon',
    description: 'Grants the Cannon extra elemental accumulation, while allowing you to cause Hydroflares from Ice Blasts for major burst damage on mobs',
    heroes: [heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.telmuch, heroes.kurumi, heroes.valdaCui]
  };

  const plans: PotentialPlan[] = [
    flameTranscendence,
    fireTrascendence,
    thunderousPower,
    thunderCounter,
    divineAegisBreak,
    divineDefuse,
    yushanEnigma,
    fullRed,
    honedRage,
    incineration,
    cannon
  ];

  const toUrl = (potential: PotentialPath | PotentialPlan) => potential.name.toLowerCase().replace(/\s|'/g, '-');

  return {
    all: [...paths, ...plans],
    paths,

    blazingFlame,
    elementalBlast,
    divineStorm,
    hydroFlare,

    plans,

    flameTranscendence,
    fireTrascendence,
    thunderousPower,
    thunderCounter,
    divineAegisBreak,
    divineDefuse,
    yushanEnigma,
    fullRed,
    honedRage,
    incineration,
    cannon,

    toUrl
  };

}
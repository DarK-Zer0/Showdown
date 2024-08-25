import type { Hero, SoulJadeSetup, SoulJadeSetupCategory } from '~/@types';
import { WieldingType } from '~/@types/index.d';
import { hiCloudAngledZap, hiFire, hiSnow, hiZap } from '~/iconsets/stroke';

// noinspection JSUnusedGlobalSymbols
export default function () {
  const heroes = useHeroes();

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
    jades: [],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.feriaShen, heroes.tarkaJi, heroes.tianhai, heroes.matari
    ],
    category: burn
  };

  const skyfireStorm: SoulJadeSetup = {
    name: 'Skyfire Storm',
    jades: [],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.feriaShen, heroes.wuchen
    ],
    category: burn
  };

  const torrentFlames: SoulJadeSetup = {
    name: 'Torrent Flames',
    jades: [],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.yueshan
    ],
    category: burn
  };

  const cauterize: SoulJadeSetup = {
    name: 'Cauterize',
    jades: [],
    wieldingType: WieldingType.Ice,
    heroes: [
      heroes.tianhai, heroes.tarkaJi, heroes.matari
    ],
    category: burn
  };

  const thunderWielder: SoulJadeSetup = {
    name: 'Thunder Wielder',
    jades: [],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.feriaShen, heroes.tianhai, heroes.telmuch, heroes.tarkaJi, heroes.kurumi, heroes.yueshan, heroes.wuchen
    ],
    category: thunder
  };

  const lightningRod: SoulJadeSetup = {
    name: 'Lightning Rod',
    jades: [],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.viperNing, heroes.tianhai, heroes.wuchen
    ],
    category: thunder
  };

  const divineDesperation: SoulJadeSetup = {
    name: 'Divine Desperation',
    jades: [],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.telmuch, heroes.tarkaJi, heroes.kurumi, heroes.valdaCui,
      heroes.yueshan
    ],
    category: thunder
  };

  const thunderSap: SoulJadeSetup = {
    name: 'Thunder Sap',
    jades: [],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.telmuch, heroes.tarkaJi, heroes.kurumi, heroes.valdaCui,
      heroes.yueshan
    ],
    category: thunder
  };

  const blinkStrike: SoulJadeSetup = {
    name: 'Blink Strike',
    jades: [],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.kurumi
    ],
    category: thunderbolt
  };

  const lightningDash: SoulJadeSetup = {
    name: 'Lightning Dash',
    jades: [],
    wieldingType: WieldingType.Ice,
    heroes: [
      heroes.matari
    ],
    category: thunderbolt
  };

  const staticShock: SoulJadeSetup = {
    name: 'Static Shock',
    jades: [],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.viperNing
    ],
    category: thunderbolt
  };

  const thunderBreak: SoulJadeSetup = {
    name: 'Thunder Break',
    jades: [],
    wieldingType: WieldingType.Thunder,
    heroes: [
      heroes.valdaCui, heroes.feriaShen
    ],
    category: thunderbolt
  };

  const icyShadow: SoulJadeSetup = {
    name: 'Icy Shadow',
    jades: [],
    wieldingType: WieldingType.Ice,
    heroes: [
      heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.telmuch, heroes.kurumi, heroes.valdaCui, heroes.matari,
      heroes.wuchen
    ],
    category: ice
  };

  const springsAdvent: SoulJadeSetup = {
    name: 'Spring\'s Advent',
    jades: [],
    wieldingType: WieldingType.Ice,
    heroes: [
      heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.telmuch, heroes.kurumi, heroes.valdaCui, heroes.matari,
      heroes.wuchen
    ],
    category: ice
  };

  const yueshanEnigma: SoulJadeSetup = {
    name: 'Yueshan Enigma',
    jades: [],
    wieldingType: WieldingType.Ice,
    heroes: [
      heroes.viperNing
    ],
    category: ice
  };

  const steamCannon: SoulJadeSetup = {
    name: 'Steam Cannon',
    jades: [],
    wieldingType: WieldingType.Ice,
    heroes: [
      heroes.tarkaJi, heroes.yueshan
    ],
    category: ice
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

  const forHero = (hero: Hero): SoulJadeSetup[] => all.filter(setup => setup.heroes.find(h => h.name === hero.name));

  const byCategory = (category: string): SoulJadeSetup[] => all.filter(setup => setup.category.name === category);

  return {
    all,

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
    byCategory
  };

}
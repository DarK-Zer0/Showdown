import type { Hero, SoulJadeSetup, SoulJadeSetupCategory } from '~/@types';
import { WieldingType } from '~/@types/index.d';
import { hiCloudAngledZap, hiFire, hiSnow, hiZap } from '~/iconsets/stroke';

// noinspection JSUnusedGlobalSymbols
export default function () {
  const heroes = useHeroes();
  const jades = useSoulJades();

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
    category: burn
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
    category: burn
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
    category: burn
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
    category: burn
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
      heroes.feriaShen, heroes.tianhai, heroes.telmuch, heroes.tarkaJi, heroes.kurumi, heroes.yueshan, heroes.wuchen
    ],
    category: thunder
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
    category: thunder
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
      heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.telmuch, heroes.tarkaJi, heroes.kurumi, heroes.valdaCui,
      heroes.yueshan
    ],
    category: thunder
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
      heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.telmuch, heroes.tarkaJi, heroes.kurumi, heroes.valdaCui,
      heroes.yueshan
    ],
    category: thunder
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
    category: thunderbolt
  };

  const lightningDash: SoulJadeSetup = {
    name: 'Lightning Dash',
    difficulty: 2,
    jades: [
      jades.stormstrideSword, jades.thunderMastery, jades.stormstride, jades.arcaneThunder, jades.assasinsLungeIceWielding,
      jades.quickAttack
    ],
    wieldingType: WieldingType.Ice,
    heroes: [
      heroes.matari
    ],
    category: thunderbolt
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
    category: thunderbolt
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
    category: thunderbolt
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
      heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.telmuch, heroes.kurumi, heroes.valdaCui, heroes.matari,
      heroes.wuchen
    ],
    category: ice
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
      heroes.viperNing, heroes.feriaShen, heroes.tianhai, heroes.telmuch, heroes.kurumi, heroes.valdaCui, heroes.matari,
      heroes.wuchen
    ],
    category: ice
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
    category: ice
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

  const categories: SoulJadeSetupCategory[] = [
    burn,
    thunder,
    thunderbolt,
    ice
  ];

  const forHero = (hero: Hero): SoulJadeSetup[] => all.filter(setup => setup.heroes.find(h => h.name === hero.name));

  const byCategory = (category: string): SoulJadeSetup[] => all.filter(setup => setup.category.name === category);

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
    byCategory
  };

}
import type { SoulJade } from '~/@types';
import { SoulJadeCategory, SoulJadeRarity, SoulJadeType, WieldingType } from '~/@types/index.d';

// noinspection JSUnusedGlobalSymbols
export default function () {

  const weapons = useWeapons();

  const health1: SoulJade = {
    name: 'Health I',
    description: 'Increases maximum Health',
    rarity: SoulJadeRarity.Common,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.Stat,
    baseStat: 8
  };

  const attack1: SoulJade = {
    name: 'Attack I',
    description: 'Increases Attack',
    rarity: SoulJadeRarity.Common,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Stat,
    baseStat: 3
  };

  const damageReduction1: SoulJade = {
    name: 'Damage Reduction I',
    description: 'Reduces damage taken',
    rarity: SoulJadeRarity.Common,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Stat,
    baseStat: 4
  };

  const health2: SoulJade = {
    name: 'Health II',
    description: 'Increases maximum Health',
    rarity: SoulJadeRarity.Rare,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.Stat,
    baseStat: 16
  };

  const attack2: SoulJade = {
    name: 'Attack II',
    description: 'Increases Attack',
    rarity: SoulJadeRarity.Rare,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Stat,
    baseStat: 4
  };

  const damageReduction2: SoulJade = {
    name: 'Damage Reduction II',
    description: 'Reduces damage taken',
    rarity: SoulJadeRarity.Rare,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Stat,
    baseStat: 6
  };

  const scattershot: SoulJade = {
    name: 'Scattershot',
    description: 'Bows deal less damage, but fire 3 arrows with each shot. Overall spread of the arrow is narrowed after charging',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Ranged,
    baseStat: 6,
    exclusive: weapons.bow
  };

  const sap: SoulJade = {
    name: 'Sap',
    description: 'Counterstrike Combo restores 75% of the damage dealt as Health or Armor',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6,
    exclusive: weapons.melee
  };

  const overlord: SoulJade = {
    name: 'Overlord',
    description: 'Stone Form of Greatsword and Polesword directly reaches the 3rd charge state',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6,
    exclusive: [weapons.polesword, weapons.greatsword]
  };

  const martialArtTaiChiFan: SoulJade = {
    name: 'Martial Art · Tai Chi Fan',
    description: 'Alters Fan\'s crouching and sliding Horizontal Strikes',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6,
    exclusive: weapons.fan
  };

  const alchemy: SoulJade = {
    name: 'Alchemy',
    description: 'Eating 1 fruit increases your Melee Resist by 0.3% (effects stack up to 60 levels)',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 6
  };

  const venomTipAndBarbedBolts: SoulJade = {
    name: 'Venom Tip & Barbed Bolts',
    description: 'Repeating Crossbow deals less damage but has poison on bolts, inflicting sustained damage upon hitting enemies. Poison effects stack up to 15 times at most',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Ranged,
    baseStat: 6,
    exclusive: weapons.repeatingCrossbow,
    upgradable: true
  };

  const twinshotAndBounceShell: SoulJade = {
    name: 'Twinshot & Bounce Shell',
    description: 'Cannons deal less damage, but fires 2 projectiles with each shot',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Ranged,
    baseStat: 6,
    exclusive: weapons.cannon,
    upgradable: true
  };

  const switchDazzle: SoulJade = {
    name: 'Switch · Dazzle',
    description: 'Switching to a ranged weapon while carrying out a melee attack unleashes a special move (Morus\' Blessing weapons excluded)',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 6,
    exclusive: weapons.ranged,
    upgradable: true
  };

  const slowshotAndSunwingShot: SoulJade = {
    name: 'Slowshot & Sunwing Shot',
    description: 'Increases the intervals between and the damage of the Musket\'s aimed shots',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Ranged,
    baseStat: 6,
    exclusive: weapons.musket,
    upgradable: true
  };

  const ruptureGaleOrbAndBurn: SoulJade = {
    name: 'Rupture Gale Orb & Burn',
    description: 'Increases the explosion radius of the Cannon\'s shots',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Ranged,
    baseStat: 6,
    exclusive: weapons.cannon,
    upgradable: true
  };

  const quickChargeAndThundercall: SoulJade = {
    name: 'Quick Charge & Thundercall',
    description: 'Reduces charged Pistol shots\' damage, but allows you to load up to two shots at a time and the charging will be muted',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Ranged,
    baseStat: 6,
    exclusive: weapons.pistol,
    upgradable: true
  };

  const fireArrowsAndTargetLock: SoulJade = {
    name: 'Fire Arrows & Target Lock',
    description: 'Arrows fired in the Bow\'s 2nd charge state deal less damage but can ignite enemies, dealing damage over time',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Ranged,
    baseStat: 6,
    exclusive: weapons.bow,
    upgradable: true
  };

  const vajrasGrip: SoulJade = {
    name: 'Vajra\'s Grip',
    description: 'When being Countered, restore some Health and your weapon will not drop',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 6,
    consumable: true
  };

  const starfall: SoulJade = {
    name: 'Starfall',
    description: 'Players will teleport to their target and deal a deadly blow when launching Grappling Hook again during a Grappling Strike',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 6,
    consumable: true
  };

  const explosiveArmor: SoulJade = {
    name: 'Explosive Armor',
    description: 'Shoots shards in all directions when your Armor breaks',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 6,
    consumable: true
  };

  const windyTrinity: SoulJade = {
    name: 'Windy Trinity',
    description: 'Alters Fan\'s charged horizontal strikes',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.fan
  };

  const staminaStrike: SoulJade = {
    name: 'Stamina Strike',
    description: 'The 3rd strike in a Katana vertical combo restores 65% of the damage dealt as Health or Armor',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.katana
  };

  const rampage: SoulJade = {
    name: 'Rampage',
    description: 'Alters Heng Sword\'s charged horizontal strike, and its combo after a charged vertical strike',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.hengsword
  };

  const martialArtShaolinStaff: SoulJade = {
    name: 'Martial Art · Shaolin Staff',
    description: 'Alters the 3rd vertical strike in the Staff\'s combo',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.staff
  };

  const martialArtHexaHarmonySpear: SoulJade = {
    name: 'Martial Art · Hexa Harmony Spear',
    description: 'Alters Spear\'s charged horizontal strikes',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.spear
  };

  const juggernaut: SoulJade = {
    name: 'Juggernaut',
    description: 'Defeating 1 enemy will increase your attack by 3% (effects stack up to 5 layers). 1 layer will be deducted when dropping or being defeated. This is not restricted by the Attack Cap',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 1
  };

  const jabbing: SoulJade = {
    name: 'Jabbing',
    description: 'Alters Staff\'s charged horizontal strikes',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.staff
  };

  const cyanFang: SoulJade = {
    name: 'Cyan Fang',
    description: 'Alters the three strikes in a melee weapon\'s horizontal combo and restores 75% of the damage dealt as Health or Armor',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.melee
  };

  const cavalryBloom: SoulJade = {
    name: 'Cavalry Bloom',
    description: 'Alters Dual Blades\' charged horizontal strikes',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.dualBlades
  };

  const blisteringEdge: SoulJade = {
    name: 'Blistering Edge',
    description: 'Alters Polesword\'s charged horizontal strikes',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.polesword
  };

  const benthicDDescent: SoulJade = {
    name: 'Benthic Descent',
    description: 'Alters Dual Halberds\' vertical strike after launching a charged horizontal strike',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.dualHalberds
  };

  const aerialRend: SoulJade = {
    name: 'Aerial Rend',
    description: 'Greatsword\'s charged vertical strikes unleash shockwaves.',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.greatsword
  };

  const tuNa: SoulJade = {
    name: 'Tu Na',
    description: 'Using the <\\Rest> emote recovers health. If you finish the emote, you then restore armor continuously for 120 sec.',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 12
  };

  const groupHeal: SoulJade = {
    name: 'Group Heal',
    description: 'The effects of Armor Powder and Healing Berries are shared with teammates, but their effects are slightly reduced',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 12
  };

  const focusSlide: SoulJade = {
    name: 'Focus Slide',
    description: 'Able to attack during slide',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialMovement,
    baseStat: 12
  };

  const advancedHeal: SoulJade = {
    name: 'Advanced Heal',
    description: 'Armor Powder and Healing Berries take effect over 5 sec, and provide more Armor/Health',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 12
  };

  const warriorPaceAndInfernalSlash: SoulJade = {
    name: 'Warrior Pace & Infernal Slash',
    description: 'Increases move speed while charging up a horizontal strike with a Greatsword',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.Melee,
    baseStat: 12,
    exclusive: weapons.greatsword,
    upgradable: true
  };

  const velocityUntoldAndTrigger: SoulJade = {
    name: 'Velocity Untold & Trigger',
    description: 'Alters the Nunchucks\' charged horizontal strikes',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.Melee,
    baseStat: 12,
    exclusive: weapons.nunchuks,
    upgradable: true
  };

  const soulshatterAndNetherstep: SoulJade = {
    name: 'Soulshatter & Netherstep',
    description: 'Dagger and Fan\'s Quick Dash can be performed repeatedly, with less Stamina cost',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.Melee,
    baseStat: 12,
    exclusive: weapons.fan,
    upgradable: true
  };

  const soothinBoon: SoulJade = {
    name: 'Soothing Boon',
    description: 'There\'s a 25% chance that Healing Berries or Armor Powder won\'t deplete after use',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 12,
    upgradable: true
  };

  const softStepAndGeckoFoot: SoulJade = {
    name: 'Soft Step & Gecko Foot',
    description: 'Silences the sound of your footsteps',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 12,
    upgradable: true
  };

  const rippleStepAnddPhantomStep: SoulJade = {
    name: 'Ripple Step & Phantom Step',
    description: 'Rolling briefly provides Stealth',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 12,
    upgradable: true
  };

  const poisonSplash: SoulJade = {
    name: 'Poison Splash',
    description: 'Players will release poisonous gas around them 0.5 sec after being defeated. Enemies affected will take damage overtime',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 12,
    consumable: true
  };

  const eruditionAndSpearStorm: SoulJade = {
    name: 'Erudition & Spear Storm',
    description: 'Alters Spear\'s charged vertical strikes',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 12,
    exclusive: weapons.spear,
    upgradable: true
  };

  const assaultSmolder: SoulJade = {
    name: 'Assault · Smolder',
    description: 'Burns enemies hit with melee weapon\'s Grappling Strikes, dealing damage over time',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 12,
    exclusive: weapons.melee,
    upgradable: true
  };

  const assasinsLungeAndNetherstep: SoulJade = {
    name: 'Assassin\'s Lunge & Netherstep',
    description: 'Alters Quick Dash horizontal strikes',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 12,
    exclusive: weapons.dagger,
    upgradable: true
  };

  const thunderstorm: SoulJade = {
    name: 'Thunderstorm',
    description: 'Alters the Katana\'s vertical strike Thunderstrike attack. Restore 65% of the damage dealt to enemies as Health or Armor',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6,
    exclusive: weapons.katana
  };

  const stanchionSkyPillar: SoulJade = {
    name: 'Stanchion · Sky Pillar',
    description: 'Alters the Staff\'s precise charged strikes, silence the enemy for a brief time and restore 160% of the damage dealt as Health or Armor',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6,
    exclusive: weapons.staff
  };

  const razorSwift: SoulJade = {
    name: 'Razor Swift',
    description: 'Alters Nezha\'s Might\'s strikes',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6,
    exclusive: weapons.spear
  };

  const pridesFall: SoulJade = {
    name: 'Pride\'s Fall',
    description: 'Adds a 2nd-stage move to Daggers\' charged horizontal strike. And the final hit can restore yourself 65% of damage dealt as Health or Armor',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6,
    exclusive: weapons.dagger
  };

  const martialArtWillFormHook: SoulJade = {
    name: 'Martial Art · Will Form Hook',
    description: 'Alters the 2nd charged vertical strike in the Dual Halberds combo, and the last move restores 160% of damage dealt as Health or Armor',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6,
    exclusive: weapons.dualHalberds
  };

  const martialArtOctaSlashBlade: SoulJade = {
    name: 'Martial Art · Octa-Slash Blade',
    description: 'Alters Dual Blades\' follow-up vertical attack after launching charged strikes',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6,
    exclusive: weapons.dualBlades
  };

  const heptaDetach: SoulJade = {
    name: 'Hepta-Detach',
    description: 'Alters Longsword\'s horizontal strike after a charged attack, which restores 400% of the damage dealt as Health or Armor',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6,
    exclusive: weapons.longsword
  };

  const mortalDefiance: SoulJade = {
    name: 'Mortal Defiance',
    description: 'When taking lethal damage, this Souljade will shatter and the damage will be negated. You will gain 40% Damage Reduction for 5 sec and restore 500 health',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 6,
    consumable: true
  };

  const wildWindspout: SoulJade = {
    name: 'Wild Windspout',
    description: 'Alters Fan\'s Charged Vertical Strike',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.fan
  };

  const universeSlash: SoulJade = {
    name: 'Universe Slash',
    description: 'Alters Dual Blades\' 2nd charged vertical strike',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.dualBlades
  };

  const theOvercomer: SoulJade = {
    name: 'The Overcomer',
    description: 'Alters the 3rd stage of Polesword\'s charged vertical strikes. Can be interrupted by jumping',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.polesword
  };

  const soulSlash: SoulJade = {
    name: 'Soul Slash',
    description: 'Alters the 2nd stage of the Katana\'s charged attack',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.katana
  };

  const phoenixBlast: SoulJade = {
    name: 'Phoenix Blast',
    description: 'Charged attacks unleash two blasts of sword energy',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.longsword
  };

  const meteor: SoulJade = {
    name: 'Meteor',
    description: 'Alters the Cannon\'s firing trajectory and speed, making shots fire straight and faster, increasing the explosion damage',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Ranged,
    baseStat: 4,
    exclusive: weapons.cannon
  };

  const mercilessHavoc: SoulJade = {
    name: 'Merciless Havoc',
    description: 'Alters vertical strikes under the form of Rising Cloud',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.staff
  };

  const heartstopperKick: SoulJade = {
    name: 'Heartstopper Kick',
    description: 'Dragonslayer temporarily silences enemies hit, and can lead into a follow-up attack if it misses',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.spear
  };

  const earthshaker: SoulJade = {
    name: 'Earthshaker',
    description: 'Alters the 3rd stage of Greatsword\'s charged horizontal strikes. Tap continuously for more attacks. Can be interrupted by jumping',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.greatsword
  };

  const dreadfulWail: SoulJade = {
    name: 'Dreadful Wail',
    description: 'Enhance vertical strikes made after a Quick Dash',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.dagger
  };

  const dragonlikeMight: SoulJade = {
    name: 'Dragonlike Might',
    description: 'Alters Dual Halberds\' charged horizontal strikes',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.dualHalberds
  };

  const dragonRoar: SoulJade = {
    name: 'Dragon Roar',
    description: 'Alters the Nunchucks\' Dragon Flurry attack, and builds Biding Fury',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.nunchuks
  };

  const detonatingRounds: SoulJade = {
    name: 'Detonating Rounds',
    description: 'Reduces charged Pistol shots\' damage, but makes them fire bullets that lodge inside enemies\' flesh and explode after 2 sec',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Ranged,
    baseStat: 4,
    exclusive: weapons.pistol
  };

  const cloudWeaver: SoulJade = {
    name: 'Cloud Weaver',
    description: 'Alters Fistblades\' second stage charged horizontal attack',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.fistblades
  };

  const burstArrow: SoulJade = {
    name: 'Burst Arrow',
    description: 'Arrows fired in the Bow\'s 2nd charge state deal less damage, but explode on impact',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Ranged,
    baseStat: 4,
    exclusive: weapons.bow
  };

  const auroraBurst: SoulJade = {
    name: 'Aurora Burst',
    description: 'Alters the Heng Sword\'s 2nd vertical charged strike',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.hengsword
  };

  const armorPierce: SoulJade = {
    name: 'Armor Pierce',
    description: 'Muskets deal less damage, but ignore the target\'s armor',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Ranged,
    baseStat: 4,
    exclusive: weapons.musket
  };

  const stormstride: SoulJade = {
    name: 'Stormstride',
    description: '0.5 sec after dodging call down a strike of lightning at your previous location. This only takes effect within 15 sec after attacking, or being attacked',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialMovement,
    baseStat: 12
  };

  const soulRelease: SoulJade = {
    name: 'Soul Release',
    description: 'Skips skill cooldown upon defeating an enemy',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 12
  };

  const skyforce: SoulJade = {
    name: 'Skyforce',
    description: 'Restores you to full armor upon defeating an enemy',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 12
  };

  const repairRoll: SoulJade = {
    name: 'Repair Roll',
    description: 'Replaces the weapon repair animation with a dodge',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 12
  };

  const desperation: SoulJade = {
    name: 'Desperation',
    description: 'Gain an attack boost when below 50% health',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 12
  };

  const incineration: SoulJade = {
    name: 'Incineration',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const ember: SoulJade = {
    name: 'Ember',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 4
  };

  const defuseRagingFlame: SoulJade = {
    name: 'Defuse · Raging Flame',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const dracoStride: SoulJade = {
    name: 'Draco Stride',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialMovement,
    baseStat: 12
  };

  const defuseFlamingBlade = {
    name: 'Defuse · Flaming Blade',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const copperWard: SoulJade = {
    name: 'Copper Ward',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 6
  };

  const stormstrideSword: SoulJade = {
    name: 'Stormstride · Sword',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const skyfire: SoulJade = {
    name: 'Skyfire',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const defuseAegisBreak: SoulJade = {
    name: 'Defuse · Aegis-break',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const defuseSolidification: SoulJade = {
    name: 'Defuse · Solidification',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const torrentFlowThunderWielding: SoulJade = {
    name: 'Torrent Flow · Thunder-Wielding',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.polesword,
    wieldingType: WieldingType.Thunder
  };

  const defuseSoulsnatch: SoulJade = {
    name: 'Defuse · Soul-snatch',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const thunderpull: SoulJade = {
    name: 'Thunderpull',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const thunderCounter: SoulJade = {
    name: 'Thunder Counter',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const springsCall: SoulJade = {
    name: 'Spring\'s Call',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialMovement,
    baseStat: 12
  };

  const velocityUntoldThunderWielding: SoulJade = {
    name: 'Velocity Untold · Thunder-Wielding',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.nunchuks,
    wieldingType: WieldingType.Thunder
  };

  const iceBreak: SoulJade = {
    name: 'Ice Break',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const subZeroSeal: SoulJade = {
    name: 'Sub-Zero Seal',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialMovement,
    baseStat: 12
  };

  const thunderproof: SoulJade = {
    name: 'Thunderproof',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const backfire: SoulJade = {
    name: 'Backfire',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const thunderSword: SoulJade = {
    name: 'Thunder Sword',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const thunderMastery: SoulJade = {
    name: 'Thunder Mastery',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const verticalBlinkStrikeThunderWielding: SoulJade = {
    name: 'Vertical Blink Strike · Thunder-Wielding',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.katana,
    wieldingType: WieldingType.Thunder
  };

  const assasinsLungeIceWielding: SoulJade = {
    name: 'Assassin\'s Lunge · Ice-Wielding',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Ice
  };

  const quickAttack: SoulJade = {
    name: 'Quick Attack',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const crescentSlamThunderWielding: SoulJade = {
    name: 'Crescent Slam · Thunder-Wielding',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.spear,
    wieldingType: WieldingType.Thunder
  };

  const successiveIceBlast: SoulJade = {
    name: 'Successive Ice Blast',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const depthsBlast: SoulJade = {
    name: 'Depths Blast',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const yushanShadows: SoulJade = {
    name: 'Yushan Shadows',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const frozenBlast: SoulJade = {
    name: 'Frozen Blast',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const tundraMight: SoulJade = {
    name: 'Tundra Might',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialMovement,
    baseStat: 12
  };

  const defuseThaw: SoulJade = {
    name: 'Defuse · Thaw',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const arcaneThunder: SoulJade = {
    name: 'Arcane Thunder',
    description: 'Pending description',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialMovement,
    baseStat: 12
  };

  const flamebreath: SoulJade = {
    name: 'Flamebreath',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Ranged,
    baseStat: 4,
    exclusive: weapons.cannon
  };

  const cinderfrost: SoulJade = {
    name: 'Cinderfrost',
    description: 'Pending description',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const all: SoulJade[] = [
    health1,
    attack1,
    damageReduction1,
    health2,
    attack2,
    damageReduction2,
    scattershot,
    sap,
    overlord,
    martialArtTaiChiFan,
    alchemy,
    venomTipAndBarbedBolts,
    twinshotAndBounceShell,
    switchDazzle,
    slowshotAndSunwingShot,
    ruptureGaleOrbAndBurn,
    quickChargeAndThundercall,
    fireArrowsAndTargetLock,
    vajrasGrip,
    starfall,
    explosiveArmor,
    windyTrinity,
    staminaStrike,
    rampage,
    martialArtShaolinStaff,
    martialArtHexaHarmonySpear,
    juggernaut,
    jabbing,
    cyanFang,
    cavalryBloom,
    blisteringEdge,
    benthicDDescent,
    aerialRend,
    tuNa,
    groupHeal,
    focusSlide,
    advancedHeal,
    warriorPaceAndInfernalSlash,
    velocityUntoldAndTrigger,
    soulshatterAndNetherstep,
    soothinBoon,
    softStepAndGeckoFoot,
    rippleStepAnddPhantomStep,
    poisonSplash,
    eruditionAndSpearStorm,
    assaultSmolder,
    assasinsLungeAndNetherstep,
    thunderstorm,
    stanchionSkyPillar,
    razorSwift,
    pridesFall,
    martialArtWillFormHook,
    martialArtOctaSlashBlade,
    heptaDetach,
    mortalDefiance,
    wildWindspout,
    universeSlash,
    theOvercomer,
    soulSlash,
    phoenixBlast,
    meteor,
    mercilessHavoc,
    heartstopperKick,
    earthshaker,
    dreadfulWail,
    dragonlikeMight,
    dragonRoar,
    detonatingRounds,
    cloudWeaver,
    burstArrow,
    auroraBurst,
    armorPierce,
    stormstride,
    soulRelease,
    skyforce,
    repairRoll,
    desperation,

    incineration,
    ember,
    defuseRagingFlame,
    dracoStride,
    defuseFlamingBlade,
    copperWard,
    stormstrideSword,
    skyfire,
    defuseAegisBreak,
    defuseSolidification,
    torrentFlowThunderWielding,
    defuseSoulsnatch,
    thunderpull,
    thunderCounter,
    springsCall,
    velocityUntoldThunderWielding,
    iceBreak,
    subZeroSeal,
    thunderproof,
    backfire,
    thunderSword,
    thunderMastery,
    verticalBlinkStrikeThunderWielding,
    assasinsLungeIceWielding,
    quickAttack,
    crescentSlamThunderWielding,
    successiveIceBlast,
    depthsBlast,
    yushanShadows,
    frozenBlast,
    tundraMight,
    defuseThaw,
    arcaneThunder,
    flamebreath,
    cinderfrost
  ];

  const thumbnail = (souljade: SoulJade) =>
    `/avatars/souljades/${souljade.rarity}/${
      souljade.consumable
        ? 'Consumable/'
        : souljade.upgradable
          ? 'Upgradable/'
          : ''}${
      (souljade.rarity === SoulJadeRarity.Epic || souljade.rarity === SoulJadeRarity.Legendary) && souljade.type === SoulJadeType.Health && souljade.upgradable !== true
        ? `Health/${souljade.category}`
        : (souljade.rarity === SoulJadeRarity.Common || souljade.rarity === SoulJadeRarity.Rare) && souljade.type !== SoulJadeType.Attack
          ? 'Stat'
          : souljade.upgradable === true
            ? souljade.category
            : souljade.type
    }.webp`;

  return {
    all,

    health1,
    attack1,
    damageReduction1,
    health2,
    attack2,
    damageReduction2,
    scattershot,
    sap,
    overlord,
    martialArtTaiChiFan,
    alchemy,
    venomTipAndBarbedBolts,
    twinshotAndBounceShell,
    switchDazzle,
    slowshotAndSunwingShot,
    ruptureGaleOrbAndBurn,
    quickChargeAndThundercall,
    fireArrowsAndTargetLock,
    vajrasGrip,
    starfall,
    explosiveArmor,
    windyTrinity,
    staminaStrike,
    rampage,
    martialArtShaolinStaff,
    martialArtHexaHarmonySpear,
    juggernaut,
    jabbing,
    cyanFang,
    cavalryBloom,
    blisteringEdge,
    benthicDDescent,
    aerialRend,
    tuNa,
    groupHeal,
    focusSlide,
    advancedHeal,
    warriorPaceAndInfernalSlash,
    velocityUntoldAndTrigger,
    soulshatterAndNetherstep,
    soothinBoon,
    softStepAndGeckoFoot,
    rippleStepAnddPhantomStep,
    poisonSplash,
    eruditionAndSpearStorm,
    assaultSmolder,
    assasinsLungeAndNetherstep,
    thunderstorm,
    stanchionSkyPillar,
    razorSwift,
    pridesFall,
    martialArtWillFormHook,
    martialArtOctaSlashBlade,
    heptaDetach,
    mortalDefiance,
    wildWindspout,
    universeSlash,
    theOvercomer,
    soulSlash,
    phoenixBlast,
    meteor,
    mercilessHavoc,
    heartstopperKick,
    earthshaker,
    dreadfulWail,
    dragonlikeMight,
    dragonRoar,
    detonatingRounds,
    cloudWeaver,
    burstArrow,
    auroraBurst,
    armorPierce,
    stormstride,
    soulRelease,
    skyforce,
    repairRoll,
    desperation,

    incineration,
    ember,
    defuseRagingFlame,
    dracoStride,
    defuseFlamingBlade,
    copperWard,
    stormstrideSword,
    skyfire,
    defuseAegisBreak,
    defuseSolidification,
    torrentFlowThunderWielding,
    defuseSoulsnatch,
    thunderpull,
    thunderCounter,
    springsCall,
    velocityUntoldThunderWielding,
    iceBreak,
    subZeroSeal,
    thunderproof,
    backfire,
    thunderSword,
    thunderMastery,
    verticalBlinkStrikeThunderWielding,
    assasinsLungeIceWielding,
    quickAttack,
    crescentSlamThunderWielding,
    successiveIceBlast,
    depthsBlast,
    yushanShadows,
    frozenBlast,
    tundraMight,
    defuseThaw,
    arcaneThunder,
    flamebreath,
    cinderfrost,


    thumbnail
  };

}
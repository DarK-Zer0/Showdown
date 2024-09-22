import type { SoulJade } from '~/@types';
import { SoulJadeCategory, SoulJadeRarity, SoulJadeType, WieldingType } from '~/@types/index.d';

// noinspection JSUnusedGlobalSymbols
export default function () {

  const weapons = useWeapons();

  /* Regular Soul Jades */

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

  /* Defuse Soul Jades */

  const defuseCounterattack: SoulJade = {
    name: 'Defuse (Counterattack)',
    description: 'Melee attacks and triggering Defuse can fill the Defuse slot. When it is filled, a Defuse (Counterattack) will consume all Defuse slots, unleashing a Counterstrike Combo that deals 60% increased damage',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Defuse,
    baseStat: 6
  };

  const defuseSoulsnatch: SoulJade = {
    name: 'Defuse · Soul-snatch',
    description: 'Restore 400 Health when Defuse is triggered',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Defuse,
    baseStat: 6
  };

  const defuseIceFlow: SoulJade = {
    name: 'Defuse · Ice Flow',
    description: 'Melee attacks and triggering Defuse can fill the Defuse slot. WHen it is filled, a Defuse will consume all Defuse slots and unleash an ice strike',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Defuse,
    baseStat: 6
  };

  const defuseRagingFlame: SoulJade = {
    name: 'Defuse · Raging Flame',
    description: 'Melee attacks and triggering Defuse can fill the Defuse slot. When it is filled, a Defuse will consume all Defuse slots and unleash a fiery strike',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Defuse,
    baseStat: 6
  };

  const defuseSolidification: SoulJade = {
    name: 'Defuse · Solidification',
    description: 'Upon triggering Defuse, Attack increases by 20% and the Elemental Damage dealt by your hits increases by 40% for 15 sec',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Defuse,
    baseStat: 6
  };

  const defuseFlamingBlade = {
    name: 'Defuse · Flaming Blade',
    description: 'Triggering of Defuse empowers your next melee weapon attack to burn the enemies hit',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Defuse,
    baseStat: 6
  };

  const defuseAegisBreak: SoulJade = {
    name: 'Defuse · Aegis-break',
    description: 'Counterstrike reduces weapon durability but deals more damage to enemies\' Astral Aegis; Weapon durability will be repaired when Defuse is triggered, and Attack will be increased by 25% within 10 sec',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Defuse,
    baseStat: 6
  };

  const defuseThaw: SoulJade = {
    name: 'Defuse · Thaw',
    description: 'A successful Defuse will greatly reduce your Frostbite',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Defuse,
    baseStat: 6
  };

  const defuseConcentrate: SoulJade = {
    name: 'Defuse (Concentrate)',
    description: 'Defuse (Counterattack) is easier to trigger',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Defuse,
    baseStat: 6
  };

  /* Attack */

  const renewedVigor: SoulJade = {
    name: 'Renewed Vigor',
    description: 'When getting the Recovery effect, Attack +20% for 4 sec',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialMovement,
    baseStat: 12
  };

  const desperationShield: SoulJade = {
    name: 'Desperation Shield',
    description: 'Deal 10% more damage when Armor is above 50%',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 12
  };

  const condensedQi: SoulJade = {
    name: 'Condensed Qi',
    description: 'After charging the 1st stage, the next melee attack damage is increased by 18%',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const backfire: SoulJade = {
    name: 'Backfire',
    description: 'Attack +20%, but suffer a nonlethal backfire damage when dealing damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const quickAttack: SoulJade = {
    name: 'Quick Attack',
    description: 'Attack +15%. You\'ll lose this effect for 5 sec after launching a Charged Attack',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const soulDrawing: SoulJade = {
    name: 'Soul-drawing',
    description: 'Restore 12% Health when dealing damage. If your Health is above 45%, you\'ll lose the effect',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const outrage: SoulJade = {
    name: 'Outrage',
    description: 'Damage is increased by 15% when attacking enemies without Astral Aegis',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const enrage: SoulJade = {
    name: 'Enrage',
    description: 'Rage is no longer restored over time, but the speed of Rage accumulation through attacks is increased by 45%',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 4
  };

  const aggressor: SoulJade = {
    name: 'Aggressor',
    description: 'For the next 8 sec after using Weapon Repair Kit, Attack +15%',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const astralBreak: SoulJade = {
    name: 'Astral Break',
    description: 'After charging the 1st stage, your next melee attacks deals 50% extra Astral Aegis damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const shatteredEdge: SoulJade = {
    name: 'Shattered Edge',
    description: 'Gain an 18% Attack boost for 10 sec whenever your weapon\'s durability is consumed',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  /* HydroFlare Attack */

  const dracoStride: SoulJade = {
    name: 'Draco Stride',
    description: '0.5 sec after dodging, summon a mighty wave that leaves all enemies hit Soaked at your previous location. This only takes effect within 15 sec after attacking, or being attacked',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialMovement,
    baseStat: 12
  };

  const skyfire: SoulJade = {
    name: 'Skyfire',
    description: 'When the [Burn] damage dealt on enemies amounts to 5,000% of your Attack, your next strike can generate up to 3 fire pillars, based on the number of enemies nearby. The fewer the fire pillars, the higher the damage inflicted',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const incineration: SoulJade = {
    name: 'Incineration',
    description: 'When triggering [HydroFlare], Attack increases by 25% for 10 sec while also Burning yourself',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const ember: SoulJade = {
    name: 'Ember',
    description: 'After receiving burn damage amounts to 10% of your Max Armor + Max Health, your next attack with a melee weapon will unleash a Blaze Impact upon hitting the target, inflicting massive burn damage on the enemies in front',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.SpecialBuff,
    baseStat: 4
  };

  const cloudscorch: SoulJade = {
    name: 'Cloudscorch',
    description: 'Charged melee strikes set enemies hit aflame',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  /* Thunderbolt Attack */

  const thunderMastery: SoulJade = {
    name: 'Thunder Mastery',
    description: 'Attacks summon a Thunderbolt to strike the enemy after 3 sec, boosting your Attack by 15% for 5 sec upon hitting the target',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const arcaneThunder: SoulJade = {
    name: 'Arcane Thunder',
    description: 'Using skill or ultimate will trigger a Thunderbolt at the closest enemy',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialMovement,
    baseStat: 12
  };

  const thunderSword: SoulJade = {
    name: 'Thunder Sword',
    description: 'Charged melee attacks trigger Thunderbolt when hitting enemies',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const stormstrideSword: SoulJade = {
    name: 'Stormstride Sword',
    description: 'Uncharged melee strikes will trigger Thunderbolt when hitting enemies',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  /* Defense */

  const armoredArtist: SoulJade = {
    name: 'Armored Artist',
    description: 'Every 5 sec, the next melee attack triggers an additional wide-range blast strike, dealing 70% of own max Armor as damage',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const silkwormCocoon: SoulJade = {
    name: 'Silkworm Cocoon',
    description: 'Restore Armor equivalent to 9% of max Armor within 3 sec after being attacked',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const againstTheOdds: SoulJade = {
    name: 'Against the Odds',
    description: 'When affected by [Toxified] or [Burn], gain a 15% damage reduction effect for 15 sec',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const nirvana: SoulJade = {
    name: 'Nirvana',
    description: 'When being inflicted with a burn effect, restore 6% of your Max Health over 3 sec. Excess healing will turn into Armor',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const warrior: SoulJade = {
    name: 'Warrior',
    description: 'For the next 5 sec after taking damage, Melee Resist +20%, Ranged Resist +20%, Attack -10%',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const guardian: SoulJade = {
    name: 'Guardian',
    description: 'Armor +250',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const copperWard: SoulJade = {
    name: 'Copper Ward',
    description: 'Lose Armor, but the maximum Health +60% (Incompatible with Souljade: [Basalt Armor])',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const basaltArmor: SoulJade = {
    name: 'Basalt Armor',
    description: 'Reduce max Health and turn 75% of lost Health into Armor capacity (Incompatible with Souljade: [Copper Ward])',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const divineForm: SoulJade = {
    name: 'Divine Form',
    description: 'Damage Reduction +12% when the Health is full',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const netherstep: SoulJade = {
    name: 'Netherstep',
    description: 'Quick Dash can be performed repeatedly, with an 8.5% reduction of Stamina cost',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  /* Element - Ice-wielding */

  const yushanShadows: SoulJade = {
    name: 'Yushan Shadows',
    description: 'Gain a stack once Frostbite is full, stacking up to 2 times. Using Aegis-break Martial Skill or Defuse (Counterattack) will summon a "Matron of Yushan Shadow" to assist you, consuming a stack. Freezing yourself caused by full Frostbite can be blocked by Defuse',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const successiveIceBlast: SoulJade = {
    name: 'Successive Ice Blast',
    description: 'When triggered by Frostbite damage, the Ice Blast explodes 3 times with damaged decreased by 45%',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const icefall: SoulJade = {
    name: 'Icefall',
    description: 'An icicle dealing Frostbite damage falls at your location each time you dodge, while increasing your own frostbite. The higher the Ice-wielding, the lower the increase in Frostbite',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialMovement,
    baseStat: 12
  };

  const iceArmor: SoulJade = {
    name: 'Ice Armor',
    description: 'Damage Reduction +15% when you have accumulated Frostbite',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const soulShiver: SoulJade = {
    name: 'Soul Shiver',
    description: 'While accumulating Frostbite, restore 2.4% of the damage dealt as Health or Armor within the next 3 sec',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const frozenBlast: SoulJade = {
    name: 'Frozen Blast',
    description: 'Ice Blast\'s damage is increased by 35% and its cooldown is reduced by 33%, but Max Frostbite is reduced by 450',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const depthsBlast: SoulJade = {
    name: 'Depths Blast',
    description: 'Increases Ice Blast DMG by 60%, but triggering Ice Blast will increase your own Frostbite',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const springsCall: SoulJade = {
    name: 'Spring\'s Call',
    description: 'When external effects cause Frostbite to decrease, Attack +55% for 10 sec',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialMovement,
    baseStat: 12
  };

  const iceBlastBackfire: SoulJade = {
    name: 'Ice Blast Backfire',
    description: 'When accumulating Frostbite, release an explosion with Frostbite DMG around yourself. This can only be triggered 5 sec after attacking/being attacked',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const tundraMight: SoulJade = {
    name: 'Tundra Might',
    description: 'Attack is increased by 15% and Frostbite damage is increased by 45% for 5 sec whenever your Frostbite increases',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialMovement,
    baseStat: 12
  };

  const subZeroSeal: SoulJade = {
    name: 'Sub-Zero Seal',
    description: 'While above 50% Health, hit damage increased by 20% but you will accumulate Frostbite over time',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialMovement,
    baseStat: 12
  };

  const cinderfrost: SoulJade = {
    name: 'Cinderfrost',
    description: 'Upon reaching a full Frostbite meter, you no longer get frozen, but your Melee Resist and damage dealt to enemies\' Health are reduced by 10% for 5 sec',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const iceBreak: SoulJade = {
    name: 'Ice Break',
    description: 'A successful Counter will greatly reduce your Frostbite',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const reawakening: SoulJade = {
    name: 'Reawakening',
    description: 'Attack +35% for 8 sec when there\'s no Frostbite accumulated',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Health,
    category: SoulJadeCategory.SpecialMovement,
    baseStat: 12
  };

  /* Ice-wielding Melee */

  const horizontalBlinkStrikeIceWielding: SoulJade = {
    name: 'Horizontal Blink Strike · Ice-wielding',
    description: 'Horizontal Blink Strike deals extra Frostbite damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Ice,
    exclusive: weapons.katana
  };

  const uppercutRushIceWielding: SoulJade = {
    name: 'Uppercut Rush · Ice-wielding',
    description: 'Uppercut Rush deals extra Frostbite damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Ice,
    exclusive: weapons.dagger
  };

  const assassinsLungeIceWielding: SoulJade = {
    name: 'Assassin\'s Lunge · Ice-wielding',
    description: 'Alters Quick Dash horizontal strikes and deal extra Frostbite damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Ice,
    exclusive: weapons.dagger
  };

  const cavalryBloomIceWielding: SoulJade = {
    name: 'Cavalry Bloom · Ice-wielding',
    description: 'Alters Dual Blades\' charged horizontal strikes and deals extra Frostbite damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Ice,
    exclusive: weapons.dualBlades
  };

  const eruditionIceWielding: SoulJade = {
    name: 'Erudition · Ice-wielding',
    description: 'Alters Spear\'s charged vertical strikes and deal extra Frostbite damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Ice,
    exclusive: weapons.spear
  };

  const horizontalEnergyIceWielding: SoulJade = {
    name: 'Horizontal Energy · Ice-wielding',
    description: 'Horizontal Energy deals extra Frostbite damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Ice,
    exclusive: weapons.longsword
  };

  const crescentSlamIceWielding: SoulJade = {
    name: 'Crescent Slam · Ice-wielding',
    description: 'Crescent Slam deals extra Frostbite damage (Incompatible with Souljade: [Crescent Slam · Thunder-wielding])',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Ice,
    exclusive: weapons.spear
  };

  const stormSlashIceWielding: SoulJade = {
    name: 'Storm Slash · Ice-wielding',
    description: 'Storm Slash deals extra Frostbite damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Ice,
    exclusive: weapons.greatsword
  };

  const velocityUntoldIceWielding: SoulJade = {
    name: 'Velocity Untold · Ice-wielding',
    description: 'Alters Nunchucks\' charged horizontal strikes, and deal extra Frostbite damage (Incompatible with Souljade: [Velocity Untold · Thunder-wielding])',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Ice,
    exclusive: weapons.nunchuks
  };

  const waveBreakerIceWielding: SoulJade = {
    name: 'Wave Breaker · Ice-wielding',
    description: 'Wave Breaker deals extra Frostbite damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Ice,
    exclusive: weapons.polesword
  };

  const windyTrinityIceWielding: SoulJade = {
    name: 'Windy Trinity · Ice-wielding',
    description: 'Alters Fan\'s charged horizontal strikes and deal extra Frostbite damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Ice,
    exclusive: weapons.fan
  };

  const jabbingIceWielding: SoulJade = {
    name: 'Jabbing · Ice-wielding',
    description: 'Alters Staff\'s charged horizontal strikes and deal extra Frostbite damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Ice,
    exclusive: weapons.staff
  };

  const aerialRendIceWielding: SoulJade = {
    name: 'Aerial Rend · Ice-wielding',
    description: 'Greatsword\'s charged strikes unleash shockwaves and deal extra Frostbite damage (Incompatible with Souljade: [Rockfall Slash · Thunder-wielding])',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Ice,
    exclusive: weapons.greatsword
  };

  const cyanFangIceWielding: SoulJade = {
    name: 'Cyan Fang · Ice-wielding',
    description: 'Alters the third strike in a melee weapon\'s horizontal combo and grants extra Elemental damage. On strike, restores 10% of damage dealt as Health or Armor (Incompatible with Souljade: [Cyan Fang · Thunder-wielding], [Cyan Fang · Poison-wielding])',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Ice,
    exclusive: weapons.melee
  };

  /* Poison-wielding */

  const cyanFangPoisonWielding: SoulJade = {
    name: 'Cyan Fang · Poison-wielding',
    description: 'Alters the third strike in a melee weapon\'s horizontal combo and grants extra Elemental damage. On strike, restores 10% of damage dealt as Health or Armor (Incompatible with Souljade: [Cyan Fang · Thunder-wielding], [Cyan Fang · Ice-wielding])',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    wieldingType: WieldingType.Poison,
    exclusive: weapons.melee
  };

  /* Thunder-wielding */

  const thunderpull: SoulJade = {
    name: 'Thunderpull',
    description: 'Attack +20%, but dealing damage accumulates your Thundershock',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4
  };

  const thunderCounter: SoulJade = {
    name: 'Thunder Counter',
    description: 'Divine Counter can be Countered',
    rarity: SoulJadeRarity.Legendary,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const thunderheal: SoulJade = {
    name: 'Thunderheal',
    description: 'As your Thundershock accumulates, you restore Health equal to 12% max Health within 3 sec. This effect has a 10-sec cooldown',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  const thunderproof: SoulJade = {
    name: 'Thunderproof',
    description: 'When you have full ThunderShock, you no longer get staggered by Divine Thunder and the maximum ThunderShock you can accumulate is reduced',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.DamageReduction,
    category: SoulJadeCategory.Melee,
    baseStat: 6
  };

  /* Thunder-wielding Melee */

  const abyssalAuraThunderWielding: SoulJade = {
    name: 'Abyssal Aura · Thunder-wielding',
    description: 'Alters Dagger\'s charged vertical strikes and deal extra Thundershock damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.dagger,
    wieldingType: WieldingType.Thunder
  };

  const wildWindspoutThunderWielding: SoulJade = {
    name: 'Wild Windspout · Thunder-wielding',
    description: 'Fan\'s enhanced Charged Vertical Strike deals extra Thundershock damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.fan,
    wieldingType: WieldingType.Thunder
  };

  const torrentFlowThunderWielding: SoulJade = {
    name: 'Torrent Flow · Thunder-wielding',
    description: 'Torrent Flow deals extra Thundershock damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.polesword,
    wieldingType: WieldingType.Thunder
  };

  const verticalBlinkStrikeThunderWielding: SoulJade = {
    name: 'Vertical Blink Strike · Thunder-wielding',
    description: 'Vertical Blink Strike deals extra Thundershock damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.katana,
    wieldingType: WieldingType.Thunder
  };

  const petalFallFurryThunderWielding: SoulJade = {
    name: 'Petal Fall Fury · Thunder-wielding',
    description: 'Petal Fall Flurry deals extra THundershock damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.dualBlades,
    wieldingType: WieldingType.Thunder
  };

  const verticalEnergyThunderWielding: SoulJade = {
    name: 'Vertical Energy · Thunder-wielding',
    description: 'Vertical Energy deals extra Thundershock damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.longsword,
    wieldingType: WieldingType.Thunder
  };

  const rockfallSlashThunderWielding: SoulJade = {
    name: 'Rockfall Slash · Thunder-wielding',
    description: 'Rockfall Slash deals extra Thundershock damage (Incompatible with Souljade: [Aerial Rend · Ice-wielding])',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.greatsword,
    wieldingType: WieldingType.Thunder
  };

  const crescentSlamThunderWielding: SoulJade = {
    name: 'Crescent Slam · Thunder-wielding',
    description: 'Crescent Slam deals extra Thundershock damage (Incompatible with Souljade: [Crescent Slam · Ice-wielding])',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.spear,
    wieldingType: WieldingType.Thunder
  };

  const onslaughtThunderWielding: SoulJade = {
    name: 'Onslaught · Thunder-wielding',
    description: 'Onslaught deals extra Thundershock damage',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.staff,
    wieldingType: WieldingType.Thunder
  };

  const cyanFangThunderWielding: SoulJade = {
    name: 'Cyan Fang · Thunder-wielding',
    description: 'Alters the third strike in a melee weapon\'s horizontal combo and grants extra Elemental damage. On strike, restores 10% of damage dealt as Health or Armor (Incompatible with Souljade: [Cyan Fang · Ice-wielding], [Cyan Fang · Poison-wielding])',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.melee,
    wieldingType: WieldingType.Thunder
  };

  const velocityUntoldThunderWielding: SoulJade = {
    name: 'Velocity Untold · Thunder-wielding',
    description: 'Alters Nunchucks\' charged horizontal strikes, and deal extra Thundershock damage (Incompatible with Souljade: [Velocity Untold · Ice-wielding])',
    rarity: SoulJadeRarity.Epic,
    type: SoulJadeType.Attack,
    category: SoulJadeCategory.Melee,
    baseStat: 4,
    exclusive: weapons.nunchuks,
    wieldingType: WieldingType.Thunder
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
    defuseSoulsnatch,
    thunderpull,
    thunderCounter,
    springsCall,
    iceBreak,
    subZeroSeal,
    thunderproof,
    backfire,
    thunderSword,
    thunderMastery,
    assassinsLungeIceWielding,
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

    defuseCounterattack,
    defuseIceFlow,
    defuseConcentrate,
    renewedVigor,
    desperationShield,
    condensedQi,
    soulDrawing,
    outrage,
    enrage,
    aggressor,
    astralBreak,
    shatteredEdge,
    cloudscorch,

    abyssalAuraThunderWielding,
    wildWindspoutThunderWielding,
    torrentFlowThunderWielding,
    verticalBlinkStrikeThunderWielding,
    petalFallFurryThunderWielding,
    verticalEnergyThunderWielding,
    rockfallSlashThunderWielding,
    onslaughtThunderWielding,
    cyanFangThunderWielding,
    velocityUntoldThunderWielding,
    thunderheal,
    
    cyanFangPoisonWielding,

    cyanFangIceWielding,
    aerialRendIceWielding,
    jabbingIceWielding,
    windyTrinityIceWielding,
    waveBreakerIceWielding,
    velocityUntoldIceWielding,
    stormSlashIceWielding,
    crescentSlamIceWielding,
    horizontalEnergyIceWielding,
    eruditionIceWielding,
    cavalryBloomIceWielding,
    uppercutRushIceWielding,
    horizontalBlinkStrikeIceWielding,

    reawakening,
    iceBlastBackfire,
    soulShiver,
    iceArmor,
    icefall,
    netherstep,
    divineForm,
    basaltArmor,
    guardian,
    warrior,
    nirvana,
    againstTheOdds,
    silkwormCocoon,
    armoredArtist
  ];

  const thumbnail = (jade: SoulJade) =>
    `/avatars/souljades/${jade.rarity}/${
      jade.consumable
        ? 'Consumable/'
        : jade.upgradable
          ? 'Upgradable/'
          : ''}${
      (jade.rarity === SoulJadeRarity.Epic || jade.rarity === SoulJadeRarity.Legendary) && jade.type === SoulJadeType.Health && jade.upgradable !== true
        ? `Health/${jade.category}`
        : (jade.rarity === SoulJadeRarity.Common || jade.rarity === SoulJadeRarity.Rare) && jade.type !== SoulJadeType.Attack
          ? 'Stat'
          : jade.upgradable === true || jade.category === SoulJadeCategory.Defuse
            ? jade.category
            : jade.type
    }.webp`;

  const toUrl = (jade: SoulJade) => jade.name.toLowerCase().replace(/\s|'/g, '-');

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
    defuseSoulsnatch,
    thunderpull,
    thunderCounter,
    springsCall,
    iceBreak,
    subZeroSeal,
    thunderproof,
    backfire,
    thunderSword,
    thunderMastery,
    assassinsLungeIceWielding,
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

    defuseCounterattack,
    defuseIceFlow,
    defuseConcentrate,
    renewedVigor,
    desperationShield,
    condensedQi,
    soulDrawing,
    outrage,
    enrage,
    aggressor,
    astralBreak,
    shatteredEdge,
    cloudscorch,

    abyssalAuraThunderWielding,
    wildWindspoutThunderWielding,
    torrentFlowThunderWielding,
    verticalBlinkStrikeThunderWielding,
    petalFallFurryThunderWielding,
    verticalEnergyThunderWielding,
    rockfallSlashThunderWielding,
    onslaughtThunderWielding,
    cyanFangThunderWielding,
    velocityUntoldThunderWielding,
    thunderheal,

    cyanFangPoisonWielding,

    cyanFangIceWielding,
    aerialRendIceWielding,
    jabbingIceWielding,
    windyTrinityIceWielding,
    waveBreakerIceWielding,
    velocityUntoldIceWielding,
    stormSlashIceWielding,
    crescentSlamIceWielding,
    horizontalEnergyIceWielding,
    eruditionIceWielding,
    cavalryBloomIceWielding,
    uppercutRushIceWielding,
    horizontalBlinkStrikeIceWielding,

    reawakening,
    iceBlastBackfire,
    soulShiver,
    iceArmor,
    icefall,
    netherstep,
    divineForm,
    basaltArmor,
    guardian,
    warrior,
    nirvana,
    againstTheOdds,
    silkwormCocoon,
    armoredArtist,

    thumbnail,
    toUrl
  };

}
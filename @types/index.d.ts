import type { IconValue } from '~/iconsets';

export interface Hero {
  name: string;
  description: string;
  melee: MeleeWeapon;
  ranged: RangedWeapon;
}

export interface Weapon {
  name: string;
}

export interface RangedWeapon extends Weapon {
  ranged: true;
}

export interface MeleeWeapon extends Weapon {
  melee: true
}

export interface HeavyMeleeWeapon extends MeleeWeapon {
  heavy: true
}

export enum SoulJadeRarity {
  Common =  'Common',
  Rare = 'Rare',
  Epic = 'Epic',
  Legendary = 'Legendary'
}

export enum SoulJadeType {
  Attack = 'Attack',
  Health = 'Health',
  DamageReduction = 'Damage Reduction'
}

export enum SoulJadeCategory {
  Melee = 'Melee',
  Ranged = 'Ranged',
  SpecialBuff = 'Special Buff',
  SpecialMovement = 'Special Movement',
  Stat = 'Stat',
  Defuse = 'Defuse'
}

export enum WieldingType {
  Ice = 'Ice-wielding',
  Thunder = 'Thunder-wielding',
  Poison = 'Poison-wielding'
}

export interface SoulJade {
  name: string;
  description: string;
  rarity: SoulJadeRarity;
  type: SoulJadeType;
  category: SoulJadeCategory;
  consumable?: boolean;
  upgradable?: boolean;
  baseStat: number;
  exclusive?: Hero | Weapon | Weapon[];
  // SoulJade-specific wield type
  wieldingType?: WieldingType;
}

export interface SoulJadeSetup {
  name: string;
  jades: SoulJade[];
  wieldingType: WieldingType;
  potential: PotentialPlan | PotentialPath;
  heroes: Hero[];
  attributes: string[];
  strengths: string[];
  weaknesses: string[];
  category: SoulJadeSetupCategory;
  difficulty: number;
}

export interface SoulJadeSetupCategory {
  name: string;
  icon: IconValue;
}

export interface PotentialPath {
  name: string;
  icon: IconValue;
  description: string;
  heroes: Hero[];
}

export interface PotentialPlan {
  name: string;
  path: PotentialPath;
  description: string;
  heroes: Hero[];
}

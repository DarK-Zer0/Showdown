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
  ranged: true
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
  Stat = 'Stat'
}

export enum WieldingType {
  Ice = 'Ice Wielding',
  Thunder = 'Thunder Wielding',
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
  wieldingType?: WieldingType;
}

export interface SoulJadeSetup {
  name: string;
  jades: SoulJade[6];
  wieldingType: WieldingType;
  heroes: Hero[];
  attributes: string[];
  strengths: string[];
  weaknesses: string[];
  category: SoulJadeSetupCategory;
}

export interface SoulJadeSetupCategory {
  name: string;
  icon: IconValue;
}

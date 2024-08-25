export interface Hero {
  name: string;
  description: string;
}

export interface Weapon {
  name: string;
  type: 'ranged' | 'melee';
}

export interface RangedWeapon extends Weapon{
  type: 'ranged';
}

export interface MeleeWeapon extends Weapon{
  type: 'melee';
}


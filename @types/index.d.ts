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

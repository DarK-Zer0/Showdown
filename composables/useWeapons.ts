enum WeaponType {
  Melee, Ranged
}

enum WeaponCategory {
  SingleEdged, HeavySword, LongHandle, ShortHandle, DualWield, Nunchunks
}

export interface Weapon {
  name: string;
  type: WeaponType;
  category: WeaponCategory | null;
}

// noinspection JSUnusedGlobalSymbols
export default function () {

  const longsword: Weapon = {
    name: 'Longsword', type: WeaponType.Melee, category: null
  };

  const katana: Weapon = {
    name: 'Katana', type: WeaponType.Melee, category: WeaponCategory.SingleEdged
  };

  const hengSword: Weapon = {
    name: 'Heng Sword', type: WeaponType.Melee, category: WeaponCategory.SingleEdged
  };

  const greatsword: Weapon = {
    name: 'Greatsword', type: WeaponType.Melee, category: WeaponCategory.HeavySword
  };

  const polesword: Weapon = {
    name: 'Polesword', type: WeaponType.Melee, category: WeaponCategory.HeavySword
  };

  const spear: Weapon = {
    name: 'Spear', type: WeaponType.Melee, category: WeaponCategory.LongHandle
  };

  const staff: Weapon = {
    name: 'Staff', type: WeaponType.Melee, category: WeaponCategory.LongHandle
  };

  const dagger: Weapon = {
    name: 'Dagger', type: WeaponType.Melee, category: WeaponCategory.ShortHandle
  };

  const fan: Weapon = {
    name: 'Fan', type: WeaponType.Melee, category: WeaponCategory.ShortHandle
  };

  const dualBlades: Weapon = {
    name: 'Dual Blades', type: WeaponType.Melee, category: WeaponCategory.DualWield
  };

  const dualHalberds: Weapon = {
    name: 'Dual Halberds', type: WeaponType.Melee, category: WeaponCategory.DualWield
  };

  const nunchunks: Weapon = {
    name: 'Nunchunks', type: WeaponType.Melee, category: WeaponCategory.Nunchunks
  };

  const repeatingCrossbow: Weapon = {
    name: 'Repeating Crossbow', type: WeaponType.Ranged, category: null
  };

  const musket: Weapon = {
    name: 'Musket', type: WeaponType.Ranged, category: null
  };

  const cannon: Weapon = {
    name: 'Cannon', type: WeaponType.Ranged, category: null
  };

  const pistol: Weapon = {
    name: 'Pistol', type: WeaponType.Ranged, category: null
  };

  const bow: Weapon = {
    name: 'Bow', type: WeaponType.Ranged, category: null
  };

  const swarm: Weapon = {
    name: 'Swarm', type: WeaponType.Ranged, category: null
  };

  const melee: Weapon[] = [
    longsword, katana, hengSword, greatsword, polesword, spear, staff, dagger, fan, dualBlades, dualHalberds, nunchunks
  ];

  const ranged: Weapon[] = [
    repeatingCrossbow, musket, cannon, pistol, bow, swarm
  ];

  const weapons: Weapon[] = [
    ...melee,
    ...ranged
  ];

  return ({
    longsword, katana, hengSword, greatsword, polesword, spear, staff, dagger, fan, dualBlades, dualHalberds, nunchunks,
    repeatingCrossbow, musket, cannon, pistol, bow, swarm,
    list: weapons,
    melee,
    ranged
  });
}

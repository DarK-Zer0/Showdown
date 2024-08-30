import type { Weapon, MeleeWeapon, RangedWeapon, HeavyMeleeWeapon } from '~/@types';

// noinspection JSUnusedGlobalSymbols
export default function () {

  const longsword: MeleeWeapon = {
    name: 'Longsword',
    melee: true
  };

  const polesword: HeavyMeleeWeapon = {
    name: 'Polesword',
    melee: true,
    heavy: true
  };

  const greatsword: HeavyMeleeWeapon = {
    name: 'Greatsword',
    melee: true,
    heavy: true
  };

  const katana: MeleeWeapon = {
    name: 'Katana',
    melee: true
  };

  const hengsword: MeleeWeapon = {
    name: 'Hengsword',
    melee: true
  };

  const dagger: MeleeWeapon = {
    name: 'Dagger',
    melee: true
  };

  const fan: MeleeWeapon = {
    name: 'Fan',
    melee: true
  };

  const spear: MeleeWeapon = {
    name: 'Spear',
    melee: true
  };

  const staff: MeleeWeapon = {
    name: 'Staff',
    melee: true
  };

  const nunchuks: MeleeWeapon = {
    name: 'Nunchuks',
    melee: true
  };

  const dualBlades: MeleeWeapon = {
    name: 'Dual Blades',
    melee: true
  };

  const dualHalberds: MeleeWeapon = {
    name: 'Dual Halberds',
    melee: true
  };

  const fistblades: MeleeWeapon = {
    name: 'Fistblades',
    melee: true
  };

  const swarm: RangedWeapon = {
    name: 'Swarm',
    ranged: true
  };

  const pistol: RangedWeapon = {
    name: 'Pistol',
    ranged: true
  };

  const flamebringer: RangedWeapon = {
    name: 'Flamebringer',
    ranged: true
  };

  const musket: RangedWeapon = {
    name: 'Musket',
    ranged: true
  };

  const repeatingCrossbow: RangedWeapon = {
    name: 'Repeating Crossbow',
    ranged: true
  };

  const cannon: RangedWeapon = {
    name: 'Cannon',
    ranged: true
  };

  const bow: RangedWeapon = {
    name: 'Bow',
    ranged: true
  };

  const bloodripper: RangedWeapon = {
    name: 'Bloodripper',
    ranged: true
  };

  const melee: MeleeWeapon[] = [
    longsword,
    polesword,
    greatsword,
    katana,
    hengsword,
    dagger,
    fan,
    spear,
    staff,
    nunchuks,
    dualBlades,
    dualHalberds,
    fistblades
  ];

  const ranged: RangedWeapon[] = [
    swarm,
    pistol,
    flamebringer,
    musket,
    repeatingCrossbow,
    cannon,
    bow,
    bloodripper
  ];

  const all: Weapon[] = [
    ...melee,
    ...ranged
  ];

  const toUrl = (weapon: Weapon): string => weapon.name.toLowerCase().replace(/\s|'/g, '-');

  return {
    all,

    melee,
    ranged,

    longsword,
    polesword,
    greatsword,
    katana,
    hengsword,
    dagger,
    fan,
    spear,
    staff,
    nunchuks,
    dualBlades,
    dualHalberds,
    fistblades,

    swarm,
    pistol,
    flamebringer,
    musket,
    repeatingCrossbow,
    cannon,
    bow,
    bloodripper,

    toUrl
  };

}

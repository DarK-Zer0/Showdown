import type { Weapon } from './useWeapons';

// noinspection JSUnusedGlobalSymbols
export default function () {

  interface Hero {
    name: string;
    difficulty: number;
    description: string;
    weapons: Weapon[];
  }

  const weapons = useWeapons();

  const viperNing: Hero = {
    name: 'Viper Ning',
    difficulty: 1.5,
    description: 'With her long-range attacks and Aegis-shattering skills, this hero can dish out consistent damage to her enemies. Her ultimate skill unleashes a devastating blast that drains the Aegis of multiple foes and restores her own health. She is a balanced hero who can survive and thrive in any combat situation.',
    weapons: [weapons.longsword, weapons.pistol]
  };

  const feriaShen: Hero = {
    name: 'Feria Shen',
    difficulty: 2,
    description: 'This hero has one of the safest kits while also being able to deal massive Aegis damage. Her Ultimate ability gives her a rapid firing mech that allows her to deal with pesky Green Ghosts and Lightning Towers with ease. It also comes with a cannon mode that hits for a small AoE and can apply a buff to her teammates damage in a radius around her for a short period.',
    weapons: [weapons.nunchunks, weapons.musket]
  };

  const tianhai: Hero = {
    name: 'Tianhai',
    difficulty: 2.5,
    description: 'This hero is a skilled duelist who can parry attacks with ease with his ability and also grant himself damage reduction. He can use his ultimate skill to aggro a boss for his teammates to focus purely on dealing damage. Furthermore, his ultimate restores his Health fully when activated.',
    weapons: [weapons.staff, weapons.swarm]
  };

  const telmuch: Hero = {
    name: 'Telmuch',
    difficulty: 4,
    description: 'This hero is a formidable fighter who can strike hard with his great sword. His ability can be used to dodge attacks, deal decent Aegis damage over time or to immobilize enemies without Aegis temporarily. His ultimate skill makes his team immune to debuffs and creates a barrier that blocks ranged attacks and slows down enemies who approach him.',
    weapons: [weapons.greatsword, weapons.bow]
  };

  const tarkaJi: Hero = {
    name: 'Tarka Ji',
    difficulty: 3,
    description: 'This hero is a fiery fighter who can incinerate large groups of enemies with his cannon and bosses with his fireballs. He can use his fireball ability to make his targets more vulnerable to attacks for a short time. His ultimate skill boosts his damage by 10% and lets him unleash unlimited fireballs until his Rage is depleted.',
    weapons: [weapons.dualBlades, weapons.cannon]
  };

  const kurumi: Hero = {
    name: 'Kurumi',
    difficulty: 1,
    description: 'A core hero for pretty much any team especially in more difficult content. She can safely revive her teammates from a distance, is the only hero who can heal someone other than themselves, and give some great defense and attack buffs alongside it. Her Ultimate can also be influenced by Temulch, Tarka & Valda Cui for varying effects.',
    weapons: [weapons.katana, weapons.repeatingCrossbow]
  };

  const valdaCui: Hero = {
    name: 'Valda Cui',
    difficulty: 3.5,
    description: 'A single-target focused hero that has the ability to soak her enemies, reducing their damage dealt by 10% and an Ultimate that grants a separate health bar that allows her to CC enemies around her or deals consistent damage to a boss in safety. When with a Tarka, her Soaked debuff counteracts Tarka\'s Vulnerable debuff but deals the burn damage instantly instead of overtime.',
    weapons: [weapons.spear, weapons.musket]
  };

  const yueshan: Hero = {
    name: 'Yueshan',
    difficulty: 2.5,
    description: 'This hero is a powerful and agile fighter who can charge up his attacks while moving around the battlefield. He can use his ability to greatly weaken his enemies\' attack power for 10 seconds and his ultimate skill to withstand a lot of damage while dealing area-of-effect damage. Like Tianhai, he can also heal himself by entering his ultimate skill mode.',
    weapons: [weapons.polesword, weapons.cannon]
  };

  const matari: Hero = {
    name: 'Matari',
    difficulty: 5,
    description: 'This hero is a swift fighter who\'s stronger attacks are more focused around her Dagger Dash. She can use her ability, up to two times, to boost her damage by 40% and teleport a short distance away. Her ultimate skill enhances her with life-steal, reduces the cooldown of her ability and alters her ability into an attack, allowing her to deal massive damage and heal herself quickly.',
    weapons: [weapons.dagger, weapons.pistol]
  };

  const wuchen: Hero = {
    name: 'Wuchen',
    difficulty: 1.5,
    description: 'A great zoner who can deal decent damage from a distance. Features one of the fastest Defuses as of yet and can repair his teammates armor using his ability. His ability also doubles as a projectile shield, to prevent any pesky snipes. However, his ultimate is fully offensive, able to even stagger bosses at the end of one of his spells.',
    weapons: [weapons.fan, weapons.swarm]
  };

  const heroes: Hero[] = [
    viperNing, feriaShen, tianhai, telmuch, tarkaJi, kurumi, valdaCui, yueshan, matari, wuchen
  ];

  return ({
    list: heroes,
    viperNing, feriaShen, tianhai, telmuch, tarkaJi, kurumi, valdaCui, yueshan, matari, wuchen
  });
}

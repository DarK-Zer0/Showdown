import type { Hero } from '~/@types';

// noinspection JSUnusedGlobalSymbols
export default function () {

  const weapons = useWeapons();

  const viperNing: Hero = {
    name: 'Viper Ning',
    description: 'With her long-range attacks and Aegis-shattering skills, this hero can dish out consistent damage to her enemies. Her ultimate skill unleashes a devastating blast that drains the Aegis of multiple foes and restores her own health. She is a balanced hero who can survive and thrive in any combat situation',
    melee: weapons.longsword,
    ranged: weapons.pistol
  };

  const telmuch: Hero = {
    name: 'Telmuch',
    description: 'This hero is a formidable fighter who can strike hard with his great sword. His ability can be used to dodge attacks, deal decent Aegis damage over time or to immobilize enemies without Aegis temporarily. His ultimate skill makes his team immune to debuffs and creates a barrier that blocks ranged attacks and slows down enemies who approach him',
    melee: weapons.greatsword,
    ranged: weapons.bow
  };

  const matari: Hero = {
    name: 'Matari',
    description: 'This hero is a swift fighter who\'s stronger attacks are more focused around her Dagger Dash. She can use her ability, up to two times, to boost her damage by 40% and teleport a short distance away. Her ultimate skill enhances her with life-steal, reduces the cooldown of her ability and alters her ability into an attack, allowing her to deal massive damage and heal herself quickly',
    melee: weapons.dagger,
    ranged: weapons.pistol
  };

  const tarkaJi: Hero = {
    name: 'Tarka Ji',
    description: 'This hero is a fiery fighter who can incinerate large groups of enemies with his cannon and bosses with his fireballs. He can use his fireball ability to make his targets more vulnerable to attacks for a short time. His ultimate skill boosts his damage by 10% and lets him unleash unlimited fireballs until his Rage is depleted',
    melee: weapons.dualBlades,
    ranged: weapons.cannon
  };

  const kurumi: Hero = {
    name: 'Kurumi',
    description: 'A core hero for pretty much any team especially in more difficult content. She can safely revive her teammates from a distance, is the only hero who can heal someone other than themselves, and give some great defense and attack buffs alongside it. Her Ultimate can also be influenced by Temulch, Tarka & Valda Cui for varying effects',
    melee: weapons.katana,
    ranged: weapons.repeatingCrossbow
  };

  const tianhai: Hero = {
    name: 'Tianhai',
    description: 'This hero is a skilled duelist who can parry attacks with ease with his ability and also grant himself damage reduction. He can use his ultimate skill to aggro a boss for his teammates to focus purely on dealing damage. Furthermore, his ultimate restores his Health fully when activated',
    melee: weapons.staff,
    ranged: weapons.swarm
  };

  const valdaCui: Hero = {
    name: 'Valda Cui',
    description: 'A single-target focused hero that has the ability to soak her enemies, reducing their damage dealt by 10% and an Ultimate that grants a separate health bar that allows her to CC enemies around her or deals consistent damage to a boss in safety. When with a Tarka, her Soaked debuff counteracts Tarka\'s Vulnerable debuff but deals the burn damage instantly instead of overtime',
    melee: weapons.spear,
    ranged: weapons.musket
  };

  const yueshan: Hero = {
    name: 'Yueshan',
    description: 'This hero is a powerful and agile fighter who can charge up his attacks while moving around the battlefield. He can use his ability to greatly weaken his enemies\' attack power for 10 seconds and his ultimate skill to withstand a lot of damage while dealing area-of-effect damage. Like Tianhai, he can also heal himself by entering his ultimate skill mode',
    melee: weapons.polesword,
    ranged: weapons.cannon
  };

  const wuchen: Hero = {
    name: 'Wuchen',
    description: 'A great zoner who can deal decent damage from a distance. Features one of the fastest Defuses as of yet and can repair his teammates armor using his ability. His ability also doubles as a projectile shield, to prevent any pesky snipes. However, his ultimate is fully offensive, able to even stagger bosses at the end of one of his spells',
    melee: weapons.fan,
    ranged: weapons.swarm
  };

  const feriaShen: Hero = {
    name: 'Feria Shen',
    description: 'This hero has one of the safest kits while also being able to deal massive Aegis damage. Her Ultimate ability gives her a rapid firing mech that allows her to deal with pesky Green Ghosts and Lightning Towers with ease. It also comes with a cannon mode that hits for a small AoE and can apply a buff to her teammates damage in a radius around her for a short period',
    melee: weapons.nunchuks,
    ranged: weapons.musket
  };

  const yotoHime: Hero = {
    name: 'Yoto Hime',
    description: 'Featuring the slow but powerful Greatsword, Yoto Hime brings a great source of damage for the team. Her kit offers lots of flexibility between self-sustain and damage output, allowing her to be very aggressive or very defensive if need be. Her ability has two parts: the first part deals more Aegis Damage, and the second part deals more Health Damage. Her Ultimate also has two parts, with the entire ability restoring Health when she hits enemies.',
    melee: weapons.greatsword,
    ranged: weapons.repeatingCrossbow
  };

  const all: Hero[] = [
    viperNing,
    telmuch,
    matari,
    tarkaJi,
    kurumi,
    tianhai,
    valdaCui,
    yueshan,
    wuchen,
    feriaShen,
    yotoHime
  ];

  const toUrl = (hero: Hero) =>
    hero.name.toLowerCase().replace(/\s|'/g, '-');

  return {
    all,
    viperNing,
    telmuch,
    matari,
    tarkaJi,
    kurumi,
    tianhai,
    valdaCui,
    yueshan,
    wuchen,
    feriaShen,
    yotoHime,

    toUrl
  };
}

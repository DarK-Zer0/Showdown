// noinspection JSUnusedGlobalSymbols
export default function () {

  type Category = 'stronghold' | 'wave' | 'boss' | 'enigma' | 'abyss';

  interface CategoryDetails {
    title: string;
    objective: string;
    description: string;
  }

  interface MissionDetails {
    name: string;
    category: CategoryDetails;
    chapter?: number;
    map: string;
  }

  const maps = {
    abyss: 'Yama\'s Abyss',
    holoroth: 'Holoroth',
    morusIsle: 'The Morus Isle'
  };

  const categories: { [category in Category]: CategoryDetails } = {
    stronghold: {
      title: 'Stronghold Assault',
      objective: 'Kill Stronghold\'s chest guards and the final boss',
      description: 'Serve as great Sense level boosters because they\'re generally a much lower difficulty, don\'t require you to kill everything, and are guaranteed to drop 6 or more souljades'
    },
    wave: {
      title: 'Wave Defense',
      objective: 'Kill all mobs and boss(es)',
      description: 'Generally the longest mission of each chapter, but have more sought-after drops in their loot pool. Heavier focuses on teamwork and a smaller pool of guaranteed Souljades, however, due to the number of enemies, can have the largest amount of drops'
    },
    boss: {
      title: 'Boss Fight',
      objective: 'Defeat the boss',
      description: 'Can be the longest or shortest mission depending on how strong your team composition is. Usually, contains the most sought-after Souljades, but has a lower drop rate due tot he small number of sources and a limited amount of Omens. Consumables are the most limited here, so effective use of heals is warranted'
    },
    enigma: {
      title: 'Enigma Domain',
      objective: 'Reach Enhance Level 8 or 9 and defeat all bosses',
      description: 'Having a max clear time of ~16 minutes, a pre-established strategy is encouraged, with Archers being ignored and Hammer Ents & Warlocks being prioritized'
    },
    abyss: {
      title: 'Yama\'s Abyss',
      objective: 'Clear all 15 rooms (24 rooms in Void-Space)',
      /* TODO: Shouldn't it be stage 50 something? */
      description: 'The new longest mission type we have as of now. Gets progressively difficult as you make it down the stages, with only the best of the best being able to achieve the rank of Showdown Paragon and clearing up to stage 48'
    }
  };

  const missions: MissionDetails[] = [
    {
      name: 'Eventide Ember', category: categories.stronghold, chapter: 1, map: maps.morusIsle
    },
    {
      name: 'Dharma-Ending Ruin', category: categories.wave, chapter: 1, map: maps.morusIsle
    },
    {
      name: 'Omnius Descent', category: categories.boss, chapter: 1, map: maps.morusIsle
    },
    {
      name: 'Desert Tribulations', category: categories.stronghold, chapter: 2, map: maps.morusIsle
    },
    {
      name: 'Immovable', category: categories.wave, chapter: 2, map: maps.morusIsle
    },
    {
      name: 'Toppled Mountains', category: categories.boss, chapter: 2, map: maps.morusIsle
    },
    {
      name: 'Chaos of the Immortals', category: categories.stronghold, chapter: 3, map: maps.morusIsle
    },
    {
      name: 'None Shall Pass', category: categories.wave, chapter: 3, map: maps.morusIsle
    },
    {
      name: 'Together We Stand', category: categories.boss, chapter: 3, map: maps.morusIsle
    },
    {
      name: 'Dangers in the Deep', category: categories.stronghold, chapter: 4, map: maps.morusIsle
    },
    {
      name: 'Miasma Swirl', category: categories.wave, chapter: 4, map: maps.morusIsle
    },
    {
      name: 'Chasm Undertow', category: categories.boss, chapter: 4, map: maps.morusIsle
    },
    {
      name: 'Autumn Plains Turmoil', category: categories.boss, chapter: 5, map: maps.morusIsle
    },
    {
      name: 'Enigma Domain', category: categories.enigma, map: maps.morusIsle
    },
    {
      name: 'Gelid Yushan', category: categories.boss, map: maps.holoroth
    },
    {
      name: 'Yama\'s Abyss', category: categories.abyss, map: maps.abyss
    }
  ];

  return ({
    categories, list: missions
  });

}

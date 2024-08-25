import type { Hero } from "~/@types";

// noinspection JSUnusedGlobalSymbols
export default function () {

  const viperNing: Hero = {
    name: 'Viper Ning',
    description: 'With her long-range attacks and Aegis-shattering skills, this hero can dish out consistent damage to her enemies. Her ultimate skill unleashes a devastating blast that drains the Aegis of multiple foes and restores her own health. She is a balanced hero who can survive and thrive in any combat situation.'
  };

  const all: Hero[] = [
    viperNing
  ];

  const toUrl = (hero: Hero) =>
    hero.name.toLowerCase().replace(' ', '-');

  return {
    all,
    viperNing,

    toUrl
  };
}

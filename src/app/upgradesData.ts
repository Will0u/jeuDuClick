import { Upgrades } from "./interfaces/upgrades";

export const UPGRADES : Upgrades[] = 
[
    {
        titre: "dopage",
        desc: "Se doper à la monster pour être plus performant",
        level: 0,
        levelMax: 10,
        prix: 20,
        parSec: 1,
        img: "monster.png",
        ratioPrix: 550 / 100,
        ratioParSec: 100 / 100
    },

    {
        titre: "Développeur",
        desc: "Recruter des développeurs",
        level: 0,
        levelMax: 30,
        prix: 1500,
        parSec: 2,
        img: "nerd.png",
        ratioPrix: 40000 / 100,
        ratioParSec: 175 / 100
    },

    {
        titre: "Ordinateur",
        desc: "Augmenter le niveau des ordinateurs",
        level: 0,
        levelMax: 20,
        prix: 350,
        parSec: 5,
        img: "computer.png",
        ratioPrix: 60000 / 100,
        ratioParSec: 125 / 100
    }

]
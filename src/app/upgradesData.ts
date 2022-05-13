import { Upgrades } from "./interfaces/upgrades";

export const UPGRADES : Upgrades[] = 
[
    {
        titre: "Développeur",
        desc: "Recruter des développeurs",
        level: 0,
        levelMax: 30,
        prix: 20,
        parSec: 2,
        img: "nerd.png",
        ratioPrix: 35000 / 100,
        ratioParSec: 175 / 100
    },

    {
        titre: "Ordinateur",
        desc: "Augmenter le niveau des ordinateurs",
        level: 0,
        levelMax: 20,
        prix: 750,
        parSec: 50,
        img: "computer.png",
        ratioPrix: 60000 / 100,
        ratioParSec: 250 / 100
    }

]
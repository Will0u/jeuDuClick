import { RandomEvents } from "./interfaces/random-events";


export const RANDOMEVENTS : RandomEvents[] = [
    {
        id:0,
        nom: "Ordinateur en panne",
        desc: "Suite à l'installation de divers logiciels douteux, votre ordinateur est tombé en panne.",
        gain: - 1500,
        perteLevel: -1
    },

    {
        id:1,
        nom: "Un vrai pirate",
        desc: "Vous avez réussi à pirater le compte bancaire d'une personne.",
        gain: 700 + Math.floor(Math.random() * 5000)
    },

    {
        id:2,
        nom: "Une gastro un peu trop douloureuse..",
        desc: "Suite à plusieurs Guinguette d'affilé, vous avez choppé une violente diarrhée.",
        gainSec: - 45 / 100
    },

    {
        id:3,
        nom: "Un vrai pirate",
        desc: "Vous avez réussi à pirater le compte bancaire d'une personne.",
        gain: 700 + Math.floor(Math.random() * 5000)
    },

]


/*
    id:number;
    nom:string;
    desc:string;
    img?:string;
    gain?:number;
    gainSec?:number;
    perteLevel?:number;
*/
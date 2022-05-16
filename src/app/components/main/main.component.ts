import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RandomEvents } from 'src/app/interfaces/random-events';
import { Upgrades } from 'src/app/interfaces/upgrades';
import { RANDOMEVENTS } from 'src/app/randomEventsData';
import { UPGRADES } from 'src/app/upgradesData';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  upgradesArray : Upgrades[] = UPGRADES;


  // EVENEMENTS
  randomEventsArray : RandomEvents[] = RANDOMEVENTS ;
  randomEventId !: number;
  eventSelected !: RandomEvents ;
  isEventActive = false;
  cancelGain = 0;
  tmpGain !: number;
  randomEventFunction() : void {
    if (Math.random() < 0.03) {
      this.isEventActive = true ;
      this.randomEventId = Math.floor(Math.random() * this.randomEventsArray.length)
      this.eventSelected = this.randomEventsArray[this.randomEventId]; 

      document.querySelector("html")!.style.backgroundColor = "rgb(0,0,0,0.4)";
      document.querySelector("html")!.style.transition = "background-color 1s";

      this.tmpGain = this.gainPerSec;
      this.gainPerSec = this.cancelGain ;

      if (this.eventSelected.gain) {
        this.money += this.eventSelected.gain ;
      } else if (this.eventSelected.perte) {
        this.money *= this.eventSelected.perte;
      } else if (this.eventSelected.perteLevel) {
        if (this.level != 0) this.level -= this.eventSelected.perteLevel;
      } else if (this.eventSelected.gainSec) {
        this.tmpGain *= this.eventSelected.gainSec;
      }
    
    } else {this.isEventActive = false;}
  }
  closeModal() : void {
    this.isEventActive = false;
    this.gainPerSec = this.tmpGain; 
    document.querySelector("html")!.style.backgroundColor = "unset"; 
  }
  // FIN EVENEMENT ALEATOIRE

  constructor() { }

  ngOnInit(): void {       
    setInterval(() => {
      this.money += this.gainPerSec;
    }, 1000);
  }

  money = 0;
  click = 0;
  perte = 0;
  gainPerSec = 1;
  level = 0;
  
  clickMoney(){
    let audio = new Audio();
    audio.src = "src/assets/sound/hitmarker.mp3";
    audio.load();
    audio.play();
    this.money += this.gainPerSec ;
    this.randomEventFunction();
  }

  receive($event: Array<number>){
    this.perte = $event[0];
    this.money -= this.perte;

    this.gainPerSec += $event[1];
    this.level = $event[2]
    /*
    this.perte = $event
    this.money -= this.perte;
    */
  }

}

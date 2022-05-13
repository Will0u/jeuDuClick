import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Upgrades } from 'src/app/interfaces/upgrades';
import { UPGRADES } from 'src/app/upgradesData';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  upgradesArray : Upgrades[] = UPGRADES;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.money += this.gainPerSec;
    }, 1000)
  }

  money = 0;
  click = 0;
  perte = 0;
  gainPerSec = 1;
  
  clickMoney(){
    let audio = new Audio();
    audio.src = "src/assets/sound/hitmarker.wav";
    audio.load();
    audio.play();
    this.money += this.gainPerSec ;
  }

  receive($event: Array<number>){
    this.perte = $event[0];
    this.money -= this.perte;

    this.gainPerSec += $event[1];
    /*
    this.perte = $event
    this.money -= this.perte;
    */
  }
  
}

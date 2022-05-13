import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Upgrades } from 'src/app/interfaces/upgrades';
import { UPGRADES } from 'src/app/upgradesData';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {

  @Input() userMoney = 0;
  @Input() upgrades !: Upgrades;
  

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  
  @Output() cost : EventEmitter<Array<number>> = new EventEmitter<Array<number>>() ;
  buy() : void {
   if (this.userMoney < this.upgrades.prix){
     this.toastr.error("Pas assez d'argent ! Vieux pauvre !","Erreur",{
       timeOut: 2000,
     })
   } else if (this.userMoney >= this.upgrades.prix){
    this.toastr.info(`${this.upgrades.titre} augmenté au niveau ${this.upgrades.level+1} !` , "", {
      timeOut: 2000
    })
    this.cost.emit( [this.upgrades.prix,this.upgrades.parSec] );

    this.userMoney -= this.upgrades.prix;

    this.upgrades.prix += this.upgrades.ratioPrix;
    this.upgrades.level += 1;
    this.upgrades.parSec += this.upgrades.ratioParSec;
   }
  }

}

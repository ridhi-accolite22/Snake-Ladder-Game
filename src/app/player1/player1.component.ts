import { Component } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component {
  constructor(private playerService: PlayerService) { }


  public diceValue1: number = 0;
  public diceValue2: number = 0;
  public disable1 : boolean=false;
  public disable2 : boolean=false;
  public pos1 :  number=0;
  public pos2 :  number=0;

 


  rollDice1() {
    this.diceValue1 = this.playerService.rollDice();
    this.disable1=true;
    this.disable2=false;
    this.pos1+=this.diceValue1;
    console.log(this.pos1);
    this.pos1 = this.playerService.checkPos(this.pos1);
    console.log( "Updated Position is" + this.pos1);
  }

  rollDice2() {
    this.diceValue2 = this.playerService.rollDice();
    this.disable2=true;
    this.disable1=false;
    this.pos2+=this.diceValue2;
    console.log(this.pos2);
    this.pos2 = this.playerService.checkPos(this.pos2);

    console.log( "Updated Position is" + this.pos2);

  }



}




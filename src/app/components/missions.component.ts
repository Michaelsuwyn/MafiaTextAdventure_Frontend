import { Component } from '@angular/core';
import axios from 'axios';



@Component({
    selector: 'missions-component',
    templateUrl: '../views/missions.component.html'
})
export class MissionsComponent{
 
missions;
currentMissionForModal;
chanceNumber;

player = {
  name: "MafiaKing",
  money: 10000,
  power: 3
}
constructor(){

}

getMissions(){
  const url = 'http://localhost:49945/api/missions';
  fetch(url)
  .then((resp) => resp.json())
  .then((resp) => 
this.missions = resp)
}

setModal(id: Number){
  const url = 'http://localhost:49945/api/missions/' + id;
  fetch(url)
  .then((resp) => resp.json())
  .then((resp) => 
this.currentMissionForModal = resp)

}

determineOutcome(chanceNum, difficultNum, moneyChangeNum, powerChangeNum){
  if(chanceNum < difficultNum){
    this.player.money = this.player.money - moneyChangeNum;
    this.player.power = this.player.power - powerChangeNum;
  }
  else {
    this.player.money = this.player.money + moneyChangeNum;
    this.player.power = this.player.power + powerChangeNum;
  }
}

setChanceNumber(){
  if(this.player.money < 0 || this.player.power < 0){
    alert("Your Mafia has been extinct");
    this.player.name = "MafiaKing";
    this.player.money = 10000;
    this.player.power = 3;
}
  if(this.player.money < 5000 && this.player.power < 2){
    this.chanceNumber = 1;
  }
  else if(this.player.money < 10000 && this.player.power <2){
    this.chanceNumber = 2;
  }
  else if(this.player.money < 20000 && this.player.power <4){
    this.chanceNumber = 3;
  }
  else if(this.player.money < 40000 && this.player.power <5){
    this.chanceNumber = 4;
  }
  else if(this.player.money < 60000 && this.player.power <8){
    this.chanceNumber = 5;
  }
  else if(this.player.money < 90000 && this.player.power <9){
    this.chanceNumber = 6;
  }
  else if(this.player.money < 100000 && this.player.power <10){
    this.chanceNumber = 7;
  }
}

}


  
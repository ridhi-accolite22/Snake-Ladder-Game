import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { Player1Component } from './player1/player1.component';


@Injectable({
  providedIn: 'root'
})
export class PlayerService{

  constructor() { }
  


  board1= [
    {"curr_pos": 1,
      "take_to": 1},
    {
      "curr_pos": 2,
      "take_to": 2
    },
    {
      "curr_pos": 3,
      "take_to": 3
    },
    {
      "curr_pos": 4,
      "take_to": 4
    },
    {
      "curr_pos": 5,
      "take_to": 5
    },
    {
      "curr_pos": 6,
      "take_to": 6
    },
    {
      "curr_pos": 7,
      "take_to": 7
    },
    {
      "curr_pos": 8,
      "take_to": 8
    },
    {
      "curr_pos": 9,
      "take_to": 9
    },
    {
      "curr_pos": 10,
      "take_to": 10
    },
    {"curr_pos": 11,
    "take_to": 11},
  {
    "curr_pos": 12,
    "take_to": 12
  },
  {
    "curr_pos": 13,
    "take_to": 13
  },
  {
    "curr_pos": 14,
    "take_to": 14
  },
  {
    "curr_pos": 15,
    "take_to": 15
  },
  {
    "curr_pos": 16,
    "take_to": 16
  },
  {
    "curr_pos": 17,
    "take_to": 17
  },
  {
    "curr_pos": 18,
    "take_to": 18
  },
  {
    "curr_pos": 19,
    "take_to": 19
  },
  {
    "curr_pos": 20,
    "take_to": 20
  },
  {"curr_pos": 21,
  "take_to": 21},
{
  "curr_pos": 22,
  "take_to": 22
},
{
  "curr_pos": 23,
  "take_to": 23
},
{
  "curr_pos": 24,
  "take_to": 24
},
{
  "curr_pos": 25,
  "take_to": 40
},
{
  "curr_pos": 26,
  "take_to": 6
},
{
  "curr_pos": 27,
  "take_to": 27
},
{
  "curr_pos": 28,
  "take_to": 28
},
{
  "curr_pos": 29,
  "take_to": 29
},
{
  "curr_pos": 30,
  "take_to": 30
},
{"curr_pos": 31,
"take_to": 31},
{
"curr_pos": 32,
"take_to": 32
},
{
"curr_pos": 33,
"take_to": 33
},
{
"curr_pos": 34,
"take_to": 34
},
{
"curr_pos": 35,
"take_to": 35
},
{
"curr_pos": 36,
"take_to": 36
},
{
"curr_pos": 37,
"take_to": 37
},
{
"curr_pos": 38,
"take_to": 38
},
{
"curr_pos": 39,
"take_to": 39
},
{
"curr_pos": 40,
"take_to": 40
},
{"curr_pos": 41,
      "take_to": 41},
    {
      "curr_pos": 42,
      "take_to": 42
    },
    {
      "curr_pos": 43,
      "take_to": 43
    },
    {
      "curr_pos": 44,
      "take_to": 44
    },
    {
      "curr_pos": 45,
      "take_to": 45
    },
    {
      "curr_pos": 46,
      "take_to": 46
    },
    {
      "curr_pos": 47,
      "take_to": 47
    },
    {
      "curr_pos": 48,
      "take_to": 48
    },
    {
      "curr_pos": 49,
      "take_to": 49
    },
    {
      "curr_pos": 50,
      "take_to": 50
    }
  ];


   

  rollDice() : number{
    const diceValue =  Math.floor(Math.random() * 6) + 1;
    return diceValue;
  }


  public z1: number = 0;
  public z2: number = 0;

  checkPos(pos:number): number{
     
   this.z1  = this.board1[pos].curr_pos;
    this.z2= this.board1[pos].take_to;
    if(this.z1!=this.z2){
    return this.z2;
  }
  else{
    return this.z1;
  }
    
  }
}






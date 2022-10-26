import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog';

@Component({
  selector: 'app-newdog',
  templateUrl: './newdog.component.html',
  styleUrls: ['./newdog.component.css']
})
export class NewdogComponent implements OnInit {

  newDog:Dog;
  constructor() { 
    this.newDog = new Dog('','',0);
  }

  ngOnInit(): void {
  }
  MakeMeADog()
  {
    console.log(this.newDog);
  }
}

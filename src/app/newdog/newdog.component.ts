import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Dog } from '../models/dog';
import { DogkeeperService } from '../services/dogkeeper.service';

@Component({
  selector: 'app-newdog',
  templateUrl: './newdog.component.html',
  styleUrls: ['./newdog.component.css']
})
export class NewdogComponent implements OnInit {

  newDog:Dog;
  constructor(private dogKeeperInstance:DogkeeperService, private titleSvc:Title) { 
    this.newDog = new Dog('','',0);
    this.titleSvc.setTitle('New Dog Page');
  }

  ngOnInit(): void {
   
  }
  
  MakeMeADog()
  {
    this.dogKeeperInstance.AddDog(this.newDog);
    alert('Dog Added');
  }
}

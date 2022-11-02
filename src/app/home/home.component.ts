import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Dog } from '../models/dog';
import { DogkeeperService } from '../services/dogkeeper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myDogArray:Dog[];
  
  constructor(private dogKeeperInstance:DogkeeperService, private titleSvc:Title) { 
    console.log('TEST Constructor');
    this.myDogArray = this.dogKeeperInstance.GetDogs();

  }

  ngOnInit(): void {
    console.log('NG On It Test');
    this.myDogArray = this.dogKeeperInstance.GetDogs();
    this.titleSvc.setTitle('Home Page');
  }
  DoesDogNeedMuzzle()
  {
    return false;
  }
}

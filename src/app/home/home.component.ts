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
    this.myDogArray = this.dogKeeperInstance.GetDogs();

  }

  ngOnInit(): void {
    this.myDogArray = this.dogKeeperInstance.GetDogs();
    this.titleSvc.setTitle('Home Page');
  }
  DoesDogNeedMuzzle()
  {
    return false;
  }
}

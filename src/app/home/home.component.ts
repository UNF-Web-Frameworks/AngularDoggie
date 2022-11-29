import { Component, OnInit, ViewChild } from '@angular/core';
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
  color='blue';
  @ViewChild('MyDiv') myDiv:HTMLInputElement |undefined;

  constructor(private dogKeeperInstance:DogkeeperService, private titleSvc:Title) { 
    console.log('TEST Constructor');
    this.myDogArray = this.dogKeeperInstance.GetDogs();
    
  }

  directive=true;
  ngOnInit(): void {
    console.log('NG On It Test');
    this.myDogArray = this.dogKeeperInstance.GetDogs();
    this.titleSvc.setTitle('Home Page');
  }
  DoesDogNeedMuzzle()
  {
    return false;
  }

  AddDirective()
  {
    this.directive=!this.directive;
    return this.directive;
  }

  RaiseXClive()
  {
    this.dogKeeperInstance.XClusive.emit('purple');
  }



}

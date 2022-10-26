import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../models/dog';

@Component({
  selector: 'app-dogcard',
  templateUrl: './dogcard.component.html',
  styleUrls: ['./dogcard.component.css']
})
export class DogcardComponent implements OnInit {

  
  @Input() CurrentDog:Dog|undefined;
  constructor() {
   }

  ngOnInit(): void {
  }

}

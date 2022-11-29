import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../models/dog';

@Component({
  selector: 'app-dogcard',
  templateUrl: './dogcard.component.html',
  styleUrls: ['./dogcard.component.css']
})
export class DogcardComponent implements OnInit {

  @Input() color:string='';
  @Input() CurrentDog:Dog|undefined;
  @Input() AddDirective:boolean;
  constructor() {
    this.AddDirective=false;
   }

  ngOnInit(): void {
  }

  GetDirective()
  {
    return this.AddDirective;
  }

}

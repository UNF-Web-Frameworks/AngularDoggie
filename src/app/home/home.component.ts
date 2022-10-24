import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 

    
  }
  userName='Jose Gomez';
  btnDisabled=true;

  user ={
    firstName:"Jose",
    lastName:"Gomez",
    emailAddress:"lol@lol.com"
  }
  myTimer:any=null;
  ngOnInit(): void {
    this.myTimer=setTimeout(()=>{
      alert('Stop this!');
    },10000);
  }

  ngOnDestroy()
  {
    this.myTimer
  }

  DisplayHello(eventArgs:MouseEvent)
  {
    
    console.log(eventArgs);
    alert('Hello World');

    console.log(this.user);
  }

}

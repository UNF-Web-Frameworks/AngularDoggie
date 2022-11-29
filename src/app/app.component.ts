import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DogkeeperService } from './services/dogkeeper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DogRescue';
  constructor(private router:Router, private dogKeeper:DogkeeperService)
  {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        console.log(event);
        this.dogKeeper.currRoute.emit(event.url);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DogkeeperService } from '../services/dogkeeper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dogKeeperSvc:DogkeeperService, private router:Router) { }
  userName='';
  password='';
  errorOccured=false;
  ngOnInit(): void {
  }

  Login()
  {
    this.dogKeeperSvc.Login(this.userName, this.password).subscribe({
      next: (data) => {
        this.dogKeeperSvc.SetCurrentUser(data);
        console.log(data);
      },
      error: (err) => {
        console.log(err);
        
      },
      complete: () => {
        console.log('Complete')
      }
    });

    // Old Hard Coded Login

    /*let result =this.dogKeeperSvc.Login(this.userName,this.password);
    if(result)
    {
        this.router.navigate(['/']);
    }
    else
    {
      this.errorOccured=true;
    }*/
  }

}

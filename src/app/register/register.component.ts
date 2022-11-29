import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DogkeeperService } from '../services/dogkeeper.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
{
  responseError=false;
  ErrorMsg='';
  //emailFormControl = new FormControl('lol@lol.com', [Validators.required, Validators.email]);
  registrationFormGrp = new FormGroup(
    {
      frmName: new FormControl('', [Validators.required]),
      frmUserName: new FormControl('', [Validators.required]),
      frmPassword: new FormControl('', [Validators.required]),
    }
  );
  tooltipBtn = "Click here to register";
  constructor(private _snackBar: MatSnackBar, private dogKeepService: DogkeeperService, private router:Router) { }

  ngOnInit(): void
  {
  }
  RegisterUser()
  {
    this.registrationFormGrp.markAllAsTouched();
    if (this.registrationFormGrp.valid)
    {
      let name = this.registrationFormGrp.get('frmName')?.value;
      let userName =this.registrationFormGrp.get('frmUserName')?.value;
      let password = this.registrationFormGrp.get('frmPassword')?.value;
      if(name && userName && password)
      {
        this.dogKeepService.CreateHandler(name, userName, password).subscribe(
          {
            next: (data) =>
            {
              this._snackBar.open(`User: ${data.userName} has been created successfully`,'Close',{duration:3000});
              this.router.navigate(['/Login',{userName:userName}]);
            },
            error: (err)=>
            {
              this.responseError=true;
              this.ErrorMsg=err.Message;
              this._snackBar.open(`Error: ${JSON.stringify(err)}`);
            }
          }
        )
      }
    }
    else
    {
      this._snackBar.open("Fix your stuff!", "Close", {
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }

  }

  Clear()
  {
    this.registrationFormGrp.reset();
  }
}

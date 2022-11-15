import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //emailFormControl = new FormControl('lol@lol.com', [Validators.required, Validators.email]);
  registrationFormGrp = new FormGroup(
    {
      frmName : new FormControl('',[Validators.required]),
      frmUserName : new FormControl('',[Validators.required]),
      frmPassword : new FormControl('',[Validators.required]),
    }
  );
  tooltipBtn="Click here to register";
  constructor() { }

  ngOnInit(): void {
  }
  RegisterUser()
  {
    this.registrationFormGrp.markAllAsTouched();
    if(this.registrationFormGrp.valid)
    {
      alert('All Good!');
    }
    else
    {
      alert('Fix your shiz');
    }
    
  }

  Clear()
  {
    this.registrationFormGrp.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm:any;
passwordError:string=""
  constructor() { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      "name":new FormControl("Sundar DC", Validators.required),
      "address":new FormControl("Toronto", Validators.required),
      "email":new FormControl("sundar@info.com", [Validators.required, Validators.email]),
      "password":new FormControl("sundar", Validators.required),
      "confirm-password":new FormControl("sundar1", Validators.required),
    })
  }
  onRegister(){
    if(this.registerForm.get("password")!=this.registerForm.get('confirm-password')){
      this.passwordError="Confirm password does not match"
      return
    }

    console.log(this.registerForm.value)
  }
}

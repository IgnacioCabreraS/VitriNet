import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  siteKey: string;

  formulario:FormGroup;
  email: AbstractControl;
  password:AbstractControl;

  constructor(private form:FormBuilder) {

    this.siteKey = '6LcBcNMmAAAAAIi2T75YijzIcVwUCV3r4QwHZeKd';

    this.formulario=this.form.group({
      email:['',[Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
    this.email= this.formulario.controls['email'];  
    this.password=this.formulario.controls['password'];
   }

  ngOnInit(): void {
  }

  login(){
    
  }

}
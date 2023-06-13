import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formulario:FormGroup;
  usuario: AbstractControl;
  email: AbstractControl;
  password:AbstractControl;

  constructor(private form:FormBuilder) {
    this.formulario=this.form.group({
      usuario:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
    this.usuario = this.formulario.controls['usuario'];
    this.email= this.formulario.controls['email'];  
    this.password=this.formulario.controls['password'];
   }

  ngOnInit(): void {
  }

  registro(){

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{
  email: String;
  password: String;
  nombre: String
  request: object;

  loginForm:FormGroup; //Variable para validar forms
  
  constructor(private api: ApiService,private fb:FormBuilder,public router: Router,private cookies: CookieService) {
    this.logForm();
  }

  ngOnInit(): void {
    
  }

  /* Form validation and setting */
  setLogin() {
    this.email = this.loginForm.get('email').value
    this.password = this.loginForm.get('password').value
    }

  logForm(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }
  /* Form validation and setting */

  login() {
     this.api.login(this.request).subscribe(data => {
      
    }, error => {
     
      
    });
  }

}

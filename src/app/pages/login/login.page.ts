import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IgnAlbaService } from 'src/app/services/ign-alba.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data: any;
  email:any;
  password:any;
  formLogin : FormGroup;
  isSubmitted = false;
  token:any;
  constructor(public fBuild : FormBuilder,public uService: IgnAlbaService, public router: Router) { }

  ngOnInit() {
    this.formLogin = this.fBuild.group({
      'username': new FormControl ("",[Validators.required,Validators.minLength(5)]),
      'password': new FormControl ("",[Validators.required, Validators.minLength(5)])
    })
  }
    get errorControl() {

      return this.formLogin.controls;
  
    }
  
    submitForm() {
  
      this.isSubmitted = true;
      if (!this.formLogin.valid) {
        console.log('Porfavor, completa todos los campos obligatorios!')
        return false;
      } else {
        this.uService.login(this.formLogin.value.username,this.formLogin.value.password).then(data => {
          console.log(data);
          this.data = data;
          this.router.navigateByUrl('/projects');
        });
      }
    }
  }



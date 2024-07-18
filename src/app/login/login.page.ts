import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_msg = {
    email: {
      required: "Correo requerido.",
      pattern: "Correo invalido."
    },
    password: {
      required: "Contraseña requerida."
    }
  }
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navController: NavController,
  )
  {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
        ])
      )
    });
  }

  ngOnInit() {
  }

  loginUser(data: any) {
    this.authService.loginUser(data).then( res => {
      this.navController.navigateForward("/home");
    })
  }
  

}

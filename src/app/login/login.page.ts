import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

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
  errorMsg: string = "";
  isAlertOpen = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navController: NavController,
    private alertController: AlertController,
    private storage: Storage,
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
      this.storage.set("isUserLoggedIn", true);
      this.navController.navigateForward("/home");
    }).catch( err => {
      this.errorMsg = err;
      this.presentAlert(err);
    })
  }

  async presentAlert(error: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: error,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
  

}

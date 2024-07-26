import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private navController: NavController,
    private storage: Storage,
    private authService: AuthService,
  ) { 
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirmation: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit() {
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('passwordConfirmation')?.value
      ? null : { mismatch: true };
  }

  register(data: any) {
    console.log('Form Submitted', this.registerForm.value);
    this.authService.registerUser(data).then( (res) => {
      this.navController.navigateBack("/login");
    });
  }

}

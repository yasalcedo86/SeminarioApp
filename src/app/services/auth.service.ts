import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage) { }
  loginUser(credentials: any){
    return new Promise((accept, reject) => {
      if( credentials.email == "admin@admin.com" && credentials.password == "admin" ){
        accept("Entro");
      } else {
        reject("Error al ingresar");
      }
    });
  }

  registerUser(registerData: any){
    registerData.password = btoa(registerData.password);
    return new Promise((accept, reject) => {
      if(true){
        let user = this.storage.set("user", registerData);
        accept(user);
      } else {
        reject("Error al ingresar");
      }
    });
  }
}

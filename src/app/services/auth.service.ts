import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loginUser(credentials: any){
    return new Promise((accept, reject) => {
      if( credentials.email == "admin@admin.com" && credentials.password == "admin" ){
        accept("Entro");
      } else {
        reject("Entro");
      }
    });
  }
}

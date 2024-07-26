import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class loginGuard implements CanActivate {
  constructor(
    private storage:Storage,
    private router:Router){
  }
  async canActivate(){

    const isUserLoggedIn = await this.storage.get("isUserLoggedIn");
    if (isUserLoggedIn) {
      return true;
    } else {
      console.log("entro aki")
      this.router.navigateByUrl('/login');
      return false;
    }
  }

};

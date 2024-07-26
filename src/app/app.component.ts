import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title: string = 'Inicio';
  showMenu: boolean = true;

  constructor(
    private menu: MenuController,
    private storage: Storage,
    private router: Router
  ) {}
  
  async ngOnInit() {
    await this.storage.create();
    this.router.events
      .pipe(
        filter((event: Event) => event instanceof NavigationEnd) 
      )
      .subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          this.updateMenuVisibility(event.urlAfterRedirects);
        }
    });
  }

  updateMenuVisibility(url: string) {
    this.showMenu = url !== '/login' && url !== '/register';
  }
  

  closeMenuAndSetTitle(title: string) {
    this.title = title;
    this.menu.close();
  }

  logOut() {
    const intro = this.storage.set("isUserLoggedIn", false);
    this.router.navigateByUrl("/login");
  }
  
  private closeMenu() {
    this.menu.close();
  }

}

import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title: string = 'Inicio';

  constructor(
    private menu: MenuController,
    private storage: Storage
  ) {}
  
  async ngOnInit() {
    await this.storage.create();
  }

  closeMenuAndSetTitle(title: string) {
    this.title = title;
    this.menu.close();
  }
  
  private closeMenu() {
    this.menu.close();
  }

}

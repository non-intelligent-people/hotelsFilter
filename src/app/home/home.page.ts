import { Component } from '@angular/core';
import { GeneradorHoteles } from '../core/model/generador-hoteles';
import { Complemento } from '../core/model/complemento';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public complemento = Complemento;
  public miHotel: GeneradorHoteles;
  private hoteles;
  constructor(public router: Router) {
    this.miHotel = new GeneradorHoteles();
    this.hoteles = this.miHotel.getHoteles();
  }
  obtenerPersona() {
    let navigationExtras: NavigationExtras = {
      state: {
        hoteles: this.hoteles
      }
    };
    // Utilizo el router
    this.router.navigate(['uno'], navigationExtras);
  }
}



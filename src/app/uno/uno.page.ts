import { Habitacion } from './../core/model/habitacion';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.page.html',
  styleUrls: ['./uno.page.scss'],
})
export class UnoPage implements OnInit {
  private data: any;
  constructor(public router: Router) {
    this.data = this.router.getCurrentNavigation().extras.state.hoteles;
  }
  obetenerHabitacion(habitacion : Habitacion) {
    let navigationExtras : NavigationExtras = {
      state: {
        seleccion: habitacion
      }
    };
    // Utilizo el router
    this.router.navigate(['dos'], navigationExtras);
  }

  ngOnInit() {
  }

}

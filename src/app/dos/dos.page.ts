import { Component, OnInit } from '@angular/core';
import { Habitacion } from './../core/model/habitacion';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dos',
  templateUrl: './dos.page.html',
  styleUrls: ['./dos.page.scss'],
})
export class DosPage implements OnInit {
  private habitacion : Habitacion;

  constructor(public router : Router) { 
    this.habitacion = this.router.getCurrentNavigation().extras.state.seleccion;
  }

  ngOnInit() {
  }


   /* Getter hotel
   * @return {habitacion}
   */
  public get hotel(): Habitacion {
    return this.habitacion;
  }

  /* Setter hotel
   * @param {habitacion} value
   */
  public set hotel(value: Habitacion) {
    this.habitacion = value;
  }
}

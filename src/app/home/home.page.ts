import { TipoHabitacion } from './../core/model/tipoHabitacion';
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
  getHotelCreado() {
    let nombreBox = document.getElementById("selectNombreHabitacion");
    let camaBox = document.getElementById("selectCama");
    let categoriaBox = document.getElementById("selectCategoria");
    let precio = document.getElementById("precioInput").value;
    let nombre = nombreBox.options[nombreBox.selectedIndex].text;
    let cama = camaBox.options[camaBox.selectedIndex].text;
    let categoria = categoriaBox.selectedIndex;
    let minibarBox = document.getElementById("minibar");
    let secadorBox = document.getElementById("secador");
    let minibar = this.getValueChecked(minibarBox);
    let secador = this.getValueChecked(secadorBox);
    console.log(precio, cama, nombre, categoria, minibar, secador);
    //console.log(this.filtrar(categoria,nombre,precio,minibar));

  }
  getValueChecked(elemento) {
    if (elemento.checked) {
      return elemento.value;
    }
  }
  filtrarCategoria(categoria) {
    let retorno = this.hoteles.filter(function (hotel) {
      return hotel.categoria.toString() === categoria.toString();
    });
    return retorno;
  }
  filtrarTipoHabitacion(habitacion,vector){
    let retorno = vector.filter(function (hotel) {
      return hotel.tipoHabitacion.clasificacion.toString() === habitacion.toString();
    });
    return retorno;
  }
  filtrarPrecioHabitacion(habitacion,vector){
    let retorno = vector.filter(function (hotel) {
      return hotel.precio <= parseInt(habitacion.toString());
    });
    return retorno;
  }
  filtrarComplemento(habitacion,vector){
    let retorno = this.hoteles.tipoHabitacion.complementos.filter(function (hotel) {
      return hotel.toLowerCase().indexOf(habitacion.toLowerCase()) > -1;
    });
    return retorno;
  }
 /* filtrar(categoria,tipoHabitacion,precio,minibar){
    let retorno=this.filtrarCategoria(categoria);
    retorno=this.filtrarTipoHabitacion(tipoHabitacion,retorno.tipoHabitacion);
    retorno=this.filtrarPrecioHabitacion(precio,retorno.tipoHabitacion);
    retorno.this.filtrarComplemento(minibar,retorno.tipoHabitacion.complementos);
    console.log(retorno);
  }*/

}



import { Habitacion } from './../core/model/habitacion';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { GeneradorHoteles } from '../core/model/generador-hoteles';
import { Complemento } from './../core/model/complemento';
import { Hotel } from './../core/model/hotel';
import { TipoHabitacion } from './../core/model/tipoHabitacion';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public complemento = Complemento;
  public miHotel: GeneradorHoteles;
  private hoteles;
  private dataTofilter;
  private _complemento = {
    Minibar: false,
    Secador: false
  };
  private _todo = {
    tipo: '',
    cama: '',
    categoria: '',
    precio: ''
  };

  logForm(form) {
    this.dataTofilter = form.value;
    console.log(this.dataTofilter);
  }
  constructor(public router: Router) {
    this.miHotel = new GeneradorHoteles();
    this.hoteles = this.miHotel.getHoteles();
  }

  obetenerHoteles() {
    let navigationExtras: NavigationExtras = {
      state: {
        hoteles: this.hoteles
      }
    };
    // Utilizo el router
    this.router.navigate(['uno'], navigationExtras);
  }

  getValueChecked(elemento) {
    if (elemento.checked) {
      return elemento.value;
    }
  }

  filtrarCategoria() {
    let that = this._todo;
    let retorno = this.hoteles.filter(function (hotel: Hotel) {
      return hotel.categoria === that.categoria.length;
    });
    return retorno;
  }
  filtrar() {
    let actual = this.hoteles;
    let that = this.todo;
    if (that.categoria) {
      actual = this.filtrarCategoria();
    }
    if (that.precio.length > 0) {
      actual = this.filtrarPrecioHabitacion(that.precio, actual);
    }
    if (that.tipo.length > 0) {
      actual = this.filtrarTipoHabitacion(that.tipo, actual);
    }
    let misComponentes = this.obtenerExtras();
    if (misComponentes.length > 0) {
      if (this.todo.cama.length > 0) {
        misComponentes.push(this.todo.cama);
      }
      actual = this.filtrarComplemento(misComponentes, actual);
    }
    console.log("el array es: ", actual);
    console.log(this.todo, this.obtenerExtras());
  }

  filtrarTipoHabitacion(habitacion, vector: Hotel[]) {
    let retorno: Hotel[] = new Array();
    let temporal: Habitacion[] = new Array();
    for (let i = 0; i < vector.length; i++) {
      temporal = vector[i].tiposHabitacion.filter(function (tipohabitacion: Habitacion) {
        return tipohabitacion.tipoHabitacion.clasificacion.toString().trim() === habitacion.toString().trim();
      });
      if (temporal.length > 0) {
        retorno.push(vector[i]);
      }
      temporal = [];
    }
    return retorno;
  }

  filtrarPrecioHabitacion(precio, vector: Hotel[]) {
    let retorno: Hotel[] = new Array();
    let temporal: Habitacion[] = new Array();
    for (let i = 0; i < vector.length; i++) {
      temporal = vector[i].tiposHabitacion.filter(function (habitacion) {
        return habitacion.precio <= parseInt(precio.toString());
      });
      if (temporal.length > 0) {
        retorno.push(vector[i]);
      }

    }

    return retorno;
  }
  filtrarComplemento(complementos, vector) {
    let that = this;
    let retorno: Hotel[] = new Array();
    let temporal: Habitacion[] = new Array();
    for (let i = 0; i < vector.length; i++) {
      temporal = vector[i].tiposHabitacion.filter(function (habitacion: Habitacion) {
        console.log("complementos de la habitacion :" + habitacion.tipoHabitacion.complementos, complementos);
        console.log(that.compararComponentes(habitacion.tipoHabitacion.complementos, complementos));
        return that.compararComponentes(habitacion.tipoHabitacion.complementos, complementos);
      });
      console.log(temporal);
      if (temporal.length > 0) {
        retorno.push(vector[i]);
      }
      
    }
    return retorno;
  }
  obtenerExtras() {
    const retorno: string[] = new Array();
    for (const elementoExtra in this.complementos) {
      if (this.complementos[elementoExtra]) {
        retorno.push(elementoExtra);
      }
    }
    return retorno;
  }
  private compararComponentes(componente: Complemento[], misComponentes: string[]) {
    for (let i = 0; i < misComponentes.length; i++) {
      if (!this.indexOf(componente, misComponentes[i])) {
        return false;
      }

    }
    return true;
  }
  private indexOf(base, comparado) {
    for (let i = 0; i < base.length; i++) {
      if (base[i].toString().toLowerCase().trim() === comparado.toString().toLowerCase().trim()) {
        return true;
      }
    }
    return false;
  }
  get complementos() {
    return this._complemento;
  }
  get todo() {
    return this._todo;
  }
}

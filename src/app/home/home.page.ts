import { Hotel } from './../core/model/hotel';
import { TipoHabitacion } from './../core/model/tipoHabitacion';
import { Component } from '@angular/core';
import { GeneradorHoteles } from '../core/model/generador-hoteles';
import { Complemento } from '../core/model/complemento';
import { NavigationExtras, Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: [ 'home.page.scss' ]
})
export class HomePage {
	public complemento = Complemento;
	public miHotel: GeneradorHoteles;
	private hoteles;
	private dataTofilter;
	complemento = {
		minibar: false,
		secador: false,
	}
	todo = {
		tipo: '',
		cama: '',
		categoria: '',
		precio: ''
	};

	logForm(form) {
		this.dataTofilter = form.value;
		console.log(this.dataTofilter);
	}
	ptionsFn() {
		console.log(this.todo);
	}
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
		this.router.navigate([ 'uno' ], navigationExtras);
	}

	getValueChecked(elemento) {
		if (elemento.checked) {
			return elemento.value;
		}
	}

	filtrarCategoria() {
		let retorno = this.hoteles
			.filter(function(hotel: Hotel) {
				return hotel.categoria.toString() === this.categoria.toString();
			})
			.filter(function(tipoHabitacion: TipoHabitacion) {
				return tipoHabitacion.complementos.toString() === this.cama.toString();
			});
		console.log(this.filtrarCategoria());
		return retorno;
	}

	filtrarTipoHabitacion(habitacion, vector) {
		let retorno = vector.filter(function(tipohabitacion: TipoHabitacion) {
			return tipohabitacion.capacidad === habitacion.toString();
		});
		return retorno;
	}
	filtrarPrecioHabitacion(precio, vector) {
		let retorno = vector.filter(function(hotel: Hotel) {
			return hotel.precio <= parseInt(precio.toString());
		});
		return retorno;
	}
	filtrarComplemento(habitacion, vector) {
		let retorno = vector.tipoHabitacion.complementos.filter(function(hotel) {
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

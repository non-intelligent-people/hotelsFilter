import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { GeneradorHoteles } from '../core/model/generador-hoteles';
import { Complemento } from './../core/model/complemento';
import { Hotel } from './../core/model/hotel';
import { TipoHabitacion } from './../core/model/tipoHabitacion';

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
	private _complemento = {
		minibar: false,
		secador: false
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
		this.router.navigate([ 'uno' ], navigationExtras);
	}

	getValueChecked(elemento) {
		if (elemento.checked) {
			return elemento.value;
		}
	}

	filtrarCategoria() {
		let that = this._todo;
		let retorno = this.hoteles.filter(function(hotel: Hotel) {
			return hotel.categoria === that.categoria.length;
		});
		console.log(retorno);
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
	get complementos(): boolean {
		return this._complemento;
	}
	get todo(): string {
		return this._todo;
	}
}

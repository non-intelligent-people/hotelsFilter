import { Habitacion } from './habitacion';
import { Complemento } from './complemento';
import { TipoHabitacion } from './tipoHabitacion';
import { Hotel } from './hotel';
import { ThrowStmt } from '@angular/compiler';
export class GeneradorHoteles {
	private nombreHoteles = [ 'benebento', 'manolis', 'abcdiablo' ];
	private _nombreHabitaciones = [ 'Simple', 'Doble', 'Suit' ];
	private MINIMO: number = 3;
	private MAXIMO: number = 10;
	private _hoteles: Hotel[] = new Array();
	private _camas: Complemento[] = [ Complemento.individual, Complemento.doble, Complemento.kingSize ];
	private _extras: Complemento[] = [ Complemento.minibar, Complemento.secador ];

	private generarHoteles() {
		for (let i = 0; i < this.nombreHoteles.length; i++) {
			this.hoteles.push(new Hotel(this.nombreHoteles[i], this.getAleatorio(1, 6), this.generarHabitaciones()));
		}
		console.log(this.hoteles);
	}
	constructor() {
		this.generarHoteles();
	}

	public getHoteles(): Hotel[] {
		return this.hoteles;
	}
	private generarHabitaciones(): Habitacion[] {
		let numeroHabitaciones: number = this.getAleatorio(this.MINIMO, this.MAXIMO);
		let numeroTiposHabitaciones = this.getAleatorio(1, 4);
		let tipoHabitaciones = this.generarTipoHabitacion(numeroTiposHabitaciones, this.nombreHabitaciones);
		let habitaciones: Habitacion[] = new Array();
		let precio;

		for (let index = 0; index < numeroHabitaciones; index++) {
			let tipo = tipoHabitaciones[this.getAleatorio(0, tipoHabitaciones.length)];
			precio = this.generarPrecio(tipo.complementos, this.getAleatorio(100, 101));
			habitaciones.push(new Habitacion(precio, tipo));
		}
		return habitaciones;
	}
	private generarTipoHabitacion(numeroTiposHabitaciones: number, nombreHabitaciones: string[]): TipoHabitacion[] {
		let tipoHabitacion: TipoHabitacion[] = new Array();
		let componentes: Complemento[];
		let capacidad;
		let nombre;
		for (let i = 0; i < numeroTiposHabitaciones; i++) {
			nombre = nombreHabitaciones[this.getAleatorio(0, nombreHabitaciones.length)];
			capacidad = this.getAleatorio(1, 4);
			componentes = this.generarComponentes(this.getAleatorio(0, 3));
			tipoHabitacion.push(new TipoHabitacion(capacidad, componentes, nombre));
		}
		return tipoHabitacion;
	}
	private generarComponentes(numero: number): Complemento[] {
		let misComponentes: Complemento[] = new Array();
		let miCama = this.getAleatorio(0, this._camas.length);
		misComponentes.push(this._camas[miCama]);
		for (let i = 0; i < numero; i++) {
			let pos = this.getAleatorio(0, this._extras.length);
			misComponentes.push(this._extras[pos]);
		}
		return misComponentes;
	}
	private getAleatorio(minimo, maximo): number {
		return Math.floor(Math.random() * (maximo - minimo) + minimo);
	}
	private generarPrecio(complemento: Complemento[], precio: number) {
		let precioComponente = [
			[ Complemento.individual, 150 ],
			[ Complemento.doble, 250 ],
			[ Complemento.kingSize, 400 ],
			[ Complemento.secador, 10 ],
			[ Complemento.minibar, 20 ]
		];
		for (let i = 0; i < complemento.length; i++) {
			for (let j = 0; j < precioComponente.length; j++) {
				precio += <number>precioComponente[j][1];
			}
		}
		return precio;
	}

	public get hoteles(): Hotel[] {
		return this._hoteles;
	}
	public set hoteles(value: Hotel[]) {
		this._hoteles = value;
	}
	public get nombreHabitaciones() {
		return this._nombreHabitaciones;
	}
	public set nombreHabitaciones(value) {
		this._nombreHabitaciones = value;
	}
	public get camas(): Complemento[] {
		return this._camas;
	}
	public get extras(): Complemento[] {
		return this._extras;
	}
}

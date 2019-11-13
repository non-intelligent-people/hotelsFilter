import { TipoHabitacion } from './tipoHabitacion';

export class Habitacion {
    private _precio;
    private _tipoHabitacion:TipoHabitacion;

    constructor(precio: number, tipoHabitacion: TipoHabitacion) {
        this._precio = precio;
        this._tipoHabitacion = tipoHabitacion;
    }
    public get precio() {
        return this._precio;
    }
    public set precio(value) {
        this._precio = value;
    }
    public get tipoHabitacion() {
        return this._tipoHabitacion;
    }
    public set tipoHabitacion(value) {
        this._tipoHabitacion = value;
    }

}

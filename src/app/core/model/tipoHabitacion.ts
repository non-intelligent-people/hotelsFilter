import { Complemento } from './complemento';

export class TipoHabitacion {
    private _capacidad;
    private _complementos;
    private _clasificacion;


    constructor(capacidad: number, complemento: Complemento[],clasificacion:string) {
        this.capacidad = capacidad;
        this.complementos = complemento;
        this._clasificacion=clasificacion;
    }
    public get capacidad() {
        return this._capacidad;
    }
    public set capacidad(value) {
        this._capacidad = value;
    }
    public get complementos() {
        return this._complementos;
    }
    public set complementos(value) {
        this._complementos = value;
    }
    public get clasificacion() {
        return this._clasificacion;
    }
    public set clasificacion(value) {
        this._clasificacion = value;
    }

}

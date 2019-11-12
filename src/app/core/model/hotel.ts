import { Habitacion } from './habitacion';

export class Hotel {


        private _nombre: string;
        private _categoria: number;
        private _tiposHabitacion: Habitacion[];
        constructor(nombre: string, categoria: number, tiposHabitacion: Habitacion[]) {
                this._nombre = nombre;
                this._categoria = categoria;
                this._tiposHabitacion = tiposHabitacion;
        }

        public get nombre(): string {
                return this._nombre;
        }


        public get categoria(): number {
                return this._categoria;
        }
        public get tiposHabitacion(): Habitacion[] {
                return this._tiposHabitacion;
        }
}

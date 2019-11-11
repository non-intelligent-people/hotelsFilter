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
  getHotelCreado(){
    let nombreBox=document.getElementById("selectNombreHabitacion");
    let camaBox=document.getElementById("selectCama");
    let categoriaBox=document.getElementById("selectCategoria");
    let precio=document.getElementById("precioInput").value;
    let nombre=nombreBox.options[nombreBox.selectedIndex].text;
    let cama=camaBox.options[camaBox.selectedIndex].text;
    let categoria=categoriaBox.selectedIndex;
    let minibarBox=document.getElementById("minibar");
    let secadorBox=document.getElementById("secador");
    let minibar=this.getValueChecked(minibarBox);
    let secador=this.getValueChecked(secadorBox);
    console.log(precio,cama,nombre,categoria,minibar,secador);

  }
  getValueChecked(elemento){
    if (elemento.checked) {
      return elemento.value;
    }
  }

}



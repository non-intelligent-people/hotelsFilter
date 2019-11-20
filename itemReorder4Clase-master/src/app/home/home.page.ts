import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  doReorder(event){
    // se puede obtener mas informacion del evento
    console.log("movideo desde ",event.detail.from, ' hasta ', event.detail.to);
    //hay que terminar el evento
    event.detail.complete();
  }
}

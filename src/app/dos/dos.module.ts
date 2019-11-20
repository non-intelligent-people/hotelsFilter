import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router, NavigationExtras } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DosPage } from './dos.page';

const routes: Routes = [
  {
    path: '',
    component: DosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DosPage]
})
export class DosPageModule {
  private data: any;
  constructor(public router: Router) { 
    this.data = this.router.getCurrentNavigation().extras.state.hoteles;
  }

}

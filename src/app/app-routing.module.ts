
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaTestComponent } from './pages/tienda-test/tienda-test.component';

const routes: Routes = [
  { path: 'tiendaTest' , component: TiendaTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


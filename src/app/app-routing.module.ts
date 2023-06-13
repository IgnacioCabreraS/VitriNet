import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaTestComponent } from './pages/tienda-test/tienda-test.component';
import { LoginComponent } from './forms/login/login.component';
import { RegisterComponent } from './forms/register/register.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  { path: 'tiendaTest' , component: TiendaTestComponent },
  { path: 'login-test' , component: LoginComponent  },
  { path: 'register-test' , component: RegisterComponent },
  { path: 'sobre-nosotros' , component: SobreNosotrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


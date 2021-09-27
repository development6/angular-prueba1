import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component'
import { RegistroComponent } from './pages/registro/registro.component';
import {JuegosComponent} from './pages/juegos/juegos.component'
import {ProductoComponent} from './pages/producto/producto.component';
import {NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'juegos', component: JuegosComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'not-found', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

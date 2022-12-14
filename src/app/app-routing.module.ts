import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddpersonajeComponent } from './addpersonaje/addpersonaje.component';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'personajes',
      component: PersonajesComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
    path: 'personajes/:id',
    component: AddpersonajeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent
  },
  /* BEGIN */
  {
    path: 'contact',
    title: 'Contact',
    component: ContactComponent
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent
  },
  /* END */
  {
    path: '**',
    title: 'Home :: Not Found',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

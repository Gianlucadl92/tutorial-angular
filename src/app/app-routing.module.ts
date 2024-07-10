import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { ContattiComponent } from './routing/contatti/contatti.component';
import { ContattoComponent } from './routing/contatto/contatto.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/homepage' },
  { path: 'homepage', component: HomeComponent },
  { path: 'contatti', component: ContattiComponent, children: [
    { path: ':id', component: ContattoComponent },
  ]},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

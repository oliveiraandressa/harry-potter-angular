import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'houses', pathMatch: 'full' },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
    path: 'houses',
    loadChildren: () => import('./houses/houses.module').then( m => m.HousesModule)
  },
  { 
    path: '**',
    redirectTo: 'houses',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

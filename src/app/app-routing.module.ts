import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogcardComponent } from './dogcard/dogcard.component';
import { HomeComponent } from './home/home.component';
import { NewdogComponent } from './newdog/newdog.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
   component: HomeComponent
  },
  {
    path:'NewDog',
    component: NewdogComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

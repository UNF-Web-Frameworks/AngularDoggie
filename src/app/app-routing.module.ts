import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogcardComponent } from './dogcard/dogcard.component';
import { HomeComponent } from './home/home.component';
import { HtmlPlayComponent } from './html-play/html-play.component';
import { LoginComponent } from './login/login.component';
import { NewdogComponent } from './newdog/newdog.component';
import { RegisterComponent } from './register/register.component';
import { AuthGService } from './services/auth-g.service';

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
    component: NewdogComponent,
    canActivate:[AuthGService]

  },
  
  {
    path:'Login',
    component: LoginComponent

  },
  {
    path:'Register',
    component: RegisterComponent
  },
  {
    path:'html',
    component:HtmlPlayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

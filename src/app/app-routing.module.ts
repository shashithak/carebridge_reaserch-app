import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MindCareAssistComponent } from './Components/mind-care-assist/mind-care-assist.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default to login page
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mindcare',component:MindCareAssistComponent},
  { path: '**', redirectTo: 'login' } // Redirect unknown routes to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

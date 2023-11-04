import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
        data: {
          title: 'Login Page'
        }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

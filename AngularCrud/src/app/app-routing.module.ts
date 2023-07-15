import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DataComponent } from './data/data.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'add', component: AddComponent
  },
  {
    path: 'data', component: DataComponent
  },
  {
    path: 'details/:id', component: DetailsComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '**', component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

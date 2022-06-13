import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { FrutasComponent } from './components/frutas/frutas.component';

const routes: Routes = [
  {
    path: 'frutas',
    component: FrutasComponent
  },
  {
    path: 'details/:name',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

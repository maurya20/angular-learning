import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { DetailComponent } from './components/detail/detail.component';
import { GridComponent } from './components/grid/grid.component';
import { HomeComponent } from './components/home/home.component';

//const routes: Routes = [];
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'btn', component: ButtonComponent },
  { path: 'grid', component: GridComponent },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

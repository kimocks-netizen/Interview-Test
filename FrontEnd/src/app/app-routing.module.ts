import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
{
  path: '',
  redirectTo: 'list',
  pathMatch: 'full',
},
{
  path: 'list',
  component: ListComponent,
  data: {
    title: 'Heros'
  }
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

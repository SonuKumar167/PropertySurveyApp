import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WardAddBlockComponent } from './ward-add-block/ward-add-block.component';
const routes: Routes = [
  {
    path:'',redirectTo:'Login',pathMatch:'full'
  },
  {
    component:LoginComponent, path:'Login'
  },
  {
    component:DashboardComponent, path:'Dashboard'
  },
  {
    component:WardAddBlockComponent, path:'WardBlock'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

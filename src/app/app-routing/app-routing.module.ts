import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { JobComponent } from '../job/job.component';



const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'auth',
  loadChildren: 'app/auth/auth.module#AuthModule'
}, {
  path: 'admin',
  loadChildren: 'app/admin/admin.module#AdminModule'
},
  {
    path: 'add',
    component: UserComponent
},
  {
    path: 'contractors/:id',
    component: UserComponent
  },
  {
    path: 'jobs',
    component: JobComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})

export class AppRoutingModule {}

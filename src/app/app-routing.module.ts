import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
  { path: 'user', data: { breadcrumb: 'User > ' }, children: [
    { path: 'user-list', component: UserListComponent, data: { breadcrumb: 'User-List'} },
    { path: 'user-details', component: UserDetailsComponent, data: { breadcrumb: 'User Details'} },
    { path: '', redirectTo: 'user-list', pathMatch: 'full' }
  ]},
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

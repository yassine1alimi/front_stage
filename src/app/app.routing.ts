import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModerateurComponent } from './board-moderateur/board-moderateur.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ReclamationComponent } from './pages/reclamation/reclamation.component';


const routes: Routes =[
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModerateurComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'reclamations', component: ReclamationComponent },

  
    {path: 'updateuser', component : UpdateUserProfileComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, 
  //{ path: 'login', component: LoginComponent },
  { path: '', redirectTo : 'login', pathMatch:'full' }

  
  //{
   // path: '**',
   // redirectTo: 'dashboard'
  //}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

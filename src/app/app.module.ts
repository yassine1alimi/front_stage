import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ReclamationComponent } from './pages/reclamation/reclamation.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';
import { BoardModerateurComponent } from './board-moderateur/board-moderateur.component';
import { AddReclamationComponent } from './pages/add-reclamation/add-reclamation.component';
//import { authInterceptorProviders } from './helpers/auth.interceptor';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ReclamationComponent,
    BoardAdminComponent,
    BoardUserComponent,
    UpdateUserProfileComponent,
    BoardModerateurComponent,
    AddReclamationComponent
  ],
  providers: [],
  
  /*providers: [authInterceptorProviders],
*/
  bootstrap: [AppComponent]
})
export class AppModule { }

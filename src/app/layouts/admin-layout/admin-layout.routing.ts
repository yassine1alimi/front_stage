import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

import { BoardUserComponent } from '../../board-user/board-user.component';
import { BoardModerateurComponent } from '../../board-moderateur/board-moderateur.component';
import { BoardAdminComponent } from '../../board-admin/board-admin.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
  // { path: 'user', component: BoardUserComponent },
 // { path: 'mod', component: BoardModerateurComponent },
 // { path: 'admin', component: BoardAdminComponent }
    
];

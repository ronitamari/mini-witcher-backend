import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component'
import { LoginComponent } from './pages/login/login.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { MapComponent } from './pages/map/map.component';
import { DescriptionComponent } from './pages/description/description.component';

export const routes: Routes = [
    { path: 'users',
        component: HomeLayoutComponent,
        children: [
            {
                path: '',
                component: UsersComponent
            }
        ]
    },
    { path: "login", component:LoginComponent },
    { path: "map", component:MapComponent },
    { path: "description", component:DescriptionComponent },
];

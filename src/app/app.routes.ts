import { RouterModule, Routes } from '@angular/router';
//principal >>
import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafics1Component } from './pages/grafics1/grafics1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [

    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Grafics1Component },
                //PARA INSTERTAR UNA RUTA VACÍA QUE DIRECCIONE AL DASHBOARD

            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }, 
    {path: 'dashboard', component: DashboardComponent },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'grafics1', component: Grafics1Component},
  
    {path: '**', component: NopagefoundComponent},



];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true})

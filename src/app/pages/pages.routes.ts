import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafics1Component } from './grafics1/grafics1.component';

const PagesRoutes: Routes = [
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
]
export const PAGES_ROUTES = RouterModule.forChild( PagesRoutes);
import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafics1Component } from './grafics1/grafics1.component';
import { PagesComponent } from './pages.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafics1Component
    ],
    //SE USA PARA PERMITIR QUE OTROS MÓDULOS ACCEDAN A ESTOS MODULOS LISTADOS
    exports: [
        DashboardComponent,
        ProgressComponent,
        Grafics1Component
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES

    ]   

})
export class PagesModule {}

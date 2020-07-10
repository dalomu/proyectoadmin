import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from '../nopagefound/nopagefound.component';



@NgModule({
    declarations: [
        SidebarComponent,
        BreadcrumbsComponent,
        HeaderComponent,
        NopagefoundComponent
    ],
    //SE USA PARA PERMITIR QUE OTROS MÓDULOS ACCEDAN A ESTOS MODULOS LISTADOS
    exports: [
        SidebarComponent,
        BreadcrumbsComponent,
        HeaderComponent,
        NopagefoundComponent
    ]
})
export class SharedModule {}
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { SharedModule } from '../shared/shared.module';
//ng2-charts
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from "./pages.component";
import { PAGES_ROUTES } from "./pages.routes";



//temporal 
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { GraficoDonaComponent } from "../components/grafico-dona/grafico-dona.component";
@NgModule({

    declarations:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports:
    [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent
        
    ],
    imports:
    [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule {}
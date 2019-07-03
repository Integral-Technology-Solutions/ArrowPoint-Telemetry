import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C3ChartComponent } from './c3-chart.component';

const routes: Routes = [
    {
        path: '',
        component: C3ChartComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class C3ChartRoutingModule { }

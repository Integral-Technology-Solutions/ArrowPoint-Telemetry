import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';

const routes: Routes = [
    {
        path: '',
        component: ChartsComponent,
        children: [
            { path: 'chart-js', loadChildren: './chart-js/chart-js.module#ChartJsModule' },
            { path: 'c3-chart', loadChildren: './c3-chart/c3-chart.module#C3ChartModule' }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }

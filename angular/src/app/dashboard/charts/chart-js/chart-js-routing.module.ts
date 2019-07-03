import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartJsComponent } from './chart-js.component';

const routes: Routes = [
    {
        path: '',
        component: ChartJsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartJsRoutingModule { }

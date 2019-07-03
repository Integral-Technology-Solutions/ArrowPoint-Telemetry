import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';

const routes: Routes = [
    {
        path: '',
        component: TablesComponent,
        children: [
            { path: 'bootstrap-table', loadChildren: './bootstrap-table/bootstrap-table.module#BootstrapTableModule' },
            { path: 'data-table', loadChildren: './data-table/data-table.module#DataTableModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }

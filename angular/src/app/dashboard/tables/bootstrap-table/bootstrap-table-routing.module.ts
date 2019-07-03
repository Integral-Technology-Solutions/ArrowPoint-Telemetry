import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapTableComponent } from './bootstrap-table.component';

const routes: Routes = [
    { path: '', component: BootstrapTableComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BootstrapTableRoutingModule { }

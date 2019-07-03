import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FleetManagementComponent } from './fleet-management.component';


const routes: Routes = [
    {
        path: '',
        component: FleetManagementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FleetRoutingModule { }

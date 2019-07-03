import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposeComponent } from './compose.component';

const routes: Routes = [
    {
        path: '',
        component: ComposeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComposeRoutingModule { }

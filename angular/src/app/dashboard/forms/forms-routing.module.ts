import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';

const routes: Routes = [
    {
        path: '',
        component: FormsComponent,
        children: [
            { path: 'elements', loadChildren: './form-element/form-element.module#FormElementModule' },
            { path: 'components', loadChildren: './form-component/form-component.module#FormComponentModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormsRoutingModule { }

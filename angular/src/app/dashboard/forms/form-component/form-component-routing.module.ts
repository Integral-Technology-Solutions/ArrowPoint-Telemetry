import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponentComponent as FormComponent } from './form-component.component';

const routes: Routes = [
    {
        path: '',
        component: FormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormComponentRoutingModule { }

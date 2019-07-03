import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormElementComponent } from './form-element.component';

const routes: Routes = [
    {
        path: '',
        component: FormElementComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormElementRoutingModule { }

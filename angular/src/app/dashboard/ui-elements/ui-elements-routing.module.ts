import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiElementsComponent } from './ui-elements.component';

const routes: Routes = [
    {
        path: '',
        component: UiElementsComponent,
        children: [
            { path: 'alert', loadChildren: './alert/alert.module#AlertModule' },
            { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsModule' },
            { path: 'cards', loadChildren: './cards/cards.module#CardsModule' },
            { path: 'dropdown', loadChildren: './dropdown/dropdown.module#DropdownModule' },
            { path: 'icons', loadChildren: './icons/icons.module#IconsModule' },
            { path: 'others', loadChildren: './others/others.module#OthersModule' },
            { path: 'pagination', loadChildren: './pagination/pagination.module#PaginationModule' },
            { path: 'progressbar', loadChildren: './progressbar/progressbar.module#ProgressbarModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UiElementsRoutingModule { }

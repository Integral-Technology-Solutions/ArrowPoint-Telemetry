import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailComponent } from './mail.component';

const routes: Routes = [
    {
        path: '',
        component: MailComponent,
        children: [
            { path: 'compose', loadChildren: './compose/compose.module#ComposeModule' },
            { path: 'inbox', loadChildren: './inbox/inbox.module#InboxModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MailRoutingModule { }

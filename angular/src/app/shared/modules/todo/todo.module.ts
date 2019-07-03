import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { TodoComponent } from './todo.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        PerfectScrollbarModule
    ],
    declarations: [TodoComponent],
    exports: [TodoComponent]
})
export class TodoModule { }

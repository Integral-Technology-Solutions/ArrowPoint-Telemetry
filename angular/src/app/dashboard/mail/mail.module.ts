import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail.component';

@NgModule({
  imports: [
    CommonModule,
    MailRoutingModule
  ],
  declarations: [MailComponent]
})
export class MailModule { }

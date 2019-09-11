import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { SpamComponent } from './spam/spam.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { PageNfComponent } from './page-nf/page-nf.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    SpamComponent,
    DeleteItemComponent,
    PageNfComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    SharedModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

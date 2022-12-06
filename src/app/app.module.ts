import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule, DxFormModule, DxTabPanelModule, DxTextAreaModule, DxValidatorModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoAboutSportsmanComponent } from './info-about-sportsman/info-about-sportsman.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoAboutSportsmanComponent,
    ContactsComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxTabPanelModule,
    DxFormModule,
    DxTextAreaModule,
    DxDataGridModule,
    DxValidatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

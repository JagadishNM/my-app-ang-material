import {  CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomElementsComponent } from './custom-elements/custom-elements.component';
import { PopupService } from './custom-elements/custom-element.service';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { DialogBoxService } from './dialog-box/dialog-box.service';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomElementsComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PopupService,DialogBoxService  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [DialogBoxComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
    ngDoBootstrap(){
      const el = createCustomElement(DialogBoxComponent, { injector: this.injector });
      customElements.define('dialog-box', el);
  }
    
}

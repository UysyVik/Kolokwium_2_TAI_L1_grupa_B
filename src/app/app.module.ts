import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MlDataService} from './lm-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { OrdersLMComponent } from './orders-lm/orders-lm.component';
import { OrdersItemLMComponent } from './orders-item-lm/orders-item-lm.component';
import { OrdersDetailsLmComponent } from './orders-details-lm/orders-details-lm.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersLMComponent,
    OrdersItemLMComponent,
    OrdersDetailsLmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MlDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

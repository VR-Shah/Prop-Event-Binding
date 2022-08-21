import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveComponentComponent } from './active-component/active-component.component';
import { InactiveComponentComponent } from './inactive-component/inactive-component.component';
import { UserserviceService } from './userservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveComponentComponent,
    InactiveComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

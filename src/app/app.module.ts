import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardComponent } from './onboard/onboard.component';
import { VerifyComponent } from './verify/verify.component';
import { RequestaccessComponent } from './requestaccess/requestaccess.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardComponent,
    VerifyComponent,
    RequestaccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

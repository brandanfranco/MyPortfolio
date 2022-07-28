import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './shared/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { interceptorProvider } from './auth/interceptor/info-interceptor.service';

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    AuthRoutingModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

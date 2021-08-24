import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

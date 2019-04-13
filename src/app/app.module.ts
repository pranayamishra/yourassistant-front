import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { OncallComponent } from './services/oncall/oncall.component';
import { PartnerserviceComponent } from './services/partnerservice/partnerservice.component';
import { ImprintComponent } from './imprint/imprint.component';
import { CustomeraccountComponent } from './account/customeraccount/customeraccount.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    DefaultComponent,
    LoginComponent,
    RegistrationComponent,
    OncallComponent,
    PartnerserviceComponent,
    ImprintComponent,
    CustomeraccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

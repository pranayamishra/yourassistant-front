import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { ForeignersofficeComponent } from './services/foreignersoffice/foreignersoffice.component';
import { PublicserviceComponent } from './services/publicservice/publicservice.component';
import { ImprintComponent } from './imprint/imprint.component';
import { CustomeraccountComponent } from './account/customeraccount/customeraccount.component';
import { PersonaldataComponent } from './account/personaldata/personaldata.component';
import { ChangepasswordComponent } from './account/changepassword/changepassword.component';
import { NavbarComponent } from './account/navbar/navbar.component';
import { CentralservicesComponent } from './services/centralservices/centralservices.component';
import { CustomercareconComponent } from './services/customercarecon/customercarecon.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
// tslint:disable-next-line: max-line-length
import { PermanentsettlementpermitComponent } from './services/foreignersoffice/permanentsettlementpermit/permanentsettlementpermit.component';
// tslint:disable-next-line: max-line-length
import { CheckElectronicCardStatusComponent } from './services/foreignersoffice/check-electronic-card-status/check-electronic-card-status.component';
import { TermsComponent } from './terms/terms.component';

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
    ForeignersofficeComponent,
    PublicserviceComponent,
    ImprintComponent,
    CustomeraccountComponent,
    PersonaldataComponent,
    ChangepasswordComponent,
    NavbarComponent,
    CentralservicesComponent,
    CustomercareconComponent,
    SidebarComponent,
    PrivacypolicyComponent,
    PermanentsettlementpermitComponent,
    CheckElectronicCardStatusComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

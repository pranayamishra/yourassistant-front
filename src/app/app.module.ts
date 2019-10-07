import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';
import { AgmCoreModule} from '@agm/core'

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
import { CentralservicesComponent } from './services/centralservices/centralservices.component';
import { CustomercareconComponent } from './services/customercarecon/customercarecon.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
// tslint:disable-next-line: max-line-length
import { PermanentsettlementpermitComponent } from './services/foreignersoffice/permanentsettlementpermit/permanentsettlementpermit.component';
// tslint:disable-next-line: max-line-length
import { CheckElectronicCardStatusComponent } from './services/foreignersoffice/check-electronic-card-status/check-electronic-card-status.component';
import { TermsComponent } from './terms/terms.component';
// tslint:disable-next-line: max-line-length
import { ElectronicResidencePermitComponent } from './services/foreignersoffice/electronic-residence-permit/electronic-residence-permit.component';
import { AppointmentComponent } from './services/foreignersoffice/appointment/appointment.component';
import { ForeignersOfficeSearchComponent } from './services/foreignersoffice/foreigners-office-search/foreigners-office-search.component';
import { AlertComponent } from './alert/alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsComponent } from './general-components/google-maps/google-maps.component';

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
		CentralservicesComponent,
		CustomercareconComponent,
		SidebarComponent,
		PrivacypolicyComponent,
		PermanentsettlementpermitComponent,
		CheckElectronicCardStatusComponent,
		TermsComponent,
		ElectronicResidencePermitComponent,
		AppointmentComponent,
		ForeignersOfficeSearchComponent,
		AlertComponent,
		GoogleMapsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatSliderModule,
		MatExpansionModule,
		BrowserAnimationsModule,
		MatTabsModule,
		MatCardModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyDmLysWukKTnHVSprJc2tMIxce5MOvjt7o'
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

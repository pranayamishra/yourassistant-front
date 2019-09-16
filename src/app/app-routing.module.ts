import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import {DefaultComponent} from './default/default.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ForeignersofficeComponent } from './services/foreignersoffice/foreignersoffice.component';
import { PublicserviceComponent } from './services/publicservice/publicservice.component';
import { CentralservicesComponent } from './services/centralservices/centralservices.component';
import { CustomercareconComponent } from './services/customercarecon/customercarecon.component';
import { ImprintComponent } from './imprint/imprint.component';
import {PrivacypolicyComponent} from './privacypolicy/privacypolicy.component';
import { CustomeraccountComponent } from './account/customeraccount/customeraccount.component';
import { PersonaldataComponent } from './account/personaldata/personaldata.component';
import { ChangepasswordComponent } from './account/changepassword/changepassword.component';
import { AuthGuard } from './auth.guard';
import { from } from 'rxjs';
// tslint:disable-next-line:max-line-length
import { PermanentsettlementpermitComponent } from './services/foreignersoffice/permanentsettlementpermit/permanentsettlementpermit.component';
// tslint:disable-next-line: max-line-length
import { CheckElectronicCardStatusComponent } from './services/foreignersoffice/check-electronic-card-status/check-electronic-card-status.component';
import { TermsComponent } from './terms/terms.component';
// tslint:disable-next-line: max-line-length
import { ElectronicResidencePermitComponent } from './services/foreignersoffice/electronic-residence-permit/electronic-residence-permit.component';
import { AppointmentComponent } from './services/foreignersoffice/appointment/appointment.component';
import { ForeignersOfficeSearchComponent } from './services/foreignersoffice/foreigners-office-search/foreigners-office-search.component';


const routes: Routes = [
     {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'full'
    },
     {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'registration',
        component: RegistrationComponent,
        pathMatch: 'full'
    },
     {
        path: 'imprint',
        component: ImprintComponent,
        pathMatch: 'full'
    }, {
        path: 'privacypolicy',
        component: PrivacypolicyComponent,
        pathMatch: 'full'
    },  {
        path: 'termsandconditions',
        component: TermsComponent,
        pathMatch: 'full'
    },
    // services start
     {
        path: 'services/foreignersoffice',
        component: ForeignersofficeComponent,
        pathMatch: 'full'
    }, {
        path: 'services/foreignersoffice/permanentsettlementpermit',
        component: PermanentsettlementpermitComponent,
        pathMatch: 'full'
    }, {
        path: 'services/foreignersoffice/check-electronic-card-status',
        component: CheckElectronicCardStatusComponent,
        pathMatch: 'full'
	}, {
        path: 'services/foreignersoffice/electronic_residence_permit',
        component: ElectronicResidencePermitComponent,
        pathMatch: 'full'
    }, {
        path: 'services/foreignersoffice/appointment',
        component: AppointmentComponent,
        pathMatch: 'full'
    }, {
        path: 'services/foreignersoffice/search',
        component: ForeignersOfficeSearchComponent,
        pathMatch: 'full'
    },
     {
        path: 'services/publicservice',
        component: PublicserviceComponent,
        pathMatch: 'full'
    }, {
        path: 'services/centralservices',
        component: CentralservicesComponent,
        pathMatch: 'full'
    }, {
        path: 'services/customercarecon',
        component: CustomercareconComponent,
        pathMatch: 'full'
    },
    // my account start
     {
        path: 'account/customeraccount',
        component: CustomeraccountComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
     {
        path: 'account/customeraccount/personaldata',
        component: PersonaldataComponent,
        pathMatch: 'full'
    },
     {
        path: 'account/customeraccount/changepassword',
        component: ChangepasswordComponent,
        pathMatch: 'full'
    },
    // my account end
    // services end
     {
        path: '**',
        component: DefaultComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

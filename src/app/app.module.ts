import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BannerComponent } from './acceuil/banner/banner.component';
import { IllustrationComponent } from './acceuil/illustration/illustration.component';
import { ServiceComponent } from './acceuil/service/service.component';
import { LocalisationComponent } from './acceuil/localisation/localisation.component';
import { FaqComponent } from './acceuil/faq/faq.component';
import { ContactComponent } from './acceuil/contact/contact.component';
import { ListeComponent } from './acceuil/liste/liste.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HopitalComponent } from './hopital/hopital.component';
import { ServicesComponent } from './hopital/services/services.component';
import { ProfilComponent } from './hopital/profil/profil.component';
import { AdminComponent } from './admin/admin.component';
import { ValidatedHospitalComponent } from './admin/validated-hospital/validated-hospital.component';
import { NonValidatedHospitalComponent } from './admin/non-validated-hospital/non-validated-hospital.component';
import { SuspendedHospitalComponent } from './admin/suspended-hospital/suspended-hospital.component';
import { AllServiceComponent } from './admin/all-service/all-service.component';
import { AccountComponent } from './hopital/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcceuilComponent,
    BannerComponent,
    IllustrationComponent,
    ServiceComponent,
    LocalisationComponent,
    FaqComponent,
    ContactComponent,
    ListeComponent,
    HopitalComponent,
    ServicesComponent,
    ProfilComponent,
    AdminComponent,
    ValidatedHospitalComponent,
    NonValidatedHospitalComponent,
    SuspendedHospitalComponent,
    AllServiceComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LeafletModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LeafletModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

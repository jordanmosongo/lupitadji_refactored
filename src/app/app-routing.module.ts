import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './hopital/account/account.component';
import { HopitalComponent } from './hopital/hopital.component';
import { ProfilComponent } from './hopital/profil/profil.component';
import { ServicesComponent } from './hopital/services/services.component';

const routes: Routes = [
  {path: '', component: AcceuilComponent},
  {path: 'hopital', component: HopitalComponent, children : [
    {path : '', component: ProfilComponent},
    {path: 'profil', component: ProfilComponent},
    {path: 'services', component:ServicesComponent},
    {path: 'account-news', component : AccountComponent}
  ]},
  {path : 'admin', component : AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

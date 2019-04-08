import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './content/layout/menu/menu.component';
import { AdicionarPessoaComponent } from './content/pages/adicionar-pessoa/adicionar-pessoa.component';
import { CardComponent } from './content/layout/card/card.component';
import { DashboardComponent } from './content/pages/dashboard.component';
import { FormCheckInComponent } from './content/pages/form-check-in/form-check-in.component';
import { TableConsultasComponent } from './content/pages/table-consultas/table-consultas.component';
import { HttpModule } from '@angular/http';
import { JsonService } from './core/service/json.service';
import { Globals } from './core/globals';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdicionarPessoaComponent,
    CardComponent,
    DashboardComponent,
    FormCheckInComponent,
    TableConsultasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,		
    HttpModule,
    FormsModule, 
    ReactiveFormsModule

  ],
  providers: [
    JsonService,
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

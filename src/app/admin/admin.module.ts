import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { CentroCiudadanoComponent } from './centro-ciudadano/centro-ciudadano.component';
import { TipoAtencionComponent } from './tipo-atencion/tipo-atencion.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { UsuarioComponent } from './usuario/usuario.component';
import { CiudadanoComponent } from './ciudadano/ciudadano.component';
import { AlertasComponent } from './alertas/alertas.component';
import { AlertaDerivadaComponent } from './alerta-derivada/alerta-derivada.component';
import { TipoAlertaComponent } from './tipo-alerta/tipo-alerta.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    AdminComponent,
    CentroCiudadanoComponent,
    TipoAtencionComponent,
    UsuarioComponent,
    CiudadanoComponent,
    AlertasComponent,
    AlertaDerivadaComponent,
    TipoAlertaComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    AdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ]
})
export class AdminModule { }

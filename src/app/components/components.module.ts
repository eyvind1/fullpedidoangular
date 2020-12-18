import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarruselComponent } from './carrusel/carrusel.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresaComponent } from './empresa/empresa.component';



/* import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment'; */

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarruselComponent,
    EmpresasComponent,
    EmpresaComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarruselComponent,
    EmpresasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    // AngularFireModule.initializeApp(environment.firebase)
  ]
})
export class ComponentsModule { }

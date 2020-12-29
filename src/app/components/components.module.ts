import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { PromocionesComponent } from './promociones/promociones.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectFilterModule } from 'mat-select-filter';
/* import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment'; */

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarruselComponent,
    EmpresasComponent,
    EmpresaComponent,
    PromocionesComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarruselComponent,
    EmpresasComponent,
    PromocionesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSelectFilterModule,
    FormsModule,
    // AngularFireModule.initializeApp(environment.firebase)
  ]
})
export class ComponentsModule { }

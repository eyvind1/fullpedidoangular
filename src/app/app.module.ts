import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';

import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './pages/about/about.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartamentosService } from './services/departamentos.service';
import { NoImagePipe } from './pipes/no-image.pipe';


//import { FilterDistritosPipe } from './pipes/filter-distritos.pipe';
//import { FilterProvinciasPipe } from './pipes/filter-provincias.pipe';
//import { FilterComboBoxPipe } from './pipes/filter-combo-box.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NoImagePipe,
    //SortEmpresasPipe,
    //FilterDistritosPipe,
    //FilterProvinciasPipe,
    //FilterComboBoxPipe,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    
    
  ],
  providers: [
    DepartamentosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

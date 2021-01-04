import { Component, OnInit } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSelectModule } from '@angular/material/select';
import { DepartamentosService } from '../../services/departamentos.service';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { DistritosService } from 'src/app/services/distritos.service';
import { DepartamentosModel } from '../../models/departamento';
import { ProvinciasModel } from '../../models/provincia';
import { DistritosModel } from '../../models/distrito';
//import { FilterComboBoxPipe } from '../../pipes/filter-combo-box.pipe';

import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  departamentos: DepartamentosModel[]=[];
  provincias: ProvinciasModel[]=[];
  distritos: DistritosModel[]=[];

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    public config: NgbRatingConfig,
    private _departamentosService:DepartamentosService,
    private _provinciasService: ProvinciasService,
    private _distritoService: DistritosService,
  ) {
    //config.max = 5.0;
    //config.readonly = true;
   }
  nombre: any;
  departamentoselected :any;
  provinciaselected: any;
  distritoselected: any;
  provinciafiltered:any=[];
  distritofiltered: any=[];
  collection= {count:0, data:[]  };
  productos : any=[];
  selected = 'option2';
  filterPost = '';
  ngOnInit(): void {
    this.departamentos = this._departamentosService.getDepartamentos();
    this.provincias = this._provinciasService.getProvincias();
    this.distritos = this._distritoService.getDistritos();

    this.firebaseService.getEmpresas().subscribe(resp=>{
      this.collection.data = resp.map((e:any)=>{
        //this.productos=resp;
      
        return {
          razon_social: e.payload.doc.data().emp_crass,
          nombre_comercial: e.payload.doc.data().emp_cncomer,
          calificacion: e.payload.doc.data().emp_ncalif, 
          telefono: e.payload.doc.data().emp_ctelef,
          logo: e.payload.doc.data().emp_clogo,
          categoria: e.payload.doc.data().emp_cate,
          descripcion:  e.payload.doc.data().aeco_cdesc,
          departamento: e.payload.doc.data().emp_cdepa,
          provincia: e.payload.doc.data().emp_cprov,
          distrito: e.payload.doc.data().emp_cdist
        } 
      })
    },
    error=>{
      console.error(error)
    }
    );
    
    /* this.firebaseService.getEmpresas().subscribe(resp=>{
      this.collection.data = resp.map((e:any)=>{
        console.log(resp);
        this.productos=resp; */
        /* return {
          ruc: e.payload.doc.data().emp_cruc,
          departamento: e.payload.doc.data().emp_cdepa, */
          /*telefono: e.payload.doc.data().emp_ctelef,
          emp_aprod: e.payload.doc.data().emp_aprod,
        } */
     /*  })
    },
    error=>{
      console.error(error)
    }
    ); */
    
    
  }

  verEmpresa(idx:number){
    this.router.navigate(['/empresa',idx]);
  }

  /* verificarProductos(ver:any){
    for (let index = 0; index < ver.length; index++) {
      if (ver[index].emp_aprod == undefined) {
        ver[index] = "no existe";
      }
      
    }
  } */

  filtrarProvincias(){
    this.provinciafiltered = this.provincias.filter((data:any)=>(data.id_departamento == this.departamentoselected));
    //console.log(this.provinciafiltered);
  }

  filtrarDistritos(){
    this.distritofiltered = this.distritos.filter((data:any)=>(data.id_provincia == this.provinciaselected));
  }

}

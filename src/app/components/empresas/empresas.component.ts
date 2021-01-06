import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
import { CategoriasModel } from 'src/app/models/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  @Input() empresas:any[];
  @Output() sendcategoriaselected: EventEmitter <any>;
  departamentos: DepartamentosModel[]=[];
  provincias: ProvinciasModel[]=[];
  distritos: DistritosModel[]=[];
  categorias: CategoriasModel[]=[];
  constructor(
    private router: Router,
    public config: NgbRatingConfig,
    private _departamentosService:DepartamentosService,
    private _provinciasService: ProvinciasService,
    private _distritoService: DistritosService,
    private _firebaseServiceEmpresas: FirebaseService,
    private firebaseService: FirebaseService,
    private _categoriaService: CategoriasService,
  ) {
      this.sendcategoriaselected = new EventEmitter();
    //config.max = 5.0;
    //config.readonly = true;
   }
 
  nombre: any;
  departamentoselected :any;
  provinciaselected: any;
  distritoselected: any;
  categoriaselected:any ;
  nameDepartamento: string;
  nameProvincia: string;
  nameDistrito: string;
  provinciafiltered:any=[];
  distritofiltered: any=[];
  nameDepartamentofiltered:any=[];
  nameProvinciafiltered:any=[];
  nameDistritofiltered:any=[];
  codigoCategoriafiltered: any=[];
  codigoCategoriafiltered2: any=[];
  productos : any=[];
  collection : any= [];
  ngOnInit(): void {
    

    this.departamentos = this._departamentosService.getDepartamentos();
    this.provincias = this._provinciasService.getProvincias();
    this.distritos = this._distritoService.getDistritos();
    this.categorias = this._categoriaService.getCategorias();
    this.firebaseService.getEmpresas().subscribe(resp=>{
    this.collection = resp.map((e:any)=>{
       
      //console.log(resp);
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
          distrito: e.payload.doc.data().emp_cdist,
          productos: e.payload.doc.data().emp_aprod ,
          idFirebase: e.payload.doc.id,
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



  verEmpresa(idx:any){
    //console.log(idx);
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
    this.nameDepartamentofiltered = this.departamentos.filter((data:any)=>(data.id_departamento == this.departamentoselected));
    this.nameDepartamento = this.nameDepartamentofiltered[0].nombre_departamento;
  }

  filtrarDistritos(){
    this.distritofiltered = this.distritos.filter((data:any)=>(data.id_provincia == this.provinciaselected));
    this.nameProvinciafiltered = this.provincias.filter((data:any)=>(data.id_provincia == this.provinciaselected));
    this.nameProvincia = this.nameProvinciafiltered[0].nombre_provincia;
  }

  filtrarEmpresasDistritos(){
    this.nameDistritofiltered = this.distritos.filter((data:any)=>(data.id_distrito == this.distritoselected));
    this.nameDistrito = this.nameDistritofiltered[0].nombre_distrito;
  }
  filtrarCategorias(){
    this.sendcategoriaselected.emit(this.categoriaselected);
    //this.codigoCategoriafiltered = this.collection.filter((data:any)=>(data.categoria != undefined));
  
    //this.codigoCategoriafiltered = this.codigoCategoriafiltered.filter((data:any)=>(data.categoria.cat_ncod == this.categoriaselected)); */
    /* this.collection = this.codigoCategoriafiltered.filter((data:any)=>(data.categoria.cat_ncod == this.categoriaselected));
    console.log(this.collection); */
  
  }
  //getNamefromId(id:number):string{
    //this.namefiltered = this.departamentos.filter((data:any)=>(data.id_departamento == id));
    //1this.nameDepartamento = this.namefiltered[0].nombre_departamento;
    //return this.nameDepartamento;
  //}
  

}

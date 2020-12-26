import { Component, OnInit } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    public config: NgbRatingConfig,
  ) {
    config.max = 5;
    config.readonly = true;
   }

  collection= {count:0, data:[]  };
  productos : any=[];
  
  ngOnInit(): void {


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
          descripcion:  e.payload.doc.data().aeco_cdesc
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

}

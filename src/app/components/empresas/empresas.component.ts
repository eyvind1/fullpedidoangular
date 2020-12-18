import { Component, OnInit } from '@angular/core';

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
    private router: Router
  ) { }

  collection= {count:0, data:[]  };
  productos : Array<string>;
  ngOnInit(): void {


    this.firebaseService.getEmpresas().subscribe(resp=>{
      this.collection.data = resp.map((e:any)=>{
        return {
          ruc: e.payload.doc.data().emp_cruc,
          departamento: e.payload.doc.data().emp_cdepa,
          // telefono: e.payload.doc.data().emp_ctelef,
          emp_aprod: e.payload.doc.data().emp_aprod,
        }
      })
    },
    error=>{
      console.error(error)
    }
    );
    
    
    
  }

  verEmpresa(idx:number){
    this.router.navigate(['/empresa',idx]);
  }

}

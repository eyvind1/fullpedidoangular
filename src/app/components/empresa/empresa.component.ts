import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FirebaseService } from '../../services/firebase.service';
import { EmpresasModel } from '../../models/empresas';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  empresa: any = [];
  //public empresas = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private firebaseService: FirebaseService,
  ) {
    this.activatedRoute.params.subscribe(params=>{
      //console.log(params['id']);
      /* this.firebaseService.getArrayEmpresas().subscribe(resp=>{
        this.empresas = resp[params['id']];   
      } */
      this.getProductos(params['id']);
    
      
    });
   }

  ngOnInit(): void {    
  }

  getProductos(id:any){
   this.firebaseService.getEmpresa(id).subscribe(resp=>{
      //console.log(resp.data());
      this.empresa = resp.data();
    });  
    
  }

  

}

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

  empresas: any = [];
  //public empresas = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private firebaseService: FirebaseService,
  ) {
    this.activatedRoute.params.subscribe(params=>{
      //console.log(params['id']);
      this.firebaseService.getArrayEmpresas().subscribe(resp=>{
        this.empresas = resp[params['id']];   
        //console.log(this.empresas);
      }

      );
      
    });
   }

  

  ngOnInit(): void {    
  }

  getnombre(){
    console.log(this.empresas);
  }

  

}

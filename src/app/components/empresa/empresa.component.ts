import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  public empresas = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private firebaseService: FirebaseService,
  ) {
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['id']);
      

    })
   }

  
  collection= {count:0, data:[]  };
  ngOnInit(): void {

    

    this.firebaseService.getEmpresas().subscribe(resp=>{
     /*  this.nombres=[]
      resp.forEach((e:any) =>{
        this.nombres.push({
          nombre_comercial: e.payload.doc.data().emp_cncomer,
        });
      console.log(this.nombres);
      }); */
      
        
        
        
    },
    error=>{
      console.error(error)
    }
    ); 
    
  }

  

}

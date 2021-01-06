import { Component, OnInit } from '@angular/core';
import { CategoriasModel } from 'src/app/models/categoria';



import { FirebaseService } from 'src/app/services/firebase.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public promociones: any=[];
  public empresas: any=[];
  public categoriaselected:any;
  fecha_actual : any;
  constructor(
    private _firebaseServicePromociones: FirebaseService,
    private _firebaseServiceEmpresas: FirebaseService,
   

  ) { 
    this.fecha_actual = Date.now();
  }

  ngOnInit(): void {
    this._firebaseServicePromociones.getArrayPromociones().subscribe(resp=>{
      this.promociones=resp;
      this.promociones = this.promociones.filter((data:any)=>(data.prom_dfecha_caducidad.toMillis() >= this.fecha_actual));
      //console.log(this.promociones);
      },
      error=>{
        console.error(error)
      }
    );

    this._firebaseServiceEmpresas.getArrayEmpresas().subscribe(resp=>{
      this.empresas=resp;
      //console.log(this.empresas);
      },
      error=>{
        console.error(error)
      }
    );
    
  
  }
  
  changeCategoria(categoria:any)
  {
    this.categoriaselected = categoria;
  }
}

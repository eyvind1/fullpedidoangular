import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSelectFilterModule } from 'mat-select-filter';
import { CategoriasModel } from '../../models/categoria';
import { DepartamentosModel } from '../../models/departamento';
import { ProvinciasModel } from '../../models/provincia';
import { DistritosModel } from '../../models/distrito';

import { CategoriasService } from 'src/app/services/categorias.service';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit, OnChanges {

  @Input() promociones:any[];
  promocionesfiltered:any[];
  //public filteredListcategoria = this.categoriaList.slice();
  
  //public filteredListdepartamento = this.departamentoList.slice();
  //public filteredListprovincia = this.provinciaList.slice();
  //public filteredListdistrito = this.distritoList.slice();
  categorias: CategoriasModel[]=[];
  departamentos: DepartamentosModel[]=[];
  provincias: ProvinciasModel[]=[];
  distritos: DistritosModel[]=[];
  constructor(
    
    //private _categoriaService: CategoriasService,
    private _firebaseService: FirebaseService,
  ) { }
  ngOnChanges(): void {
    this.promociones = this.promociones.filter((data:any)=>(data.prom_aubigeo.find((e:any)=>(e.ubi_cubigeo === "000000"))));
    
  }
  categoriaselected :string;
  departamentoselected :any;
  provinciaselected: any;
  distritoselected: any;
  provinciafiltered:any=[];
  distritofiltered: any=[];
  promociones_img: any=[];
  ngOnInit(): void {
    
    //this.categorias = this._categoriaService.getCategorias();

    /* this._firebaseService.getArrayPromociones().subscribe(resp=>{
      this.promociones=resp;
      this.promociones_img = this.promociones.filter((data:any)=>(data.prom_aubigeo.find((e:any)=>(e.ubi_cubigeo === "000000"))));
      
      },
      error=>{
        console.error(error)
      }
    ); */
    
    
    
  }
  
  

  filtrarImagenes(depart:string){
    this.promociones_img = this.promociones.filter((data:any)=>(data.prom_aubigeo.find((e:any)=>(e.ubi_cdepart === depart ))));
    console.log(this.promociones_img);
  }
}

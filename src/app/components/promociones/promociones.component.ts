import { Component, OnInit } from '@angular/core';
import { MatSelectFilterModule } from 'mat-select-filter';
import { CategoriasModel } from '../../models/categoria';
import { DepartamentosModel } from '../../models/departamento';
import { ProvinciasModel } from '../../models/provincia';
import { DistritosModel } from '../../models/distrito';
import { DepartamentosService } from '../../services/departamentos.service';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { DistritosService } from 'src/app/services/distritos.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  //public filteredListcategoria = this.categoriaList.slice();
  
  //public filteredListdepartamento = this.departamentoList.slice();
  //public filteredListprovincia = this.provinciaList.slice();
  //public filteredListdistrito = this.distritoList.slice();
  categorias: CategoriasModel[]=[];
  departamentos: DepartamentosModel[]=[];
  provincias: ProvinciasModel[]=[];
  distritos: DistritosModel[]=[];
  constructor(
    private _departamentosService:DepartamentosService,
    private _provinciasService: ProvinciasService,
    private _distritoService: DistritosService,
    private _categoriaService: CategoriasService,
    private _firebaseService: FirebaseService,
  ) { }
  categoriaselected :string;
  departamentoselected :any;
  provinciaselected: any;
  distritoselected: any;
  provinciafiltered:any=[];
  distritofiltered: any=[];
  promociones: any=[];
  promociones_img: any=[];
  ngOnInit(): void {
    this.departamentos = this._departamentosService.getDepartamentos();
    this.provincias = this._provinciasService.getProvincias();
    this.distritos = this._distritoService.getDistritos();
    this.categorias = this._categoriaService.getCategorias();

    this._firebaseService.getArrayPromociones().subscribe(resp=>{
      this.promociones=resp;
      this.promociones_img = this.promociones.filter((data:any)=>(data.prom_aubigeo.find((e:any)=>(e.ubi_cubigeo === "000000"))));
      //console.log(this.promociones_img);
      },
      error=>{
        console.error(error)
      }
    );
  }

  filtrarProvincias(){
    this.provinciafiltered = this.provincias.filter((data:any)=>(data.id_departamento == this.departamentoselected));
    console.log(this.provinciafiltered);
  }

  filtrarDistritos(){
    this.distritofiltered = this.distritos.filter((data:any)=>(data.id_provincia == this.provinciaselected));
  }

  filtrarImagenes(depart:string){
    this.promociones_img = this.promociones.filter((data:any)=>(data.prom_aubigeo.find((e:any)=>(e.ubi_cdepart === depart ))));
    console.log(this.promociones_img);
  }
}

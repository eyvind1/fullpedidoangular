import { Component, OnInit } from '@angular/core';
import { CategoriasModel } from 'src/app/models/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categorias: CategoriasModel[]=[];
  categoriaselected: string;
  constructor(
    private _categoriaService: CategoriasService,
  ) { }

  ngOnInit(): void {
    this.categorias= this._categoriaService.getCategorias();
  }

  buscarHeroe(termino:string){
    console.log(termino)
  }
}

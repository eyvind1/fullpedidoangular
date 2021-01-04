import { Injectable } from '@angular/core';
import { CategoriasModel } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private categoriaList : CategoriasModel[] = [
    {cat_cdes:"FERRETERIAS, PINTURAS Y ADITIVOS" , cat_ncod : 1},
    {cat_cdes:"Licorerías" , cat_ncod : 2},
    {cat_cdes:"Librerías" , cat_ncod : 3},
    {cat_cdes:"Útiles Escolares" , cat_ncod : 4},
    {cat_cdes:"Boticas" , cat_ncod : 5},
    {cat_cdes:"Tiendas" , cat_ncod : 6},
    
  ];

  constructor() { }
  getCategorias(){
    return this.categoriaList;
  }
}

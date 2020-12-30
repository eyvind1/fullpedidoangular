import { Injectable } from '@angular/core';
import { CategoriasModel } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private categoriaList : CategoriasModel[] = [
    {cat_cdes:"FERRETERIAS, PINTURAS Y ADITIVOS" , cat_ncod : 1},
    {cat_cdes:"a" , cat_ncod : 2},
    {cat_cdes:"b" , cat_ncod : 3},
    {cat_cdes:"c" , cat_ncod : 4},
    {cat_cdes:"d" , cat_ncod : 5},
    {cat_cdes:"e" , cat_ncod : 6},
    {cat_cdes:"f" , cat_ncod : 7},
    {cat_cdes:"g" , cat_ncod : 8},
    {cat_cdes:"h" , cat_ncod : 9},
  ];

  constructor() { }
  getCategorias(){
    return this.categoriaList;
  }
}

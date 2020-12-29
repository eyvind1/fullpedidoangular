import { Component, OnInit } from '@angular/core';
import { MatSelectFilterModule } from 'mat-select-filter';
import { CategoriasModel } from '../../models/categoria';
@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  public categoriaList : CategoriasModel[] = [
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
  public variables2 = [{ id: 0, name: 'One' }, { id: 1, name: 'Two' }];
  public filteredList1 = this.categoriaList.slice();
  public filteredList5 = this.variables2.slice();
  constructor() { }
  selected :string;
  
  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }
  @Input() producto:any={};
  
  ngOnInit(): void {
    //console.log(this.producto);
  }

}

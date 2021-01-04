import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public promociones: any=[];
  fecha_actual : any;
  constructor(
    private _firebaseService: FirebaseService,
  ) { 
    this.fecha_actual = Date.now();
  }

  ngOnInit(): void {
    this._firebaseService.getArrayPromociones().subscribe(resp=>{
      
      this.promociones=resp; 
      this.promociones = this.promociones.filter((data:any)=>(data.prom_dfecha_caducidad.toMillis() >= this.fecha_actual));
      //console.log(this.promociones);
      
      
      },
      error=>{
        console.error(error)
      }
    );
  
  }
  

}

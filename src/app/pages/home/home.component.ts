import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public promociones: any=[];

  constructor(
    private _firebaseService: FirebaseService,
  ) { }

  ngOnInit(): void {
    this._firebaseService.getArrayPromociones().subscribe(resp=>{
      
      //console.log(resp);
      this.promociones=resp; 
      
      console.log(this.promociones);
      //this.promociones_img = this.promociones.filter((data:any)=>(data.prom_dfecha_caducidad.toMillis() <= this.fecha_actual));
      //console.log(this.promociones_img);
      
      //this.promociones_img=this.promociones;
      
      },
      error=>{
        console.error(error)
      }
    );
  
  }
  

}

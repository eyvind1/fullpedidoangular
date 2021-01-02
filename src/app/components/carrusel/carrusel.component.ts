import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  fecha_actual : any;
  constructor(
    private firebaseService: FirebaseService,
  ) { 
    this.fecha_actual = Date.now();
  }
  promociones : any=[];
  promociones_img : any=[];
  async ngOnInit() {
    
    this.firebaseService.getArrayPromociones().subscribe(resp=>{
      
        //console.log(resp);
        this.promociones=resp; 
        for (let index = 0; index < this.promociones.length; index++) {
          this.promociones_img[index] = this.promociones[index].prom_tipo.tipo_cimagen;
          
        }
        //console.log(this.promociones);
        //this.promociones_img = this.promociones.filter((data:any)=>(data.prom_dfecha_caducidad.toMillis() <= this.fecha_actual));
        console.log(this.promociones_img);
        
        //this.promociones_img=this.promociones;
        
    },
    error=>{
      console.error(error)
    }
    );
    
    
  }

 
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}

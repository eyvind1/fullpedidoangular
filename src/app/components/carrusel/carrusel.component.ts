import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  constructor(
    private firebaseService: FirebaseService,
  ) { }
  promociones : any=[];
  ngOnInit(): void {
    this.firebaseService.getPromociones().subscribe(resp=>{
      this.promociones = resp.map((e:any)=>{
        //console.log(resp);
        //this.promociones=resp; 
        return {
          img_promocion: e.payload.doc.data().prom_tipo,

        } 
        
       })
    },
    error=>{
      console.error(error)
    }
    );
  }
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}

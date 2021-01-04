import { Component, OnInit,Input, AfterViewInit } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasModel } from 'src/app/models/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Swiper } from 'swiper';
import { FirebaseService } from '../../services/firebase.service';
import { Autoplay } from 'swiper';
Swiper.use([Autoplay]);

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit, AfterViewInit {
  
  @Input() promociones:any[];
  fecha_actual : any;
  //@Input() categoria:any={};
  public mySwiper: Swiper;

  constructor(
    
    private firebaseService: FirebaseService,
  ) { 
    this.fecha_actual = Date.now();
    
  }
  ngOnInit(): void {
    
    //throw new Error('Method not implemented.');
    /* this.firebaseService.getArrayPromociones().subscribe(resp=>{
        this.promociones=resp; 
        for (let index = 0; index < this.promociones.length; index++) {
          this.promociones_img[index] = this.promociones[index].prom_tipo.tipo_cimagen;
          this.loading = false;
        } */
        //console.log(this.promociones);
        //this.promociones_img = this.promociones.filter((data:any)=>(data.prom_dfecha_caducidad.toMillis() <= this.fecha_actual));
        //console.log(this.promociones_img);
        
        //this.promociones_img=this.promociones;
        
    /* },
    error=>{
      console.error(error)
    }
    ); */
  }
  //promociones : any=[];
  promociones_img : any=[];
  ngAfterViewInit():void {
    
   
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      slidesPerView:2,
      loop: true,
      autoplay: {
        delay: 2000
      },
  
    });
 
    
  }
  onAutoplay()
  {
    this.mySwiper.autoplay.start();
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }
}

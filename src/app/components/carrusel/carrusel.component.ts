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
  public mySwiper: Swiper;

  constructor() {  }
  ngOnInit(): void {
    
    
  }
 
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
 
  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }
}

import { Component, OnInit,Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
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
export class CarruselComponent implements OnInit, AfterViewInit,OnChanges{
  
  @Input() promociones:any[];
  @Input() categoriaselected:any =1 ;
  public mySwiper: Swiper;

  constructor() {  }
  ngOnChanges(changes: SimpleChanges): void {
    /* this.promociones_img= this.promociones.filter((data:any)=>(data.emp_cat == this.categoriaselected));
    console.log(this.promociones_img);
    console.log(this.categoriaselected); */
  }
  
  
  ngOnInit(): void {
    
  }
 
  promociones_img : any=[];
  idcategoria:any;
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

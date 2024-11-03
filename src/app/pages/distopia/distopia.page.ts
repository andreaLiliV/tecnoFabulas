import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distopia',
  templateUrl: './distopia.page.html',
  styleUrls: ['./distopia.page.scss'],
})
export class DistopiaPage implements OnInit {

  //Listado libros Cyberpunk
  libros = [
    {
      titulo: 'Farenheit 451',
      autor: 'William Gibson',
      anio: 1984,
      portada: 'assets/img/libros/fahrenheit.jpg'
    },
    {
      titulo: '1984',
      autor: 'Philip K. Dick',
      anio: 1984,
      portada: 'assets/img/libros/orwell.jpg'
    },
    {
      titulo: 'Soy leyenda',
      autor: 'Richard Morgas',
      anio: 1984,
      portada: 'assets/img/libros/leyenda.jpg'
    },    
    

  ];

  constructor() { }

  ngOnInit() {
  }

}

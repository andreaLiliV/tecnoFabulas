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
      autor: 'Ray Bradbury',
      anio: 1953,
      portada: 'assets/img/libros/fahrenheit.jpg'
    },
    {
      titulo: '1984',
      autor: 'George Orwell',
      anio: 1949,
      portada: 'assets/img/libros/orwell.jpg'
    },
    {
      titulo: 'Soy leyenda',
      autor: 'Richard Matheson',
      anio: 1954,
      portada: 'assets/img/libros/leyenda.jpg'
    },    
    

  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {

  //Listado libros Cyberpunk
  libros = [
    {
      titulo: 'Más allá del abismo',
      autor: 'William Gibson',
      anio: 1984,
      portada: 'assets/img/libros/abismo.jpg'
    },
    {
      titulo: 'La máquina del tiempo',
      autor: 'Philip K. Dick',
      anio: 1984,
      portada: 'assets/img/libros/maquina_tiempo.jpg'
    },
    {
      titulo: 'Gnosis',
      autor: 'Richard Morgas',
      anio: 1984,
      portada: 'assets/img/libros/gnosis.jpg'
    },  
    {
      titulo: 'El final de una eternidad',
      autor: 'Richard Morgas',
      anio: 1984,
      portada: 'assets/img/libros/eternidad.jpg'
    },
    {
      titulo: 'Diario de estrellas',
      autor: 'Richard Morgas',
      anio: 1984,
      portada: 'assets/img/libros/diario_estrellas.jpg'
    },
    

  ];


  constructor() { }

  ngOnInit() {
  }

}

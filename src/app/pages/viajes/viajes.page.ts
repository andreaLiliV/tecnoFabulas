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
      autor: 'Gustavo García',
      anio: 2022,
      portada: 'assets/img/libros/abismo.jpg'
    },
    {
      titulo: 'La máquina del tiempo',
      autor: 'H. G. Wells',
      anio: 1895,
      portada: 'assets/img/libros/maquina_tiempo.jpg'
    },
    {
      titulo: 'Gnosis',
      autor: 'Andrea Nieto',
      anio: 2022,
      portada: 'assets/img/libros/gnosis.jpg'
    },  
    {
      titulo: 'El fin de una eternidad',
      autor: 'Isaac Asimov',
      anio: 1955,
      portada: 'assets/img/libros/eternidad.jpg'
    },
    {
      titulo: 'Diario de estrellas',
      autor: 'Stanislaw Lem',
      anio: 1957,
      portada: 'assets/img/libros/diario_estrellas.jpg'
    },
    

  ];


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steampunk',
  templateUrl: './steampunk.page.html',
  styleUrls: ['./steampunk.page.scss'],
})
export class SteampunkPage implements OnInit {

  //Listado libros Steampunk
  libros = [
    {
      titulo: 'Maquinas Mortales',
      autor: 'Philip reeve',
      anio: 1984,
      portada: 'assets/img/libros/maquinas_mortales.jpg'
    },
    {
      titulo: 'Las puertas de anubis',
      autor: 'Philip K. Dick',
      anio: 1984,
      portada: 'assets/img/libros/anubis.jpg'
    },
    {
      titulo: 'Leviathan',
      autor: 'Richard Morgas',
      anio: 1984,
      portada: 'assets/img/libros/carbono_modificado.jpg'
    },
    {
      titulo: 'maquina_tiempo',
      autor: 'Neal Stepherson',
      anio: 1984,
      portada: 'assets/img/libros/snowcrash.jpg'
    },   

  ];


  constructor() { }

  ngOnInit() {
  }

}

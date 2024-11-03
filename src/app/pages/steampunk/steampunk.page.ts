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
      anio: 2001,
      portada: 'assets/img/libros/maquinas_mortales.jpg'
    },
    {
      titulo: 'Las puertas de anubis',
      autor: 'Tim Powers',
      anio: 1983,
      portada: 'assets/img/libros/anubis.jpg'
    },
    {
      titulo: 'Leviathan',
      autor: 'Scoth Westerfeld',
      anio: 2012,
      portada: 'assets/img/libros/carbono_modificado.jpg'
    },
    {
      titulo: 'La máquina del tiempo',
      autor: 'H. G. Wells',
      anio: 1895,
      portada: 'assets/img/libros/snowcrash.jpg'
    },   

  ];


  constructor() { }

  ngOnInit() {
  }

}

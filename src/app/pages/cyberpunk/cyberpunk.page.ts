import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyberpunk',
  templateUrl: './cyberpunk.page.html',
  styleUrls: ['./cyberpunk.page.scss'],
})
export class CyberpunkPage implements OnInit {

  //Listado libros Cyberpunk
  libros = [
    {
      titulo: 'Neuromancer',
      autor: 'William Gibson',
      anio: 1984,
      portada: 'assets/img/libros/neuromancer.jpg'
    },
    {
      titulo: 'Sueñan los androides con ovejas eléctricas',
      autor: 'Philip K. Dick',
      anio: 1968,
      portada: 'assets/img/libros/ovejas_electricas.jpg'
    },
    {
      titulo: 'Carbono modificado',
      autor: 'Richard Morgas',
      anio: 2002,
      portada: 'assets/img/libros/carbono_modificado.jpg'
    },
    {
      titulo: 'Snow Crash',
      autor: 'Neal Stepherson',
      anio: 1992,
      portada: 'assets/img/libros/snowcrash.jpg'
    },
    {
      titulo: 'Proyecto Karón',
      autor: 'Ana B. Nieto',
      anio: 2023,
      portada: 'assets/img/libros/proyecto_karon.jpg'
    },
    

  ];



  constructor() { }

  ngOnInit() {
  }

}

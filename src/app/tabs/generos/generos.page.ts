import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.page.html',
  styleUrls: ['./generos.page.scss'],
})
export class GenerosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Método iniciarSesion()
listarCyberpunk(){

  //Sólo a modo de prueba  
  let navigationExtras: NavigationExtras = {
    state:{
      
    }
  }
  this.router.navigate(['/cyberpunk'], navigationExtras);
}

//Método iniciarSesion()
listarSteampunk(){

  //Sólo a modo de prueba  
  let navigationExtras: NavigationExtras = {
    state:{
      
    }
  }
  this.router.navigate(['/steampunk'], navigationExtras);
}

//Método iniciarSesion()
listarDistopia(){

  //Sólo a modo de prueba  
  let navigationExtras: NavigationExtras = {
    state:{
      
    }
  }
  this.router.navigate(['/distopia'], navigationExtras);
}

//Método iniciarSesion()
listarViajes(){

  //Sólo a modo de prueba  
  let navigationExtras: NavigationExtras = {
    state:{
      
    }
  }
  this.router.navigate(['/viajes'], navigationExtras);
}

}

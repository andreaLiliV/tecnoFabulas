import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-cerrar-sesion',
  standalone: true,
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.scss'],
})
export class CerrarSesionComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  regresar(){

    //localStorage.removeItem('usuario');

    let navigationExtras: NavigationExtras = {
      state:{
        
      }
    }
    this.router.navigate(['/login'], navigationExtras);

}  

}

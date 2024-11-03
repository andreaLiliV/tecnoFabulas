import { Component, OnInit, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-boton-retroceso',
  standalone: true,
  templateUrl: './boton-retroceso.component.html',
  styleUrls: ['./boton-retroceso.component.scss'],
})
export class BotonRetrocesoComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

regresar(){

    let navigationExtras: NavigationExtras = {
      state:{
        
      }
    }
    this.router.navigate(['/tabs'], navigationExtras);

}  

}

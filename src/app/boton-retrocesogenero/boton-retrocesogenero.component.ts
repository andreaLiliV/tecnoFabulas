import { Component, OnInit, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-boton-retrocesogenero',
  standalone: true,
  templateUrl: './boton-retrocesogenero.component.html',
  styleUrls: ['./boton-retrocesogenero.component.scss'],
})
export class BotonRetrocesogeneroComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  regresar(){

    let navigationExtras: NavigationExtras = {
      state:{
        
      }
    }
    this.router.navigate(['/tabs/generos'], navigationExtras);

}  

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuarioRecibido: string ="";
  

  constructor(private activerouter: ActivatedRoute, private router: Router) { 

    this.activerouter.queryParams.subscribe(params =>{

      if(this.router.getCurrentNavigation()?.extras?.state){
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
      }

    })

  }

  ngOnInit() {
  }

}

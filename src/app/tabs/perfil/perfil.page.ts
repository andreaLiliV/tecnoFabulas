import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DBTaskService } from '../../dbtask.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuarioRecibido!: boolean;
  usuario: string = '';
  usuarioAdministrador: string = '';
  password: string = '';
  //id_usuario: String = '';
  id_usuario!: number;

 
  
  

  constructor(private activerouter: ActivatedRoute, private router: Router, private dbtask: DBTaskService) { 

   this.activerouter.queryParams.subscribe(params =>{

      if(this.router.getCurrentNavigation()?.extras?.state){
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioAdminEnviado'];
      }

    })

  }

  ngOnInit() {

   const nombreUsuario = localStorage.getItem('usuario');
   const usuarioAdmin = localStorage.getItem('usuarioAdmin');   
   

    if (nombreUsuario){
      this.usuario = nombreUsuario;
           
    }

    if(usuarioAdmin){
      this.usuarioAdministrador = usuarioAdmin;
      
    }
    
    
    

  }

  //Método Registrarse()
mantenedor(){

  //Sólo a modo de prueba  
  let navigationExtras: NavigationExtras = {
    state:{
      
    }
  }
  this.router.navigate(['/administrador'], navigationExtras);
}

ionViewWillEnter() {  
  this.dbtask.obtenerIdUsuario(this.usuario)
  .then((result) =>{
    if (result.rows.length > 0) {
      this.id_usuario = result.rows.item(0).id;    
      localStorage.setItem('id_usuario', String(this.id_usuario));  
    }

  }).catch((error) => {
    console.log("error");

  });
    
}




}

import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DBTaskService } from '../dbtask.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //variables
  usuario: string = "";
  password: string = "";
  //usuarioEmailInvalido: boolean = false;
  //passwordInvalido: boolean = false;

  constructor(private router: Router, private alertController: AlertController, private dbtask: DBTaskService) { }

  ngOnInit() {
  }

//Método para alerta de error
async mensajeAlerta(mensaje: string) {
  const alert = await this.alertController.create({
    header: 'Error',
    message: mensaje,
    buttons: ['OK']
  });
  await alert.present();
} 

//Funciones de validación

  //Para usuario
  isAlphanumeric(usuarioEmail: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(usuarioEmail);
  }

  //Para contraseña
  isNumericPassword(contrasena: string): boolean {
    return /^[0-9]{4}$/.test(contrasena);
  }


  //función asincrona base de datos
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


  async iniciarSesion() {
    const usuario = await this.dbtask.validarUsuario(this.usuario, this.password);
    if (usuario) {
      // Usuario válido, realizar acciones de inicio de sesión
      let NavigationExtras: NavigationExtras = {
        state:{
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }

      } 
      this.router.navigate(['/tabs/perfil'], NavigationExtras);
    } else {
      // Usuario inválido, mostrar mensaje de error
      this.presentAlert('Credenciales inválidas');
    }
  }

  
  


//Método iniciarSesion()
/*iniciarSesion(){

  //Verificar campos (ARREGLAR)
    //UsuarioEmail
    this.usuarioEmailInvalido = !(this.usuarioEmail.length >= 3 && this.usuarioEmail.length <= 8 && this.isAlphanumeric(this.usuarioEmail));
    //Constraseña
    this.passwordInvalido = !(this.isNumericPassword(this.contrasena));

  //Cumple con requisitos de usuario y contraseña para iniciar sesión
    if(!this.usuarioEmailInvalido && !this.passwordInvalido){      
      
      let navigationExtras: NavigationExtras = {
        state:{
          usuarioEnviado: this.usuarioEmail          
        }
      }
      this.usuarioEmail = "";
      this.contrasena= "";
      
      this.router.navigate(['/tabs/perfil'], navigationExtras);
  }
    else{
      this.mensajeAlerta("Usuario o contraseña no válidos");
      this.usuarioEmail = "";
      this.contrasena= "";

  }
}*/



//Método Registrarse()
registrar(){

  //Sólo a modo de prueba  
  let navigationExtras: NavigationExtras = {
    state:{
      
    }
  }
  this.router.navigate(['/home'], navigationExtras);
}



}



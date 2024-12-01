import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
//import { DBTaskService } from '../dbtask.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //variables
  usuario: string = "";
  password: string = "";
  id_usuario!: number;
  usuarios: any[] = [];
  siAdmin: boolean = false;
  //usuarioEmailInvalido: boolean = false;
  //passwordInvalido: boolean = false;

  constructor(private router: Router, private alertController: AlertController ) { } //private dbtask: DBTaskService

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


  //función asincrona muestra alerta de error
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
/*
  //función para listar usuarios
  ionViewWillEnter() {
    this.dbtask.listarUsuarios()
    .then((usuarios) => {
      this.usuarios = usuarios;

    }).catch((error) => {
      console.error('Error al cargar usuarios', error);
    });
  }


  async iniciarSesion() {

    this.siAdmin = false;

    if(this.usuario == 'admin' && this.password == '1234'){

      this.siAdmin = true;
      alert('Te has logueado como usuario administrador');

      //usarios con rol usuario administrador
      localStorage.setItem('usuarioAdmin', this.usuario);
      localStorage.setItem('passwordAdmin', this.password);
      let NavigationExtras: NavigationExtras = {
        state:{
          //usuarioEnviado: this.usuario,
          //passwordEnviado: this.password
          usuarioAdminEnviado: this.siAdmin
        }

      } 
      this.usuario = "";
      this.password = "";
      this.router.navigate(['/tabs/perfil'], NavigationExtras);
      
    }
    else{ //loguearse como usuario normal

      const usuario = await this.dbtask.validarUsuario(this.usuario, this.password);
      //usuarios con rol usuario normal
      localStorage.setItem('usuario', this.usuario);
      localStorage.setItem('password', this.password);    
      
      if (usuario) {
  
        // Usuario válido, realizar acciones de inicio de sesión
        let NavigationExtras: NavigationExtras = {
          state:{
            //usuarioEnviado: this.usuario,
            //passwordEnviado: this.password
            usuarioAdminEnviado: this.siAdmin
          }
  
        } 
        this.usuario = "";
        this.password = "";
        this.router.navigate(['/tabs/perfil'], NavigationExtras);
      } else {
        // Usuario inválido, mostrar mensaje de error
        this.presentAlert('Credenciales inválidas');
      }


    }  


  } 
  
*/



//OCUPAR ESTA (ARREGLAR)
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


//función asincrónica para pruebas unitarias
async  login() {
  // Verificar que el campo de correo no esté vacío
  if (!this.usuario) {
   this.presentAlert('El campo de usuario no puede estar vacío.');
   return;
 }

 // Validar el formato del usuario
 if (!this.isAlphanumeric(this.usuario)) {
   this.presentAlert('El formato del usuario es inválido.');
   return;
 }

 // Verificar que la contraseña no esté vacía
 if (!this.password) {
   this.presentAlert('El campo de contraseña no puede estar vacío.');
   return;
 }

 // Verificar que la contraseña tenga máximo 4 caracteres
 if (this.password.length > 4) {
   this.presentAlert('La contraseña no puede tener más de 4 caracteres.');
   return;
 }

}

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



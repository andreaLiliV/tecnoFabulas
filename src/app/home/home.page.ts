import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DBTaskService } from '../dbtask.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre: string = "";
  apellido: string = "";
  usuario: string = "";
  password: string = "";  
  educacion: string = "";
  fecha_nacimiento: string = "";
  //imagen: string = 'cero';

  isDBReady: boolean = false;
  

  

  constructor(private alertController: AlertController,
              private router: Router,
              private activateroute: ActivatedRoute,
              private dbtask: DBTaskService
  ) { }    
  
  ngOnInit() {

    this.dbtask.getIsDBReady().subscribe(isReady => {
      this.isDBReady = isReady;
      if (isReady) {
        // Aquí puedes llamar a funciones para cargar datos, etc. desde la base de datos
      }
    });
  }
  
  //Método para mensaje
  async mensajeActual(mensaje: string) {
  const alert = await this.alertController.create({
    header: 'Mensaje',
    message: mensaje,
    buttons: ['OK']
  });
  await alert.present();
} 

async presentAlert(message: string) {
  const alert = await this.alertController.create({
    header: 'Mensaje',
    message: message,
    buttons: ['OK']
  });

  await alert.present();
}

//Método ingresar
ingresar(){

  if(this.nombre.length == 0 || this.apellido.length == 0 || this.usuario.length == 0 || this.password.length == 0 || this.educacion.length == 0 || this.fecha_nacimiento.length==0){
    this.mensajeActual("Los campos no pueden estar vacíos");
  }
  else{
    this.mensajeActual("Se ha registrado correctamente");

    this.guardarDatos();  
    this.nombre = "";
    this.apellido = "";
    this.usuario = "";
    this.password = "";
    

  }

}

guardarDatos(){
 

  this.dbtask.insertUsuario(this.nombre, this.apellido, this.usuario, this.password, this.educacion, this.fecha_nacimiento)
      .then(() => {
        this.presentAlert('Datos guardados exitosamente');
        // Aquí puedes añadir lógica adicional, como mostrar un mensaje de éxito al usuario.
      })
      .catch(error => {
        this.presentAlert('Error al guardar datos:'+ error);
        // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario.
      });

}
  

}

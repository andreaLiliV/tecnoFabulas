import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


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
  //eduacion: string = "";
  

  

  constructor(private alertController: AlertController) { }    
  
  ngOnInit() {
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

//Método ingresar
ingresar(){

  if(this.nombre.length == 0 || this.apellido.length == 0 || this.usuario.length == 0 || this.password.length == 0){
    this.mensajeActual("Los campos no pueden estar vacíos");
  }
  else{
    this.mensajeActual("Se ha registrado correctamente");
    this.nombre = "";
    this.apellido = "";
    this.usuario = "";
    this.password = "";

    


  }

}
  

}

import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DBTaskService } from 'src/app/dbtask.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {
  capturedImage: string | undefined;
  password!: string;
  usuario!: string;
  usuarios: any[] = [];

  constructor(private dbtask: DBTaskService) { }

  ngOnInit() {
    const nombreUsuario = localStorage.getItem('usuario');
    const passwordUsuario = localStorage.getItem('password');
   

    if (nombreUsuario && passwordUsuario){
      this.usuario = nombreUsuario;
      this.password = passwordUsuario;      
    }

   
  }

  ionViewWillEnter() {
    //alert("Entro");
    this.dbtask.listarUsuarioLogueado(this.usuario, this.password)
      .then((usuarios) => {
        this.usuarios = usuarios;
  
      }).catch((error) => {
        console.error('Error al cargar usuarios', error);
      });
  }  

  async captureImage(){

    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });

      this.capturedImage = image.dataUrl;
    }catch(error){
      alert('Error al capturar la imagen - '+error);
    }




  }

}

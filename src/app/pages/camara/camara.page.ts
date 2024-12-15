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
  imagenEditar!: string;
  id: any[] = [];
  imagenGuardada!: string;
  imagen!: string;
 
 
 

  constructor(private dbtask: DBTaskService) { }

  ngOnInit() {
    
    const nombreUsuario = localStorage.getItem('usuario');
    const passwordUsuario = localStorage.getItem('password');
    //const id = this.id.toString();
    const imagenG = localStorage.getItem("perfil");
   

    if (nombreUsuario && passwordUsuario){
      this.usuario = nombreUsuario;
      this.password = passwordUsuario;      
    }

    if (imagenG){
      this.imagen = imagenG;             
    }
      

   
  }

  ionViewWillEnter() {
    //alert("Entro");
    this.dbtask.listarUsuarioLogueado(this.usuario, this.password)
      .then((usuarios) => {
        this.usuarios = usuarios;
        this.id = usuarios.map(usuario => usuario.id);
        
  
      }).catch((error) => {
        console.error('Error al cargar usuarios', error);
      });

     
  }  




  async captureImage(){
    //this.hayFoto = 0;

    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });

      this.capturedImage = image.dataUrl;
     
     

      /* GUARDAR IMAGEN EN LOCALSTORAGE */
      
      this.imagenGuardada = image.dataUrl as string;

      
      //const id = this.id.toString();
      localStorage.setItem("perfil", this.imagenGuardada);
      
      
      //localStorage.setItem(id, this.imagenGuardada);
      const imagenG = localStorage.getItem("perfil");
      if (imagenG){
        this.imagen = imagenG;             
      }
      else {
        alert("No tiene foto de perfil");
        
      }  
      
      
      /******/
     
      
    }catch(error){
      alert('Error al capturar la imagen - '+error);
    }




  } //fin async

  





}

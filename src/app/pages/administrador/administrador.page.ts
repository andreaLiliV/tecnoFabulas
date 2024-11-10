import { Component, OnInit } from '@angular/core';
import { DBTaskService } from '../../dbtask.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {

  usuarios: any[] = [];
  usuarioEditar: any = { id: null, nombre: '', apellido: '', usuario: ''};

  constructor(private dbtask: DBTaskService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.dbtask.listarUsuarios()
    .then((usuarios) => {
      this.usuarios = usuarios;

    }).catch((error) => {
      console.error('Error al cargar usuarios', error);
    });
  }

  eliminarUsuario(id: number) {
    this.dbtask.eliminarUsuario(id)
    .then((success) => {
      if(success) {
        //this.dbtask.listarUsuarios();
        console.log('Usuario eliminado');
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
      }else{
        console.log('El usuario no pudo ser eliminado')
      }

    }).catch(error => console.error('Error al eliminar el usuario', error));
  }

  editarUsuario(usuario: any) {
    this.usuarioEditar = { ...usuario };
    console.log('Usuario para editar');
  }

  modificarUsuario() {
    if(this.usuarioEditar.id){
      this.dbtask.modificarUsuario(this.usuarioEditar).then(() => {

        //this.dbtask.listarUsuarios;
        this.usuarios = this.usuarios.map(usuario => usuario.id === this.usuarioEditar.id ? { ...usuario, ...this.usuarioEditar } : usuario);





        this.usuarioEditar = { id: null, nombre: '', apellido: '', usuario: ''};

      }).catch((error) => {
        console.error('Error al modificar el usuario', error);
      });
    }
  }

}

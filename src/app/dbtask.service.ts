import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DBTaskService {

  public db!: SQLiteObject;
  //usuarios: any[] = [];

    // observable
    private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private toastController: ToastController) {

      this.initDatabase();  //inicar base de datos

   }

   //iniciar base de datos
   private initDatabase(){

    this.sqlite.create({
      name: 'mydatabase.db',  //le da un nombre a la base de datos
      location: 'default'
    }).then((db: SQLiteObject) => {  //va utilizar el objeto db
      this.db = db;
      this.createTables();  //creará las tablas
      this.isDBReady.next(true);
      this.presentToast('Base de datos y tablas creadas con exito');
    }).catch(error => console.log(error));

   }//fin initDatabase


   //funcion para crear tablas
   private createTables() {

    this.db.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        apellido TEXT,
        usuario TEXT,
        password TEXT,
        educacion TEXT,
        fecha_nacimiento TEXT
      )`, [])
    .then(() => this.presentToast('Table created'))  //si todo está bien, tabla creada con éxito
    .catch(error => this.presentToast('Error creating table' + error));  //si no se logra crear la tabla, saldrá el error

   }//fin createTables

   //función listar todos los usuarios
   listarUsuarios() {
    return this.db.executeSql('SELECT * FROM usuarios', [])
      .then((res) => {
        let usuarios = [];
        for (let i=0; i<res.rows.length; i++) {
          usuarios.push(res.rows.item(i));
        }
        return usuarios;

      }).catch(e => {
        console.error('Error al listar usuarios', e);
        return [];
      });
   }

   //Función validarUsuario
   validarUsuario(usuario: string, password: string) {
    return this.db.executeSql('SELECT * FROM usuarios WHERE usuario = ? AND password = ?', [usuario, password])
      .then((res) => {
        if (res.rows.length > 0) {
          return res.rows.item(0); // Retorna el primer usuario que coincide
        } else {
          return null; // Retorna null si no se encontró ningún usuario
        }
      })
      .catch(error =>  this.presentToast('Error al obtener usuario por credenciales:' + error));
  }


   //Función para insertar usuario
   insertUsuario(nombre: string, apellido: string, usuario: string, password: string, selectedOption: string, selectedDate: string) {
    return this.db.executeSql(`
      INSERT INTO usuarios (nombre, apellido, usuario, password, educacion, fecha_nacimiento) VALUES (?, ?, ?, ?, ?, ?);
    `, [nombre, apellido, usuario, password, selectedOption, selectedDate])
    .then(() => this.presentToast('Usuario insertado correctamente'))
    .catch(error => this.presentToast('Error al insertar usuario:'+ error));
  }

  //Función para eliminar usuario
  eliminarUsuario(id: number){
    return this.db.executeSql('DELETE FROM usuarios WHERE id=?', [id])
    .then((res) => {
      if (res.rowsAffected > 0 ){
        console.log('Usuario eliminado');
        return true;
      }else{
        console.log("No se encontró el usuario a eliminar");
        return false;
      }

    })
    .catch((error) => {
      console.error('Error al eliminar el usuario', error);
      throw error;

    });
  }

  //Función para modificar usuario
  modificarUsuario(usuario: any) {
    const query = 'UPDATE usuarios SET nombre = ?, apellido = ?, usuario = ? WHERE id = ?';
    return this.db.executeSql(query, [usuario.nombre, usuario.apellido, usuario.usuario, usuario.id]);
  }



   private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  getIsDBReady() {
    return this.isDBReady.asObservable();
  }



}

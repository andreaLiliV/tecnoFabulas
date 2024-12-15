import { Component, OnInit } from '@angular/core';
import { DBTaskService } from 'src/app/dbtask.service';

@Component({
  selector: 'app-preferidos',
  templateUrl: './preferidos.page.html',
  styleUrls: ['./preferidos.page.scss'],
})
export class PreferidosPage implements OnInit {

  id_usuario!: any; 
  libros: any[] = [];
  misLecturas!: any;

  librosAgregados = [
    {
      id: 1,
      titulo: 'Las puertas de anubis',
      autor: 'Tim Powers',      
      imagen: '../../../assets/img/libros/anubis.jpg',
    },
    {
      id: 2,
      titulo: "Carbono modificado",
      autor: "Richard Morgan",      
      imagen: "../../../assets/img/libros/carbono_modificado.jpg",
    },
    {
      id: 3,
      titulo: "Neuromancer",
      autor: "William Gibson",      
      imagen: '../../../assets/img/libros/neuromancer.jpg',
    },
    {
      id: 4,
      titulo: "Diario de estrellas",
      autor: "Stanislaw Lem",      
      imagen: "../../../assets/img/libros/diario_estrellas.jpg",
    },
    {
      id: 5,
      titulo: "El fin de la eternidad",
      autor: "Isaac Asimov",      
      imagen: "../../../assets/img/libros/eternidad.jpg",
    },
    {
      id: 6,
      titulo: "Blade Runner",
      autor: "Philip K. Dick",      
      imagen: "../../../assets/img/libros/ovejas_electricas.jpg",
    },

    {
      id: 7,
      titulo: "Soy Leyenda",
      autor: "Richard Matheson",      
      imagen: "../../../assets/img/libros/leyenda.jpg",      
    },
    {
      id: 8,
      titulo: "Leviathan",
      autor: "Scott Westerfeld",      
      imagen: "../../../assets/img/libros/leviathan.jpg",
    },
    {
      id: 9,
      titulo: "La máquina del tiempo",
      autor: "George Wells",      
      imagen: "../../../assets/img/libros/maquina_tiempo.jpg",
    },

  ]; 

  constructor(private dbtask: DBTaskService) { }

  

  ngOnInit() {
    this.id_usuario = Number(localStorage.getItem('id_usuario'));
    const misLecturas = localStorage.getItem('misLecturas');

    if(misLecturas){
      this.misLecturas = JSON.parse(misLecturas);
      
    }
  }

  ionViewWillEnter() {
    
    this.dbtask.listarLibrosUsuario(this.id_usuario)
      .then((libros) => {
        this.libros = libros;
        
  
      }).catch((error) => {
        console.error('Error al cargar libros', error);
      });
  } 
  
  eliminarLibroUsuario(id: number) {
    this.dbtask.eliminarLibro(id)
    .then((success) => {
      if(success) {
        //this.dbtask.listarUsuarios();
        console.log('Libro eliminado');
        this.libros = this.libros.filter(libro => libro.id !== id);
      }else{
        console.log('El Libro no pudo ser eliminado')
      }

    }).catch(error => console.error('Error al eliminar el Libro', error));
  }


  /*getTituloLibro(id_libro: number): string | null{  //string
    const libro = this.librosAgregados.find((a) => a.id === id_libro);
    return libro ? libro.titulo : null;
    
  }*/

  getTituloLibro(id_libro: number): { titulo: string; autor: string; imagen: string} | null {  //string
    const libro = this.librosAgregados.find((a) => a.id === id_libro);
    return libro ? { titulo: libro.titulo, autor: libro.autor, imagen: libro.imagen }: null;
    
  }

}

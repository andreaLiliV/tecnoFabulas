import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DBTaskService } from 'src/app/dbtask.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {
  libros: any[] = [];
  id_usuario!: any; 

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

  constructor(private router: Router, private dbtask: DBTaskService) { }

  ngOnInit() {
    this.id_usuario = Number(localStorage.getItem('id_usuario'));
  }

  ionViewWillEnter() {
    
    this.dbtask.listarLibrosUsuario(this.id_usuario)
      .then((libros) => {
        this.libros = libros;
        
  
      }).catch((error) => {
        console.error('Error al cargar libros', error);
      });
  }  
  
  getTituloLibro(id_libro: number): string | null{
    const libro = this.librosAgregados.find((a) => a.id === id_libro);
    return libro ? libro.titulo : null;
  }  

  //Método iniciarSesion()
mostrarLibro(){

  //Sólo a modo de prueba  
  let navigationExtras: NavigationExtras = {
    state:{
      
    }
  }
  this.router.navigate(['/bookreader'], navigationExtras);
}

agregarLibro(){

  //Sólo a modo de prueba  
  let navigationExtras: NavigationExtras = {
    state:{
      
    }
  }
  this.router.navigate(['/catalogo'], navigationExtras);

}

}

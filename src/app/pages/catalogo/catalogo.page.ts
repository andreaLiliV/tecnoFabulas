import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular';
import { DBTaskService } from 'src/app/dbtask.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  @ViewChild('botonAgregar', { static: false }) botonAgregar!: IonButton;

  //libros: any[] = [];
  id_usuario!: any;  
  libroAgregado!: number;
  

  constructor(private dbtask: DBTaskService) { }

  libros = [
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

  ngOnInit() {
    this.id_usuario = localStorage.getItem('id_usuario');  
    
    localStorage.setItem("MisLecturas", JSON.stringify(this.libros));
    //this.dbtask.insertLibro(); //arreglar
  }

  /*ionViewWillEnter() {
    this.dbtask.listarLibros()
    .then((libros) => {
      this.libros = libros;

    }).catch((error) => {
      console.error('Error al cargar usuarios', error);
    });
  }*/ 

  

  agregarABibiloteca(usuario_id: number, libro_id: number){

    this.dbtask.validarLibro(usuario_id, libro_id)
    .then((result) =>{
     if (result.rows.length > 0) {
       this.libroAgregado = result.rows.item(0).id_libro;      
        
       //localStorage.setItem('id_usuario', String(this.id_usuario));
       //alert(this.libroAgregado);
       alert("Este libro ya fue agregado");      
       
     }
     else{

      //alert(usuario_id + " - " + libro_id) ;
      this.dbtask.agregarLibroBiblioteca(usuario_id, libro_id);

     }
 
   }).catch((error) => {
     console.log("error");
 
   });

 
  }
 
}

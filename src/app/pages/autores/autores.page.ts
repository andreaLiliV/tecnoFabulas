import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {
  users: any[] = [];

  //Para método dinámico
  query: string = ''; //consultar ingresada por el usuario
  libros: any[] = []; //Lista de libros obtenida de la API
  hayLibros = 0;


  //Para recomendaciones
  recommendations: any[] = [];


  constructor(private apiService: ApiService) { }

  ngOnInit() {

    //alert("Api inicia");

   /* this.apiService.getUsers().subscribe(
      (response: any) => {
        this.users = response.docs;
        //alert("funciona");       

      },
      (error) => {
        console.error('Error al obtener los autores: ', error);
      }

    );*/

  }

 

  buscarLibros() {

    

    if (!this.query.trim()) {
      this.hayLibros = 0;
      alert('Por favor, escribe algo para buscar.');
      return;
    }

    //alert(this.query);

    this.apiService.getBooks(this.query).subscribe(
      (data: any) => {

        this.libros = data.docs; //Obtén los resultados de la API

        //Obtener recomendaciones basadas en las búsqueda
        /*
        this.apiService.getRecommendations(this.query).subscribe(
          recData => {
            this.recommendations = recData.docs;
          },
          error => {
            alert('Error al obtener recomendaciones: ' + error);
          }

        ); *///fin recomendaciones
        
        if(this.libros.length > 0) {
          this.hayLibros = this.libros.length;
          const author = this.libros[0].author_name?.[0] || '';
          const genre = this.libros[0].subject?.[0] || 'Science Fiction';

          this.apiService.getRecommentationsByAuthorOrGenre(author, genre).subscribe(

            recData => {
              this.recommendations = recData.docs;
            },
            error => {
              alert('Error al obtener recomendaciones: '+ error);
            }

          );
        }
        
        //alert('funciona buscador');

      },
      (error) => {
        alert('Error al buscar libros:'+  error.error);
        //alert("Resultado" + this.libros);
        alert('Hubo un problema al realizar la búsqueda.');

      }

    );
      
  }//fin método buscarLibros()




}

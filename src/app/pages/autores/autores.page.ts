import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {
  users: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    //alert("Api inicia");

    this.apiService.getUsers().subscribe(
      (response: any) => {
        this.users = response.docs;
        //alert("funciona");       

      },
      (error) => {
        console.error('Error al obtener los autores: ', error);
      }

    );




  }

}

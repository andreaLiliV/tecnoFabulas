import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiUrl = 'https://openlibrary.org/search.json?q=dune';
  private baseUrl = 'https://openlibrary.org/search.json';
  private url = '';
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  //Método que recibe una consulta y retorna los resultados
  getBooks(query: string): Observable<any> {    
    this.url = `${this.baseUrl}?q=${encodeURIComponent(query)}&limit=4`;    
    return this.http.get(this.url);  

  }
  

  getRecommentationsByAuthorOrGenre(author: string, genre: string): Observable<any> {
    let query = author ? `author=${author}` : `subject=${genre}`;
    return this.http.get<any>(`${this.baseUrl}?q=${query}&limit=5`);
  }


}

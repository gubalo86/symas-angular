import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

const baseUrl='https://localhost:44323/api/v1'

@Injectable({
  providedIn:'root'
})
export class ProveedoresService{
  constructor(private http: HttpClient){}
  getProveedores(){
    return [
      {
        "nombre":"Gustavo",
        "edad":35,
        "hobby":"cantar"
      },
      {
        "nombre":"Rene",
        "edad":38,
        "hobby":"bailar"
      },
      {
        "nombre":"Manuel",
        "edad":24,
        "hobby":"comer"
      }
    ]
  }

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/products`);
  }

  get(id):Observable<any>{
    return this.http.get(`${baseUrl}/products/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(`${baseUrl}/products`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/products/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/products/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/products`);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
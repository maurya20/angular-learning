import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl: string = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> {
    return this.http.get<any>(this.productsUrl);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.productsUrl}/${id}`);
  }
}

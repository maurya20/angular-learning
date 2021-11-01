import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any;
  constructor() {
    this.cartItems = [];
  }
  addToCart(product: any) {
    this.cartItems = [...this.cartItems, product];
  }
  getCartItems(): Observable<any> {
    return this.cartItems;
  }
}

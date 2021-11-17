import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any = [];
  cartsUpdate = new Subject()
  constructor() {
   // this.cartItems = [];
  }
  addToCart(product: any) {
    this.cartItems = [...this.cartItems, product];
    this.cartsUpdate.next()
  }
  getCartItems() {
    return [...this.cartItems];
  }
}

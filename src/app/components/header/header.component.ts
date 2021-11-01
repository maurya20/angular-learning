import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartItems: any;
  constructor(private cartService: CartService) {
    this.cartItems = [];
  }
  updateCart() {
    this.cartItems = this.cartService.getCartItems();
    console.log('in heder badala     >>>', this.cartItems);
  }
  ngOnInit(): void {
    this.updateCart();
  }
}

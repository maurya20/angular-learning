import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartItems: any = [];
  private cartSubscription:  Subscription = new Subscription();
  constructor(
    private cartService: CartService,
    
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartSubscription = this.cartService.cartsUpdate.subscribe(() => {
      this.cartItems = this.cartService.getCartItems();
      console.log('in heder badala     >>>', this.cartItems);
    });
  }
  ngOnDestroy() {
   this.cartSubscription.unsubscribe();
  }
}

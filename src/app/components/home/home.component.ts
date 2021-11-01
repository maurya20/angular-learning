import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any;
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}
  getProducts(): void {
    this.productsService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
  ngOnInit() {
    this.getProducts();
  }
  addToCart(p: any) {
    this.cartService.addToCart(p);
    console.log('in home after addto cart', this.cartService.getCartItems());
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any;
  constructor(private productsService: ProductsService) {}
  getProducts(): void {
    this.productsService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
  ngOnInit() {
    this.getProducts();
  }
}

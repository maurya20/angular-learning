import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  product: any;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  getProduct(id: number): void {
    this.productsService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getProduct(id);
  }
}

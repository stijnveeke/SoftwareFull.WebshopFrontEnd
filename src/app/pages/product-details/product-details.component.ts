import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ProductOutput } from 'src/app/dto/productOutput';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(public auth: AuthService, private route: ActivatedRoute, private productService: ProductService) {}

  product: ProductOutput;

  async ngOnInit(): Promise<void> {
    const routeParams = this.route.snapshot.paramMap;
    const productSlugFromRoute = String(routeParams.get('productSlug'));

    const prod: ProductOutput = await this.productService.getProduct(productSlugFromRoute);
    console.log('test');
    console.log(prod);
    this.product = prod;
  }
}

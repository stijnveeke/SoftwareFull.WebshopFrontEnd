import { Component, Input, OnInit } from '@angular/core';
import { ProductOutput } from 'src/app/dto/productOutput';
import {ProductService} from '../../services/product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css']
})
export class ProductContentComponent implements OnInit {

  @Input() products: Observable<ProductOutput[]>;
  @Input() recentProducts: ProductOutput[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    console.log(this.products);
  }

}

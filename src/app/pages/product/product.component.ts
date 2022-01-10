import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ProductOutput } from 'src/app/dto/productOutput';
import { ProductService } from 'src/app/services/product.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(public auth: AuthService, private route: ActivatedRoute, private productService: ProductService, private http: HttpClient) {}

  products: Observable<any>;
  recentProducts: ProductOutput[];

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
}

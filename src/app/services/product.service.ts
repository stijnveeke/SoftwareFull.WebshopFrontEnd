import { Injectable } from '@angular/core';
import {ProductOutput} from '../dto/productOutput';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public authHttp: HttpClient) { }

  getAllProducts()
  {
    return this.authHttp.get('https://localhost:5021/api/Product');
    // await this.authHttp.get<ProductOutput[]>('https://localhost:44366/api/Products').subscribe((products) => {
    //   console.log(products);
    //   productList = products as ProductOutput[];
    // }, (error) => console.error(error));
  }

  getProduct(productSlugFromRoute: string)
  {
    console.log("Get all products");
    this.authHttp.get('https://localhost:44366/api/Products').subscribe((data) => console.log(data), (err) => console.log(err));
    return new ProductOutput();
  }
}

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
    return this.authHttp.get('https://softwarefullproductcomponent.azurewebsites.net/api/Product');
    // await this.authHttp.get<ProductOutput[]>('https://localhost:44366/api/Products').subscribe((products) => {
    //   console.log(products);
    //   productList = products as ProductOutput[];
    // }, (error) => console.error(error));
  }

  getProduct(productSlugFromRoute: string)
  {
    return this.authHttp.get('https://softwarefullproductcomponent.azurewebsites.net/api/Product/' + productSlugFromRoute).toPromise();
  }
}

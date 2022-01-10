import { Injectable } from '@angular/core';
import { DeliveryAddress } from '../dto/delivery-address';
import { PaymentOption } from '../dto/payment-option';
import { ProductLine } from '../dto/product-line';
import { ProductOutput } from '../dto/productOutput';
import { Shoppingcart } from '../dto/shoppingcart';
import {HttpClient} from '@angular/common/http';
import {AuthService} from "@auth0/auth0-angular";

@Injectable({
  providedIn: 'root'
})
export default class ShoppingcartService {

  constructor(private http: HttpClient, public auth: AuthService) { }

  // shoppingcart: Shoppingcart = {
  //   id: 1,
  //   deliveryAddress: {
  //     id: 1,
  //     zipCode: '4724 AZ',
  //     streetName: 'Boomhoefstraat',
  //     streetNumber: 4,
  //     province: 'Noord-Brabant',
  //     city: 'Roosendaal'
  //   },
  //   paymentOption: {
  //     id: 1,
  //     method: 'ideal'
  //   },
  //   products: [{
  //     product: {
  //       id: 1,
  //       title: 'Super Awesome Software',
  //       description: 'Lorem ipsum',
  //       slug: 'super-awesome-software',
  //       price: 5.50,
  //       attributes: []
  //     },
  //     amount: 2
  //   }],
  //   totalPrice: '0.00'
  // };
  //
  // constructor(private http: HttpClient) { }
  //
  // addProduct = async (product: ProductOutput, amount: number): Promise<void> => {
  //   this.shoppingcart.products.push({product, amount});
  // }
  //
  // removeProduct = async (product: ProductOutput): Promise<void> => {
  //   this.shoppingcart.products.forEach((element, index) => {
  //     // tslint:disable-next-line:triple-equals
  //     if (element.product == product) {
  //       this.shoppingcart.products.splice(index, 1);
  //     }
  //   });
  // }
  //
  // getShoppingcart = async (): Promise<Shoppingcart> => {
  //   return this.shoppingcart;
  // }
  //
  // setDeliveryAddress = async (address: DeliveryAddress): Promise<void> => {
  //   this.shoppingcart.deliveryAddress = address;
  // }
  //
  // setPaymentMethod = async (paymentOption: PaymentOption): Promise<void> => {
  //   this.shoppingcart.paymentOption = paymentOption;
  // }

  OrderFromShoppingcart = async (productLine: ProductLine): Promise<void> => {
    console.log(this.auth.user$);
    this.http.post('https://localhost:44322/api/Order/submit/' + productLine.product.productSlug, {
      customerSub: 'blablabla',
      email: 'st.van.eekelen@gmail.com'
    }).forEach(value => {
      console.log(value);
    }).catch(event => {
      console.error(event);
    });
    console.log('Form send!');
  }
}

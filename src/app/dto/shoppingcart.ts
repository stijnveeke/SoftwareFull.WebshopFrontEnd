import { DeliveryAddress } from "./delivery-address";
import { PaymentOption } from './payment-option';
import { ProductLine } from './product-line';
import { ProductOutput } from './productOutput';

export class Shoppingcart {
    id: number;
    deliveryAddress: DeliveryAddress;
    paymentOption: PaymentOption;
    products: [{amount: number, product: ProductOutput}]

    get totalPrice(): string {
        let price = 0;

        this.products.map((p) => {
            price += p.amount * p.product.price;
        });

      // tslint:disable-next-line:radix
        return parseInt(price.toString()).toFixed(2);
    }
}

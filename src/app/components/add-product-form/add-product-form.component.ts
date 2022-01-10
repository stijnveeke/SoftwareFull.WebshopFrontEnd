import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { ProductOutput } from 'src/app/dto/productOutput';
import ShoppingcartService from '../../services/shoppingcart.service';
import {ProductLine} from '../../dto/product-line';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {

  @Input() product: ProductOutput;
  totalPrice: string;
  form: FormGroup;
  public formSubmitAttempt = false;


  constructor(private formBuidler: FormBuilder, private shoppingCartService: ShoppingcartService) { }

  minValidation(min: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value !== undefined && (isNaN(control.value) || control.value < min)) {
          return { min: true };
      }
      return null;
    };
  }

  maxValidation(max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value !== undefined && (isNaN(control.value) || control.value > max)) {
          return { max: true };
      }
      return null;
    };
  }

  ngOnInit(): void {
    this.totalPrice = parseInt(this.product.price.toString()).toFixed(2);

    this.form = this.formBuidler.group({
      inputAmount: [null, [Validators.required, this.minValidation(1), this.maxValidation(10)]]
    });
  }

  amountChange(event: Event) {
    const amount: number = parseInt((event.target as HTMLInputElement).value);
    this.totalPrice = parseInt((amount * this.product.price).toString()).toFixed(2);
  }

  isFieldValid(field: string) {
    return (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt);
  }

  getInvalidValidators(field: string): {type: string, value: any}[] {
    const obj = this.form.get(field).errors;

    if (obj != null) {
      return Object.keys(obj).map(key => ({type: key, value: obj[key]}));
    }

    return [];
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.getInvalidValidators(field).length > 0,
      'has-feedback': this.getInvalidValidators(field).length > 0
    };
  }
  onSubmit() {
    this.formSubmitAttempt = true;
    if (this.form.valid) {
      console.log('form submitted');
      const productLine: ProductLine = new ProductLine();
      productLine.product = this.product;
      productLine.amount = 5;
      this.shoppingCartService.OrderFromShoppingcart(productLine);
    } else {
      this.validateAllFormFields(this.form);

    }
  }

  validateAllFormFields(formGroup: FormGroup) {         // {1}
    Object.keys(formGroup.controls).forEach(field => {  // {2}
      const control = formGroup.get(field);             // {3}
      if (control instanceof FormControl) {             // {4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        // {5}
        this.validateAllFormFields(control);            // {6}
      }
    });
  }
}

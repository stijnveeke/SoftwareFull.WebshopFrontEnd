import { Component, Input, OnInit } from '@angular/core';
import { ProductOutput } from 'src/app/dto/productOutput';
import { ProductDetailsComponent } from 'src/app/pages/product-details/product-details.component';

@Component({
  selector: 'app-product-details-content',
  templateUrl: './product-details-content.component.html',
  styleUrls: ['./product-details-content.component.css']
})
export class ProductDetailsContentComponent implements OnInit {

  @Input() product: ProductOutput;
  constructor() { }

  ngOnInit(): void {
  }

}

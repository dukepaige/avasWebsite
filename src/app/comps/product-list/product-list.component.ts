import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { testProductData } from 'src/mockData/productRes';

@Component({
  selector: 'ava-website-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  productList: any
  constructor() {
    console.log(this.productList)
    console.log("Product list comp constructor")
    this.productList= testProductData
    console.log(this.productList)
  }
}

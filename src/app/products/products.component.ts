import { ProductService } from './../product.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  isValid = false;
  myFunction(){
    alert("love you")
  }
  constructor(productService:ProductService) {
    this.products = productService.getProduct();
   }

  ngOnInit(): void {
  }

}

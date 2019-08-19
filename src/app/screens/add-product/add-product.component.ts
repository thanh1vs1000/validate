import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  cateId: string;

  product = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
      ]),
    image: new FormControl('',[
     Validators.required,
      ]),
    price: new FormControl('',[
       Validators.required,
       Validators.min(1000),
       Validators.max(10000000)
    ]),
    detail: new FormControl('',[

      Validators.required

      ]),
    amount: new FormControl('',[

        Validators.required,
        Validators.min(1),
        Validators.max(100)
      ]),
    status: new FormControl('',[
      Validators.required
      ]),
  });
  ngOnInit() {
    this.cateId = this.route.snapshot.params.cateId;
  }
    get name() {return this.product.get('name')}
    get image() {return this.product.get('image')}
    get price() {return this.product.get('price')}
    get detail() {return this.product.get('detail')}
    get amount() {return this.product.get('amount')}
    get status() {return this.product.get('status')}

  saveProduct() {
    if (this.product.valid) {
      
    this.productService.addProduct(this.product.value)
      .subscribe(data => {
        console.log(data);
       this.product.value.name=""
       this.product.value.image=""
       this.product.value.price=""
       this.product.value.detail=""
       this.product.value.amount=""
       this.product.value.status=""
      this.product.value.cate_id = this.cateId

       this.router.navigate(['/']);
      });
  }
}
}
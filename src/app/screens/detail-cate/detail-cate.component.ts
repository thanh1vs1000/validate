import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-detail-cate',
  templateUrl: './detail-cate.component.html',
  styleUrls: ['./detail-cate.component.css']
})
export class DetailCateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cateService: CategoryService,
    private productService: ProductService
  ) { }
  products: [];
  category: {};
  cateId: string;
  ngOnInit() {
    this.cateId = this.route.snapshot.params.id;
    this.cateService.getCategoryById(this.cateId)
      .subscribe(data => {
        this.category = data;
      });
    this.productService.getListProduct(this.cateId)
      .subscribe(data => {
        this.products = data;
      });
  }
  removeProduct(product) {
    const conf = confirm(`Bạn có chắc chắn muốn xóa danh mục ${product.name} ?`);
    if (conf) {
      this.productService.removeProduct(this.cateId, product.id)
        .subscribe(data => {
          this.products = this.products.filter(item => item.id != product.id);
        });
    }
  }

}

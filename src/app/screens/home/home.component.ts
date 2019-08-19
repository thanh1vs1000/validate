import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cateService: CategoryService) { }
  categories = [];
  ngOnInit() {
    this.cateService.getListCategory()
      .subscribe(data => {
        this.categories = data;
      });
  }

  removeCategory(cate) {
    const conf = confirm(`Bạn có chắc chắn muốn xóa danh mục ${cate.name} ?`);
    if (conf) {
      this.cateService.removeCategory(cate.id)
        .subscribe(data => {
          this.categories = this.categories.filter(item => item.id != cate.id);
        })
    }
  }

}

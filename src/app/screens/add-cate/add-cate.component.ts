import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CategoryService} from '../../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent implements OnInit {

  constructor(private cateService: CategoryService,
              private route: ActivatedRoute,
              private router: Router) { }
  category =  new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
      ]),
    
      image: new FormControl('',[
      Validators.required
      ])
  });
  ngOnInit() {
  }
    get name() {return this.category.get('name')}
    get image() {return this.category.get('image')}


  saveCategory() {
   if (this.category.valid) {
     this.cateService.addCategory(this.category.value)
     .subscribe(data=>{
       console.log(data);
       this.category.value.name=""
       this.category.value.image=""
       this.router.navigate(['/']);
     })
   }
}
}

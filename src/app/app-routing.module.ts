import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { DetailCateComponent } from './screens/detail-cate/detail-cate.component';
import { AddCateComponent } from './screens/add-cate/add-cate.component';
import { EditCateComponent } from './screens/edit-cate/edit-cate.component';
import { AddProductComponent } from './screens/add-product/add-product.component';
import { EditProductComponent } from './screens/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'category/add',
    component: AddCateComponent
  },
  {
    path: 'category/:id',
    component: DetailCateComponent
  },
  {
    path: 'category/edit/:id',
    component: EditCateComponent
  },
  {
    path: 'category/:cateId/add',
    component: AddProductComponent
  },
  {
    path: 'category/:cateId/edit/:productId',
    component: EditProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

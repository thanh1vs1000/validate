import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { AddCateComponent } from './screens/add-cate/add-cate.component';
import { EditCateComponent } from './screens/edit-cate/edit-cate.component';
import { DetailCateComponent } from './screens/detail-cate/detail-cate.component';
import { AddProductComponent } from './screens/add-product/add-product.component';
import { EditProductComponent } from './screens/edit-product/edit-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCateComponent,
    EditCateComponent,
    DetailCateComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

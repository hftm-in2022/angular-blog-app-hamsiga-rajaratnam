import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailRoutingModule } from './blog-detail-routing.module';
import {BlogDetailComponent} from "../../components/layout/blog-detail/blog-detail.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlogDetailComponent,
  ]
})
export class BlogDetailModule { }

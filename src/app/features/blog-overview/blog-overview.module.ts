import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BlogListLayoutComponent} from "../../components/layout/blog-list-layout/blog-list-layout.component";
import {BlogCardComponent} from "../../components/ui/blog-card/blog-card.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlogListLayoutComponent,
    BlogCardComponent
  ],
  exports: [BlogListLayoutComponent]
})
export class BlogOverviewModule { }

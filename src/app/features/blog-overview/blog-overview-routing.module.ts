import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogListLayoutComponent} from "../../components/layout/blog-list-layout/blog-list-layout.component";

const routes: Routes = [
  { path: '', component: BlogListLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogOverviewRoutingModule { }

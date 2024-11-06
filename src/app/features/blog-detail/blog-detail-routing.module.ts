import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogDetailComponent} from "../../components/layout/blog-detail/blog-detail.component";

const routes: Routes = [
  { path: ':id', component: BlogDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogDetailRoutingModule { }

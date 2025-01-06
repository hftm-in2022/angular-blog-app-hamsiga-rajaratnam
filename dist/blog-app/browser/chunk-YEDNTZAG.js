import"./chunk-KEM5X5Y5.js";import{b as T}from"./chunk-GGDH3B53.js";import"./chunk-ZCM4UBPU.js";import{a as N,b as R,c as A,d as U,e as H,f as Y,g as $}from"./chunk-KDGS5THL.js";import{$a as _,Da as g,Gb as F,Ia as o,Ja as i,Ka as l,N as E,Pa as w,Q as I,Ra as u,S as p,Ya as x,Za as c,_a as B,bb as C,eb as h,gc as z,h as P,kb as L,la as S,na as a,oa as f,pb as j,qb as k,sb as D,va as s,ya as b}from"./chunk-GUISZH2C.js";var G=(()=>{class t{constructor(e){this.router=e}getDefaultImage(){return"assets/images/default_header_img.jpg"}viewMore(){if(this.blogEntry()){let e=this.blogEntry().id;this.selectedBlogId.set(e),this.router.navigate(["/blogs",e])}}static{this.\u0275fac=function(n){return new(n||t)(f(F))}}static{this.\u0275cmp=p({type:t,selectors:[["app-blog-card"]],inputs:{blogEntry:"blogEntry",selectedBlogId:"selectedBlogId"},standalone:!0,features:[C],decls:17,vars:5,consts:[["appearance","outlined",1,"blog-card"],[1,"blog-card-title"],[1,"fas","fa-user"],["mat-card-image","","alt","Blog Cover Photo",1,"blog-card-img",3,"src"],[1,"fas","fa-thumbs-up"],[1,"fas","fa-comment"],["mat-button","",1,"button--primary",3,"click"]],template:function(n,r){if(n&1&&(o(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),c(3),i(),o(4,"mat-card-subtitle"),l(5,"i",2),c(6),i()(),l(7,"img",3),o(8,"mat-card-content")(9,"div"),l(10,"i",4),c(11),l(12,"i",5),c(13),i()(),o(14,"mat-card-actions")(15,"button",6),w("click",function(){return r.viewMore()}),c(16,"More"),i()()()),n&2){let m,M,v,y,O;a(3),B((m=r.blogEntry())==null?null:m.title),a(3),_(" ",(M=r.blogEntry())==null?null:M.author," "),a(),g("src",((v=r.blogEntry())==null?null:v.headerImageUrl)||r.getDefaultImage(),S),a(4),_(" ",(y=r.blogEntry())==null?null:y.likes," "),a(2),_(" ",(O=r.blogEntry())==null?null:O.likes," ")}},dependencies:[z,N,H,A,Y,$,U,R],styles:[".blog-card[_ngcontent-%COMP%]{position:relative;transition:transform .2s ease-in-out,box-shadow .2s ease-in-out;margin:10px;width:400px;border:1px solid grey;border-radius:15px;overflow:hidden;background-color:#fff;box-shadow:0 2px 8px #0000001a}.blog-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 4px 20px #00000026;background-color:#f8f9fa}.blog-card[_ngcontent-%COMP%]   .blog-card-title[_ngcontent-%COMP%]{padding:15px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:370px;font-size:20px;font-weight:600;color:#8b0000}.blog-card[_ngcontent-%COMP%]   .blog-card-img[_ngcontent-%COMP%]{object-fit:cover;height:200px;width:100%;border-bottom:1px solid #ddd}.blog-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding-bottom:10px;border-bottom:1px solid #ddd}.blog-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{font-size:14px;color:gray;display:flex;align-items:center;gap:5px}.blog-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#6c757d}.blog-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:15px;font-size:14px;color:#555}.blog-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;gap:15px;align-items:center;font-size:16px}.blog-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#8b0000}.blog-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{padding:15px;display:flex;justify-content:flex-end}.blog-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .button--primary[_ngcontent-%COMP%]{color:#fff;background-color:#8b0000;padding:8px 16px;font-size:14px;font-weight:700;border-radius:4px;text-transform:capitalize}.blog-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .button--primary[_ngcontent-%COMP%]:hover{background-color:#a11515}"],changeDetection:0})}}return t})();var J=(()=>{class t{constructor(e){this.blogService=e,this.blogEntriesSubject=new P([]),this.blogEntries=s([]),this.selectedBlogId=s(null),this.isLoading=s(!1)}fetchBlogEntries(){this.isLoading.set(!0),this.blogService.getBlogEntries().subscribe({next:e=>{this.blogEntriesSubject.next(e.data),this.blogEntries.set(e.data),this.isLoading.set(!1)},error:e=>{console.error("Error fetching blog entries:",e),this.isLoading.set(!1)}})}selectBlog(e){this.selectedBlogId.set(e)}static{this.\u0275fac=function(n){return new(n||t)(I(T))}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Q(t,d){t&1&&(o(0,"div",3),l(1,"img",4),i())}function V(t,d){if(t&1&&(o(0,"div",9),l(1,"app-blog-card",10),i()),t&2){let e=d.$implicit,n=u(3);a(),g("blogEntry",e)("selectedBlogId",n.blogState.selectedBlogId)}}function W(t,d){if(t&1&&(o(0,"div",6)(1,"div",7),b(2,V,2,2,"div",8),i()()),t&2){let e=u(2);a(2),g("ngForOf",e.blogSignals())}}function X(t,d){if(t&1&&b(0,W,3,1,"div",5),t&2){let e=u(),n=x(6);g("ngIf",e.blogSignals()&&e.blogSignals().length>0)("ngIfElse",n)}}function Z(t,d){t&1&&(o(0,"div",11),l(1,"img",12),o(2,"p"),c(3,"No blog entries available."),i()())}var bt=(()=>{class t{constructor(e){this.blogState=e,this.blogSignals=L(()=>this.blogState.blogEntries().map(n=>s(n)))}ngOnInit(){this.blogState.fetchBlogEntries()}static{this.\u0275fac=function(n){return new(n||t)(f(J))}}static{this.\u0275cmp=p({type:t,selectors:[["app-blog-list-layout"]],standalone:!0,features:[C],decls:7,vars:2,consts:[["content",""],["noEntries",""],["class","loading-spinner",4,"ngIf","ngIfElse"],[1,"loading-spinner"],["src","../../../../../assets/images/loading_animation.gif","alt","Loading...",1,"loading-gif"],["class","container",4,"ngIf","ngIfElse"],[1,"container"],[1,"row","flex-wrap","blog-card-list-row",2,"display","flex","flex-wrap","wrap"],["class","col-12 col-sm-6 col-md-4 col-lg-3 mb-4",4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","mb-4"],[3,"blogEntry","selectedBlogId"],[1,"no-entries-container","text-center"],["src","../../../../../assets/images/no_data.jpg","alt","No blog entries",1,"no-entries-image"]],template:function(n,r){if(n&1&&(o(0,"h1"),c(1,"Blogs"),i(),b(2,Q,2,0,"div",2)(3,X,1,2,"ng-template",null,0,h)(5,Z,4,0,"ng-template",null,1,h)),n&2){let m=x(4);a(2),g("ngIf",r.blogState.isLoading())("ngIfElse",m)}},dependencies:[D,j,k,G],styles:[".blog-list[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:0}.blog-list[_ngcontent-%COMP%]   .blog-card-list-row[_ngcontent-%COMP%]{display:flex!important;flex-wrap:wrap!important}.no-entries-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:50px}.no-entries-container[_ngcontent-%COMP%]   .no-entries-image[_ngcontent-%COMP%]{width:30%;height:auto;margin-bottom:20px;opacity:.7}.no-entries-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#6c757d}.loading-spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.loading-gif[_ngcontent-%COMP%]{width:50%}"],changeDetection:0})}}return t})();export{bt as BlogListLayoutComponent};
import{l as D,m as v,n as I,o as k,p as P,q as z,r as B,s as N,t as H}from"./chunk-5SR4EZGR.js";import{b as V}from"./chunk-AVWURRJT.js";import{c as R}from"./chunk-OJWTNCDC.js";import{h as G}from"./chunk-GBBMACSP.js";import{p as O,x as _}from"./chunk-SWZZ4WDK.js";import{$a as M,Ba as F,Ca as u,Ga as p,Ka as c,Nb as S,Ob as A,Pa as n,Qa as o,R as f,Ra as g,Tb as q,Wa as h,Ya as w,fb as s,gb as m,hb as b,ja as T,kb as l,lb as a,ua as t,xb as L,ya as C}from"./chunk-SCPIGO2T.js";var y=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=u({type:e});static \u0275inj=f({imports:[_,O,_]})}return e})();var Q=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=u({type:e});static \u0275inj=f({})}return e})();var U=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=u({type:e});static \u0275inj=f({imports:[_,y,y,Q,_]})}return e})();function J(e,x){e&1&&(n(0,"small"),s(1),l(2,"translate"),o()),e&2&&(t(),m(a(2,1,"ADD_BLOG.BLOG_TITLE_REQUIRED")))}function ee(e,x){e&1&&(n(0,"small"),s(1),l(2,"translate"),o()),e&2&&(t(),b(" ",a(2,1,"ADD_BLOG.BLOG_TITLE_MINLENGTH")," "))}function te(e,x){if(e&1&&(n(0,"div",17),p(1,J,3,3,"small",18)(2,ee,3,3,"small",18),o()),e&2){let i=w();t(),c("ngIf",i.title==null||i.title.errors==null?null:i.title.errors.required),t(),c("ngIf",i.title==null||i.title.errors==null?null:i.title.errors.minlength)}}function ie(e,x){e&1&&(n(0,"small"),s(1),l(2,"translate"),o()),e&2&&(t(),m(a(2,1,"ADD_BLOG.BLOG_CONTENT_REQUIRED")))}function oe(e,x){e&1&&(n(0,"small"),s(1),l(2,"translate"),o()),e&2&&(t(),b(" ",a(2,1,"ADD_BLOG.BLOG_CONTENT_MINLENGTH")," "))}function ne(e,x){if(e&1&&(n(0,"div",17),p(1,ie,3,3,"small",18)(2,oe,3,3,"small",18),o()),e&2){let i=w();t(),c("ngIf",i.content==null||i.content.errors==null?null:i.content.errors.required),t(),c("ngIf",i.content==null||i.content.errors==null?null:i.content.errors.minlength)}}var We=(()=>{class e{constructor(i,r,d){this.formBuilder=i,this.blogService=r,this.router=d,this.isLoading=T(!1),this.blogForm=this.formBuilder.group({title:["",[v.required,v.minLength(5)]],content:["",[v.required,v.minLength(10)]],headerImageUrl:[""]})}get title(){return this.blogForm.get("title")}get content(){return this.blogForm.get("content")}onSubmit(){if(this.blogForm.valid){this.isLoading.set(!0);let i=this.blogForm.value;this.blogService.savePost(i).subscribe({next:()=>{this.isLoading.set(!1),this.router.navigate(["/"]).then(r=>{})},error:r=>{this.isLoading.set(!1),console.error("Failed to create blog:",r)}})}}resetForm(){this.blogForm.reset()}static{this.\u0275fac=function(r){return new(r||e)(C(N),C(V),C(S))}}static{this.\u0275cmp=F({type:e,selectors:[["app-add-blog-page"]],decls:37,vars:34,consts:[[1,"add-blog-container"],[1,"add-blog-card"],[1,"form-title"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","title",1,"form-label"],["type","text","id","title","formControlName","title","data-gramm","false",1,"form-control",3,"placeholder"],["class","error-message",4,"ngIf"],["for","content",1,"form-label"],["id","content","formControlName","content","rows","5","data-gramm","false",1,"form-control",3,"placeholder"],["for","headerImageUrl",1,"form-label"],["type","url","id","headerImageUrl","formControlName","headerImageUrl",1,"form-control",3,"placeholder"],[1,"form-actions"],["type","submit",1,"btn","button","button--primary",3,"disabled"],["type","button",1,"btn","button","button--secondary",3,"click"],[1,"back-to-overview"],["routerLink","/",1,"back-link"],[1,"error-message"],[4,"ngIf"]],template:function(r,d){r&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),s(3),l(4,"translate"),o(),n(5,"form",3),h("ngSubmit",function(){return d.onSubmit()}),n(6,"div",4)(7,"label",5),s(8),l(9,"translate"),o(),g(10,"input",6),l(11,"translate"),p(12,te,3,2,"div",7),o(),n(13,"div",4)(14,"label",8),s(15),l(16,"translate"),o(),g(17,"textarea",9),l(18,"translate"),p(19,ne,3,2,"div",7),o(),n(20,"div",4)(21,"label",10),s(22),l(23,"translate"),o(),g(24,"input",11),l(25,"translate"),o(),n(26,"div",12)(27,"button",13),s(28),l(29,"translate"),o(),n(30,"button",14),h("click",function(){return d.resetForm()}),s(31),l(32,"translate"),o()()(),n(33,"div",15)(34,"a",16),s(35),l(36,"translate"),o()()()()),r&2&&(t(3),m(a(4,14,"ADD_BLOG.TITLE")),t(2),c("formGroup",d.blogForm),t(3),m(a(9,16,"ADD_BLOG.BLOG_TITLE")),t(2),M("placeholder",a(11,18,"ADD_BLOG.BLOG_TITLE_PLACEHOLDER")),t(2),c("ngIf",(d.title==null?null:d.title.touched)&&(d.title==null?null:d.title.invalid)),t(3),m(a(16,20,"ADD_BLOG.BLOG_CONTENT")),t(2),M("placeholder",a(18,22,"ADD_BLOG.BLOG_CONTENT_PLACEHOLDER")),t(2),c("ngIf",(d.content==null?null:d.content.touched)&&(d.content==null?null:d.content.invalid)),t(3),m(a(23,24,"ADD_BLOG.IMAGE_URL")),t(2),M("placeholder",a(25,26,"ADD_BLOG.BLOG_IMAGE_URL_PLACEHOLDER")),t(3),c("disabled",d.blogForm.invalid),t(),b(" ",a(29,28,"ADD_BLOG.SAVE_BLOG")," "),t(3),b(" ",a(32,30,"ADD_BLOG.REFRESH")," "),t(4),m(a(36,32,"ADD_BLOG.BACK_TO_ALL_BLOGS")))},dependencies:[H,P,D,I,k,z,B,G,y,U,R,A,L,q],styles:[".add-blog-container[_ngcontent-%COMP%]{max-width:85%;margin:0 auto;padding:20px;height:100vh}.add-blog-container[_ngcontent-%COMP%]   .add-blog-card[_ngcontent-%COMP%]{background:#fff;padding:20px;border-radius:8px;box-shadow:0 4px 8px #0000001a}.add-blog-container[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{text-align:center;color:#8b0000;font-size:1.8rem;margin-bottom:20px}.add-blog-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:20px}.add-blog-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block}.add-blog-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:100%;padding:10px;font-size:1rem;border:1px solid #ccc;border-radius:4px}.add-blog-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{margin-top:5px}.add-blog-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:red;font-size:.9rem}.add-blog-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.add-blog-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{cursor:pointer}.add-blog-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled{background-color:gray!important;color:#fff!important;border-color:gray!important;cursor:not-allowed}.add-blog-container[_ngcontent-%COMP%]   .back-to-overview[_ngcontent-%COMP%]{text-align:center;margin-top:20px}"]})}}return e})();export{We as AddBlogPageComponent};

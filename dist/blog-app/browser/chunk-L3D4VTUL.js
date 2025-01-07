import{l as k,m as g,n as R,o as O,p as I,q as P,r as A,s as D,t as z}from"./chunk-YSHEK743.js";import{b as N}from"./chunk-YU6RNXPN.js";import"./chunk-ZCM4UBPU.js";import{h as B}from"./chunk-KDGS5THL.js";import{Da as d,Gb as E,Hb as S,Ia as o,Ja as i,Ka as _,O as c,Pa as u,Ra as b,S as v,T as m,Yb as T,Za as l,bb as y,dc as h,ic as L,na as a,oa as s,qb as F,sb as M,va as w,ya as f}from"./chunk-GUISZH2C.js";var x=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=m({type:e})}static{this.\u0275inj=c({imports:[h,M,T,h]})}}return e})();var V=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=m({type:e})}static{this.\u0275inj=c({})}}return e})();var U=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=m({type:e})}static{this.\u0275inj=c({imports:[h,x,x,V,h]})}}return e})();function Y(e,p){e&1&&(o(0,"small"),l(1,"Title is required."),i())}function K(e,p){e&1&&(o(0,"small"),l(1," Title must be at least 5 characters long. "),i())}function X(e,p){if(e&1&&(o(0,"div",17),f(1,Y,2,0,"small",18)(2,K,2,0,"small",18),i()),e&2){let t=b();a(),d("ngIf",t.title==null||t.title.errors==null?null:t.title.errors.required),a(),d("ngIf",t.title==null||t.title.errors==null?null:t.title.errors.minlength)}}function J(e,p){e&1&&(o(0,"small"),l(1,"Content is required."),i())}function ee(e,p){e&1&&(o(0,"small"),l(1," Content must be at least 10 characters long. "),i())}function te(e,p){if(e&1&&(o(0,"div",17),f(1,J,2,0,"small",18)(2,ee,2,0,"small",18),i()),e&2){let t=b();a(),d("ngIf",t.content==null||t.content.errors==null?null:t.content.errors.required),a(),d("ngIf",t.content==null||t.content.errors==null?null:t.content.errors.minlength)}}var Ge=(()=>{class e{constructor(t,n,r){this.formBuilder=t,this.blogService=n,this.router=r,this.isLoading=w(!1),this.blogForm=this.formBuilder.group({title:["",[g.required,g.minLength(5)]],content:["",[g.required,g.minLength(10)]],headerImageUrl:[""]})}get title(){return this.blogForm.get("title")}get content(){return this.blogForm.get("content")}onSubmit(){if(this.blogForm.valid){this.isLoading.set(!0);let t=this.blogForm.value;this.blogService.savePost(t).subscribe({next:()=>{this.isLoading.set(!1),this.router.navigate(["/"]).then(n=>{})},error:n=>{this.isLoading.set(!1),console.error("Failed to create blog:",n)}})}}resetForm(){this.blogForm.reset()}static{this.\u0275fac=function(n){return new(n||e)(s(D),s(N),s(E))}}static{this.\u0275cmp=v({type:e,selectors:[["app-add-blog-page"]],standalone:!0,features:[y],decls:27,vars:4,consts:[[1,"add-blog-container"],[1,"add-blog-card"],[1,"form-title"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","title",1,"form-label"],["type","text","id","title","formControlName","title","placeholder","Enter blog title","data-gramm","false",1,"form-control"],["class","error-message",4,"ngIf"],["for","content",1,"form-label"],["id","content","formControlName","content","placeholder","Write your blog content here","rows","5","data-gramm","false",1,"form-control"],["for","headerImageUrl",1,"form-label"],["type","url","id","headerImageUrl","formControlName","headerImageUrl","placeholder","Enter image URL",1,"form-control"],[1,"form-actions"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"back-to-overview"],["routerLink","/",1,"back-link"],[1,"error-message"],[4,"ngIf"]],template:function(n,r){n&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),l(3,"Add New Blog"),i(),o(4,"form",3),u("ngSubmit",function(){return r.onSubmit()}),o(5,"div",4)(6,"label",5),l(7,"Blog Title *"),i(),_(8,"input",6),f(9,X,3,2,"div",7),i(),o(10,"div",4)(11,"label",8),l(12,"Blog Content *"),i(),_(13,"textarea",9),f(14,te,3,2,"div",7),i(),o(15,"div",4)(16,"label",10),l(17,"Image URL (Optional)"),i(),_(18,"input",11),i(),o(19,"div",12)(20,"button",13),l(21," Save Blog "),i(),o(22,"button",14),u("click",function(){return r.resetForm()}),l(23," Refresh "),i()()(),o(24,"div",15)(25,"a",16),l(26,"\u2190 Back to All Blogs"),i()()()()),n&2&&(a(4),d("formGroup",r.blogForm),a(5),d("ngIf",(r.title==null?null:r.title.touched)&&(r.title==null?null:r.title.invalid)),a(5),d("ngIf",(r.content==null?null:r.content.touched)&&(r.content==null?null:r.content.invalid)),a(6),d("disabled",r.blogForm.invalid))},dependencies:[z,I,k,R,O,P,A,B,x,U,L,S,F],styles:[".add-blog-container[_ngcontent-%COMP%]{max-width:600px;margin:0 auto;padding:20px}.add-blog-container[_ngcontent-%COMP%]   .add-blog-card[_ngcontent-%COMP%]{background:#fff;padding:20px;border-radius:8px;box-shadow:0 4px 8px #0000001a}.add-blog-container[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{text-align:center;color:#8b0000;font-size:1.8rem;margin-bottom:20px}.add-blog-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:20px}.add-blog-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px;display:block}.add-blog-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:100%;padding:10px;font-size:1rem;border:1px solid #ccc;border-radius:4px}.add-blog-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{margin-top:5px}.add-blog-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:red;font-size:.9rem}.add-blog-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.add-blog-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 20px;font-size:1rem;border:none;border-radius:4px;cursor:pointer}.add-blog-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{background-color:#8b0000;color:#fff}.add-blog-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]{background-color:#6c757d;color:#fff}.add-blog-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled{background-color:gray;cursor:not-allowed}.add-blog-container[_ngcontent-%COMP%]   .back-to-overview[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.add-blog-container[_ngcontent-%COMP%]   .back-to-overview[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]{text-decoration:none;color:#8b0000;font-weight:700}.add-blog-container[_ngcontent-%COMP%]   .back-to-overview[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})}}return e})();export{Ge as AddBlogPageComponent};

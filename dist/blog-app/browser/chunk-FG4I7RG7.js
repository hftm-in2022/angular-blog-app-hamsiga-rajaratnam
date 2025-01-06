import{a as S}from"./chunk-KEM5X5Y5.js";import{a as z,b as T,c as j,e as A,f as F}from"./chunk-KDGS5THL.js";import{$a as b,Da as d,Eb as w,Gb as E,Ia as a,Ja as n,Ka as _,Na as P,Pa as v,Ra as g,S as f,Z as M,Za as o,_ as u,_a as p,bb as h,cb as y,db as I,gc as k,na as r,oa as m,qb as D,rb as B,va as s,ya as O}from"./chunk-GUISZH2C.js";function V(e,x){if(e&1){let t=P();a(0,"div",3)(1,"mat-card",4)(2,"mat-card-header")(3,"mat-card-title",5),o(4),n()(),a(5,"mat-card-content")(6,"div",6)(7,"span")(8,"mat-icon"),o(9,"person"),n(),o(10),n(),a(11,"span")(12,"mat-icon"),o(13,"calendar_today"),n(),o(14),y(15,"date"),n()(),_(16,"hr",7),a(17,"div",8)(18,"p"),o(19),n()(),_(20,"hr",7),n(),a(21,"mat-card-actions")(22,"button",9),v("click",function(){M(t);let l=g();return u(l.goBack())}),a(23,"mat-icon"),o(24,"arrow_back"),n(),o(25," Back to Overview "),n()()()()}if(e&2){let t,i,l,C,c=g();r(4),p((t=c.blog())==null?null:t.title),r(6),b(" ",(i=c.blog())==null?null:i.author,""),r(4),b(" ",I(15,4,(l=c.blog())==null?null:l.createdAt),""),r(5),p((C=c.blog())==null?null:C.content)}}function R(e,x){e&1&&(a(0,"div",10),o(1,"Loading..."),n())}function H(e,x){if(e&1&&(a(0,"div",11),o(1),n()),e&2){let t=g();r(),p(t.error())}}var X=(()=>{class e{constructor(t,i){this.route=t,this.router=i,this.blog=s(null),this.loading=!0,this.error=s(null),this.loadBlogDetails()}loadBlogDetails(){let t=this.route.snapshot.data.blog;t?(this.blog.set(t),this.loading=!1):(this.error.set("Failed to load blog details."),this.loading=!1)}goBack(){this.router.navigate(["/blogs"])}static{this.\u0275fac=function(i){return new(i||e)(m(w),m(E))}}static{this.\u0275cmp=f({type:e,selectors:[["app-blog-detail"]],standalone:!0,features:[h],decls:3,vars:3,consts:[["class","blog-detail",4,"ngIf"],["class","loading",4,"ngIf"],["class","error",4,"ngIf"],[1,"blog-detail"],[1,"blog-detail-card"],[1,"blog-title"],[1,"meta-info"],[1,"divider"],[1,"content"],["mat-raised-button","","color","warn",3,"click"],[1,"loading"],[1,"error"]],template:function(i,l){i&1&&O(0,V,26,6,"div",0)(1,R,2,0,"div",1)(2,H,2,1,"div",2),i&2&&(d("ngIf",!l.loading),r(),d("ngIf",l.loading),r(),d("ngIf",l.error()))},dependencies:[B,D,z,F,j,S,A,k,T],styles:[".blog-detail[_ngcontent-%COMP%]{max-width:75%;margin:20px auto;padding:20px}.blog-detail[_ngcontent-%COMP%]   .blog-detail-card[_ngcontent-%COMP%]{border-radius:8px;box-shadow:0 2px 10px #0000001a;background-color:#fff;overflow:hidden}.blog-detail[_ngcontent-%COMP%]   .blog-detail-card[_ngcontent-%COMP%]   .blog-title[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:#8b0000;margin-bottom:10px}.blog-detail[_ngcontent-%COMP%]   .blog-detail-card[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{border:none;border-top:2px solid #ddd}.blog-detail[_ngcontent-%COMP%]   .blog-detail-card[_ngcontent-%COMP%]   .meta-info[_ngcontent-%COMP%]{display:flex;gap:15px;font-size:14px;color:gray;margin-bottom:25px}.blog-detail[_ngcontent-%COMP%]   .blog-detail-card[_ngcontent-%COMP%]   .meta-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.blog-detail[_ngcontent-%COMP%]   .blog-detail-card[_ngcontent-%COMP%]   .meta-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;margin-right:5px;color:#8b0000}.blog-detail[_ngcontent-%COMP%]   .blog-detail-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:25px;font-size:16px;line-height:1.6;color:#333}.blog-detail[_ngcontent-%COMP%]   .blog-detail-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;margin-top:10px;margin-bottom:10px}.blog-detail[_ngcontent-%COMP%]   .blog-detail-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#8b0000;color:#fff;text-transform:capitalize;font-weight:700;display:flex;align-items:center;gap:5px;padding:8px 16px;border-radius:4px}.blog-detail[_ngcontent-%COMP%]   .blog-detail-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.blog-detail[_ngcontent-%COMP%]   .blog-detail-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#a11515}.blog-detail[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{text-align:center;font-size:18px;color:#8b0000}.blog-detail[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{text-align:center;font-size:16px;color:red;margin-top:20px}"],changeDetection:0})}}return e})();export{X as BlogDetailComponent};

import{a as S}from"./chunk-4SSRSEG6.js";import{B as c,E as o,F as l,H as v,I as _,J as g,N as r,O as p,P as s,Q as h,R as C,S as I,X as B,Y as M,da as O,fa as P,l as u,n as f,o as x,u as i,v as d,z as b}from"./chunk-AKGPE64I.js";function y(e,m){if(e&1){let t=v();o(0,"div",3)(1,"h2"),r(2),l(),o(3,"p",4),r(4),l(),o(5,"p",5),r(6),C(7,"date"),l(),o(8,"div",6)(9,"p"),r(10),l()(),o(11,"button",7),_("click",function(){f(t);let a=g();return x(a.goBack())}),r(12,"Back to Overview"),l()()}if(e&2){let t=g();i(2),p(t.blog==null?null:t.blog.title),i(2),s("By: ",t.blog==null?null:t.blog.author,""),i(2),s("Published on: ",I(7,4,t.blog==null?null:t.blog.createdAt),""),i(4),p(t.blog==null?null:t.blog.content)}}function D(e,m){e&1&&(o(0,"div",8),r(1,"Loading..."),l())}function k(e,m){if(e&1&&(o(0,"div",9),r(1),l()),e&2){let t=g();i(),p(t.error)}}var F=(()=>{class e{constructor(t,n,a){this.route=t,this.blogService=n,this.router=a,this.loading=!0}ngOnInit(){let t=this.route.snapshot.paramMap.get("id");t&&this.blogService.getBlogById(t).subscribe({next:n=>{this.blog=n,this.loading=!1},error:n=>{this.error="Failed to load blog details.",this.loading=!1}})}goBack(){this.router.navigate(["/blogs"])}static{this.\u0275fac=function(n){return new(n||e)(d(O),d(S),d(P))}}static{this.\u0275cmp=u({type:e,selectors:[["app-blog-detail"]],standalone:!0,features:[h],decls:3,vars:3,consts:[["class","blog-detail",4,"ngIf"],["class","loading",4,"ngIf"],["class","error",4,"ngIf"],[1,"blog-detail"],[1,"author"],[1,"date"],[1,"content"],[3,"click"],[1,"loading"],[1,"error"]],template:function(n,a){n&1&&b(0,y,13,6,"div",0)(1,D,2,0,"div",1)(2,k,2,1,"div",2),n&2&&(c("ngIf",!a.loading),i(),c("ngIf",a.loading),i(),c("ngIf",a.error))},dependencies:[M,B],styles:[".blog-detail[_ngcontent-%COMP%]{max-width:800px;margin:0 auto;padding:20px}.blog-detail[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%], .blog-detail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{color:#888;font-size:14px}.blog-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin-top:20px;font-size:16px;line-height:1.6}.blog-detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:20px;padding:10px 15px;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer}"]})}}return e})();export{F as BlogDetailComponent};

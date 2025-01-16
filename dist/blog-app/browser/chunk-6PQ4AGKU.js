import{a as S,b as I}from"./chunk-KEM5X5Y5.js";import{a as L}from"./chunk-ZCM4UBPU.js";import{Da as M,Gb as h,Ia as n,Ja as i,Ka as _,Na as p,Pa as l,Ra as s,S as d,Ya as O,Z as a,Za as c,_ as r,bb as f,eb as x,gc as v,na as u,oa as m,qb as b,va as C,ya as P}from"./chunk-GUISZH2C.js";function k(o,w){if(o&1){let t=p();n(0,"div",3)(1,"div",4),_(2,"img",5),n(3,"div",6)(4,"button",7),l("click",function(){a(t);let g=s();return r(g.login())}),c(5," Login "),i()()()()}}function E(o,w){if(o&1){let t=p();n(0,"div",4),_(1,"img",8),n(2,"p"),c(3,"You are already logged in. What would you like to do?"),i(),n(4,"div",6)(5,"button",7),l("click",function(){a(t);let g=s();return r(g.logout())}),n(6,"mat-icon"),c(7,"logout"),i(),c(8," Logout "),i(),n(9,"button",7),l("click",function(){a(t);let g=s();return r(g.goToHome())}),n(10,"mat-icon"),c(11,"arrow_back"),i(),c(12," Back to Home "),i()()()}}var R=(()=>{class o{constructor(t,e){this.oidcService=t,this.router=e,this.isLoggedIn=C(!1),this.checkLoginStatus()}checkLoginStatus(){this.oidcService.isAuthenticated$.subscribe(t=>{this.isLoggedIn.set(t.isAuthenticated)})}login(){this.oidcService.authorize()}logout(){this.oidcService.logoff().subscribe(()=>{this.router.navigate(["/"]).then(()=>{})})}goToHome(){this.router.navigate(["/"])}static{this.\u0275fac=function(e){return new(e||o)(m(L),m(h))}}static{this.\u0275cmp=d({type:o,selectors:[["app-login-page"]],standalone:!0,features:[f],decls:4,vars:2,consts:[["loggedInTemplate",""],[1,"login-page-container"],["class","content",4,"ngIf","ngIfElse"],[1,"content"],[1,"logged-in-container"],["src","assets/images/login.svg","alt","Login Illustration",1,"login-image"],[1,"button-container"],["mat-raised-button","",1,"button","button--primary","login-btn",3,"click"],["src","assets/images/user-logged-in.svg","alt","Logged In Illustration",1,"login-image"]],template:function(e,g){if(e&1&&(n(0,"div",1),P(1,k,6,0,"div",2)(2,E,13,0,"ng-template",null,0,x),i()),e&2){let y=O(3);u(),M("ngIf",!g.isLoggedIn())("ngIfElse",y)}},dependencies:[v,I,S,b],styles:[".login-page-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100vh}.login-page-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .login-page-container[_ngcontent-%COMP%]   .logged-in-container[_ngcontent-%COMP%]{text-align:center;padding:20px;width:100%;border-radius:10px}.login-page-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .login-image[_ngcontent-%COMP%], .login-page-container[_ngcontent-%COMP%]   .logged-in-container[_ngcontent-%COMP%]   .login-image[_ngcontent-%COMP%]{width:100%;max-width:625px;margin-bottom:20px}.login-page-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .login-page-container[_ngcontent-%COMP%]   .logged-in-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:20px 0;font-size:18px;color:#333}.login-page-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%], .login-page-container[_ngcontent-%COMP%]   .logged-in-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:15px}.login-page-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .login-page-container[_ngcontent-%COMP%]   .logged-in-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px}.login-page-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .login-page-container[_ngcontent-%COMP%]   .logged-in-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px}"]})}}return o})();export{R as LoginPageComponent};
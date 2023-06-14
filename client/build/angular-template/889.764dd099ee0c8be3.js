"use strict";(self.webpackChunkangular_template=self.webpackChunkangular_template||[]).push([[889],{8889:(R,m,o)=>{o.r(m),o.d(m,{default:()=>b});var _=o(6895),g=o(4281),f=o(8736),a=o(1624),E=o(2648),v=o(2474),h=o(1724),p=o(5593),u=o(8433),M=o(1019),d=o(3210),c=o(1098),t=o(4650),P=o(9653),C=o(7185),D=o(1422),W=o(805),T=o(4688);const y=["dynamicForm"];function A(s,i){1&s&&t._UZ(0,"error-badge",10),2&s&&t.Q6J("error",i.ngIf)}function x(s,i){if(1&s){const n=t.EpF();t.TgZ(0,"div",11)(1,"p",12),t._uU(2),t.qZA(),t.TgZ(3,"p-button",13),t.NdJ("click",function(){const l=t.CHM(n).$implicit,O=t.oxw();return t.KtG(O.deleteOffensiveWord(O.w$(l).id))}),t.qZA()()}if(2&s){const n=i.$implicit,e=t.oxw();t.xp6(2),t.Oqu(e.w$(n).word)}}function I(s,i){1&s&&t._UZ(0,"loading")}const L=function(){return[]},U=[{type:g.fS.TEXT,name:"word",label:"Offensive word",placeholder:"Add an offensive word",validators:[M.t]}];let b=(()=>{class s{constructor(n,e){this.store=n,this.toast=e,this.words$=this.store.select(c.y.selectEntities),this.loading$=this.store.select(c.y.selectLoading),this.error$=this.store.select(c.y.selectError),this.structure$=this.store.select(f.L.selectStructure),this.data$=this.store.select(f.L.selectData),this.w$=r=>r}ngOnInit(){this.store.dispatch(d.v.loadWords()),this.store.dispatch(a.i.setStructure({structure:U}))}submit(){this.dynamicForm.submitted(),this.dynamicForm.form.valid?this.store.dispatch(d.v.createWord({word:this.dynamicForm.form.controls.word.value})):this.handleInvalidForm()}updateForm(n){this.store.dispatch(a.i.updateData({state:n}))}handleInvalidForm(){this.toast.error("Form submission failed. Please correct the highlighted fields.","Error")}ngOnDestroy(){this.store.dispatch(a.i.destroyForm())}deleteOffensiveWord(n){this.store.dispatch(d.v.deleteWord({id:n}))}}return s.\u0275fac=function(n){return new(n||s)(t.Y36(P.yh),t.Y36(C._W))},s.\u0275cmp=t.Xpm({type:s,selectors:[["offensive-word-management"]],viewQuery:function(n,e){if(1&n&&t.Gf(y,7),2&n){let r;t.iGM(r=t.CRH())&&(e.dynamicForm=r.first)}},standalone:!0,features:[t.jDz],decls:15,vars:12,consts:[[1,"private-page-container"],[1,"inline-block","m-auto"],[3,"error",4,"ngIf"],[1,"form-container"],[1,"form",3,"data$","structure$","updateForm"],["dynamicForm",""],["label","Add",3,"click"],[3,"options"],["pTemplate","item"],[4,"ngIf"],[3,"error"],[1,"flex","align-items-center","justify-content-between","gap-2","w-100"],[1,"word"],["styleClass","p-button-outlined p-button-rounded p-button-danger p-button-text p-button-sm ","icon","pi pi-times",1,"delete-button",3,"click"]],template:function(n,e){if(1&n&&(t.TgZ(0,"section",0)(1,"h1"),t._uU(2,"Offensive Word Management"),t.qZA(),t.TgZ(3,"div",1),t.YNc(4,A,1,1,"error-badge",2),t.ALo(5,"async"),t.TgZ(6,"div",3)(7,"dynamic-form",4,5),t.NdJ("updateForm",function(l){return e.updateForm(l)}),t.qZA(),t.TgZ(9,"p-button",6),t.NdJ("click",function(){return e.submit()}),t.qZA()(),t.TgZ(10,"p-listbox",7),t.ALo(11,"async"),t.YNc(12,x,4,1,"ng-template",8),t.qZA()(),t.YNc(13,I,1,0,"loading",9),t.ALo(14,"async"),t.qZA()),2&n){let r;t.xp6(4),t.Q6J("ngIf",t.lcZ(5,5,e.error$)),t.xp6(3),t.Q6J("data$",e.data$)("structure$",e.structure$),t.xp6(3),t.Q6J("options",null!==(r=t.lcZ(11,7,e.words$))&&void 0!==r?r:t.DdM(11,L)),t.xp6(3),t.Q6J("ngIf",t.lcZ(14,9,e.loading$))}},dependencies:[_.ez,_.O5,_.Ov,E.N,D.r,h.Z,p.hJ,p.zx,W.jx,u.ON,u.Ri,v.I,T.N],styles:[".private-page-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.form-container[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:20px}dynamic-form[_ngcontent-%COMP%]{display:inline-flex}p-button[_ngcontent-%COMP%]{margin-left:15px;margin-top:-4px}.inline-block[_ngcontent-%COMP%]{display:inline-block}.m-auto[_ngcontent-%COMP%]{margin-inline:auto}[_nghost-%COMP%]  .p-listbox .p-listbox-list .p-listbox-item.p-highlight{color:#4957b6;background:#fffefc}[_nghost-%COMP%]  .p-inputtext{width:300px}"],changeDetection:0}),s})()}}]);
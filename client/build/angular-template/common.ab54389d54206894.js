"use strict";(self.webpackChunkangular_template=self.webpackChunkangular_template||[]).push([[592],{7967:(T,g,o)=>{o.d(g,{X:()=>w});var e=o(4650),m=o(6895),x=o(2524),u=o(8271),p=o(5593),v=o(9625),f=o(4006),A=o(143);let h=(()=>{class n{constructor(){this.close=new e.vpe,this.replied=new e.vpe,this.comment=new f.NI("")}onCommentReply(){this.isValidReply()&&this.replied.emit(this.comment.value)}isValidReply(){return!!(this.comment.value&&this.comment.value.length>0)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["add-reply"]],outputs:{close:"close",replied:"replied"},standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"container","border-2","surface-border"],["placeholder","What are your thoughts?",3,"formControl"],[1,"button-container"],["label","Cancel","styleClass","p-button-sm p-button-text",3,"click"],["label","Reply","styleClass","p-button-sm",3,"click"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"custom-text-area-field",1),e.TgZ(2,"div",2)(3,"p-button",3),e.NdJ("click",function(){return l.close.emit()}),e.qZA(),e.TgZ(4,"p-button",4),e.NdJ("click",function(){return l.onCommentReply()}),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("formControl",l.comment))},dependencies:[m.ez,v.U,A.u,p.hJ,p.zx,f.UX,f.JJ,f.oH],styles:[".container[_ngcontent-%COMP%]{margin-top:15px;display:flex;flex-direction:column;background-color:#f6f7f8;border-radius:8px}.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding-bottom:5px}.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]{margin-right:16px}"],changeDetection:0}),n})();var y=o(2333);function d(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",22)(1,"p-button",23),e.NdJ("click",function(){e.CHM(t);const c=e.oxw(2);return e.KtG(c.commentApproved.emit(c.comment.id))}),e.qZA(),e.TgZ(2,"p-button",24),e.NdJ("click",function(){e.CHM(t);const c=e.oxw(2);return e.KtG(c.commentRejected.emit(c.comment.id))}),e.qZA()()}2&n&&(e.xp6(1),e.Q6J("label","Approve"))}function _(n,s){1&n&&(e.TgZ(0,"span",25),e._uU(1,"Edited"),e.qZA())}function i(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"p-button",26),e.NdJ("click",function(){e.CHM(t);const c=e.oxw(2);return e.KtG(c.openedReplyBox.emit(c.comment.id))}),e.qZA()}}const a=function(){return{color:"#ffffff"}},r=function(){return[]};function C(n,s){if(1&n&&(e.TgZ(0,"div",9)(1,"div",10)(2,"div")(3,"span",11),e._UZ(4,"p-avatar",12),e.qZA(),e.TgZ(5,"span",13)(6,"b",14),e._uU(7),e.qZA()(),e.TgZ(8,"span",15),e._uU(9),e.ALo(10,"ago"),e.ALo(11,"ago"),e.qZA()(),e.YNc(12,d,3,1,"div",16),e.YNc(13,_,2,0,"span",17),e.qZA(),e._UZ(14,"p",18),e.ALo(15,"async"),e.TgZ(16,"div",19)(17,"div",20),e.YNc(18,i,1,0,"p-button",21),e.qZA()()()),2&n){const t=e.oxw();let l;e.xp6(4),e.Akn(e.DdM(19,a)),e.Q6J("label",t.getAuthorInitials(t.comment.author)),e.xp6(3),e.AsE("",null==t.comment.author?null:t.comment.author.firstName," ",null==t.comment.author?null:t.comment.author.lastName,""),e.xp6(2),e.Oqu(t.comment.updatedAt?e.lcZ(10,13,t.comment.updatedAt):e.lcZ(11,15,t.comment.createdAt)),e.xp6(3),e.Q6J("ngIf",!t.comment.isApproved&&!t.comment.isRejected&&t.hasAdminPrivileges),e.xp6(1),e.Q6J("ngIf",t.comment.isApproved&&t.comment.updatedAt),e.xp6(1),e.Q6J("highlight",null!==(l=e.lcZ(15,17,t.words$))&&void 0!==l?l:e.DdM(20,r))("text",t.comment.content)("classToApply","offensive-word")("innerHTML",t.comment.content,e.oJD),e.xp6(4),e.Q6J("ngIf",null===t.comment.reply&&t.canReply&&t.comment.isApproved)}}function D(n,s){1&n&&(e.TgZ(0,"div",27)(1,"h2",28),e._uU(2,"Comment rejected"),e.qZA()())}function Z(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"add-reply",29),e.NdJ("close",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.closedReplyBox.emit())})("replied",function(c){e.CHM(t);const b=e.oxw();return e.KtG(b.onCommentReply(c))}),e.qZA()}}function M(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",22)(1,"p-button",23),e.NdJ("click",function(){e.CHM(t);const c=e.oxw(3).ngIf,b=e.oxw();return e.KtG(b.commentApproved.emit(c.id))}),e.qZA(),e.TgZ(2,"p-button",24),e.NdJ("click",function(){e.CHM(t);const c=e.oxw(3).ngIf,b=e.oxw();return e.KtG(b.commentRejected.emit(c.id))}),e.qZA()()}2&n&&(e.xp6(1),e.Q6J("label","Approve"))}function R(n,s){1&n&&(e.TgZ(0,"span",25),e._uU(1,"Edited"),e.qZA())}function E(n,s){if(1&n&&(e.TgZ(0,"div",35)(1,"div",10)(2,"div")(3,"span",11),e._UZ(4,"p-avatar",36),e.qZA(),e.TgZ(5,"span",13)(6,"b",14),e._uU(7),e.qZA()(),e.TgZ(8,"span",15),e._uU(9),e.ALo(10,"ago"),e.ALo(11,"ago"),e.qZA()(),e.YNc(12,M,3,1,"div",16),e.YNc(13,R,2,0,"span",17),e.qZA(),e._UZ(14,"p",18),e.ALo(15,"async"),e.qZA()),2&n){const t=e.oxw(2).ngIf,l=e.oxw();let c;e.xp6(4),e.Akn(e.DdM(18,a)),e.Q6J("label",l.getAuthorInitials(t.author)),e.xp6(3),e.AsE("",t.author.firstName," ",t.author.lastName,""),e.xp6(2),e.Oqu(t.updatedAt?e.lcZ(10,12,t.updatedAt):e.lcZ(11,14,t.createdAt)),e.xp6(3),e.Q6J("ngIf",!t.isApproved&&!t.isRejected&&l.hasAdminPrivileges),e.xp6(1),e.Q6J("ngIf",t.isApproved&&t.updatedAt),e.xp6(1),e.Q6J("highlight",null!==(c=e.lcZ(15,16,l.words$))&&void 0!==c?c:e.DdM(19,r))("text",t.content)("classToApply","offensive-word")("innerHTML",t.content,e.oJD)}}function O(n,s){if(1&n&&(e.TgZ(0,"div",32)(1,"div",2),e._UZ(2,"div",33),e.qZA(),e.YNc(3,E,16,20,"div",34),e.qZA()),2&n){const t=e.oxw().ngIf,l=e.MAs(3);e.xp6(3),e.Q6J("ngIf",!t.isRejected)("ngIfElse",l)}}function I(n,s){1&n&&(e.TgZ(0,"div",37)(1,"h2",28),e._uU(2,"Reply rejected"),e.qZA()())}function P(n,s){if(1&n&&(e.ynx(0),e.YNc(1,O,4,2,"div",30),e.YNc(2,I,3,0,"ng-template",null,31,e.W1O),e.BQk()),2&n){const t=s.ngIf,l=e.oxw();e.xp6(1),e.Q6J("ngIf",t.isApproved||l.hasAdminPrivileges)}}let w=(()=>{class n{constructor(){this.canReply=!1,this.hasAdminPrivileges=!1,this.commentApproved=new e.vpe,this.commentRejected=new e.vpe,this.commentReplied=new e.vpe,this.openedReplyBox=new e.vpe,this.closedReplyBox=new e.vpe}getAuthorInitials(t){return t?t.firstName[0].toUpperCase()+t.lastName[0].toUpperCase():""}onCommentReply(t){this.commentReplied.emit({commentId:this.comment.id,content:t,articleId:this.comment.articleId})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["article-comment"]],inputs:{comment:"comment",openedReplyBox$:"openedReplyBox$",canReply:"canReply",words$:"words$",hasAdminPrivileges:"hasAdminPrivileges"},outputs:{commentApproved:"commentApproved",commentRejected:"commentRejected",commentReplied:"commentReplied",openedReplyBox:"openedReplyBox",closedReplyBox:"closedReplyBox"},standalone:!0,features:[e.jDz],decls:11,vars:6,consts:[[1,"mb-6"],[1,"flex"],[1,"flex","flex-column","align-items-center",2,"width","2rem"],[1,"h-full","bg-blue-500",2,"width","2px","min-height","9rem"],[1,"w-100"],["class","article-comment ml-1 surface-card shadow-2 border-round p-3 flex-auto flex flex-column",4,"ngIf","ngIfElse"],["commentRejectedTemplate",""],[3,"close","replied",4,"ngIf"],[4,"ngIf"],[1,"article-comment","ml-1","surface-card","shadow-2","border-round","p-3","flex-auto","flex","flex-column"],[1,"mb-3","flex","justify-content-between"],[1,"text-900","font-medium","inline-block","mr-3"],["shape","circle","styleClass","bg-blue-500 col",1,"avatar",3,"label"],[1,"mr-2"],[1,"color-main"],[1,"text-500","text-sm"],["class","button-bar",4,"ngIf"],["class","font-medium text-500 underline font-italic",4,"ngIf"],[1,"line-height-3","text-700","mb-3",3,"highlight","text","classToApply","innerHTML"],[1,"text-500","flex","align-items-center","gap-4","align-self-end"],[1,"flex","align-items-center","gap-1"],["label","Reply","styleClass","p-button-text p-button-sm","icon","pi pi-comment",3,"click",4,"ngIf"],[1,"button-bar"],["styleClass","p-button-outlined p-button-success p-button-sm ","icon","pi pi-check",1,"edit-button",3,"label","click"],["styleClass","p-button-outlined  p-button-danger  p-button-sm ","label","Reject","icon","pi pi-times",1,"delete-button",3,"click"],[1,"font-medium","text-500","underline","font-italic"],["label","Reply","styleClass","p-button-text p-button-sm","icon","pi pi-comment",3,"click"],[1,"flex","flex-column","justify-content-center","surface-card","shadow-2","border-round","p-3",2,"min-height","9rem"],[1,"underline","text-red-500","text-center"],[3,"close","replied"],["class","mb-5 mt-2 flex ml-n-16",4,"ngIf"],["replyRejectedTemplate",""],[1,"mb-5","mt-2","flex","ml-n-16"],[1,"h-full","bg-orange-500",2,"width","2px","min-height","4rem"],["class","ml-3 surface-card shadow-2 border-round p-3 flex-auto flex flex-column",4,"ngIf","ngIfElse"],[1,"ml-3","surface-card","shadow-2","border-round","p-3","flex-auto","flex","flex-column"],["shape","circle","styleClass","bg-orange-500 col",1,"avatar",3,"label"],[1,"flex","flex-column","justify-content-center","surface-card","shadow-2","border-round","p-3","w-100",2,"min-height","9rem"]],template:function(t,l){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"div",3),e.qZA(),e.TgZ(4,"div",4),e.YNc(5,C,19,21,"div",5),e.YNc(6,D,3,0,"ng-template",null,6,e.W1O),e.YNc(8,Z,1,0,"add-reply",7),e.ALo(9,"async"),e.YNc(10,P,4,1,"ng-container",8),e.qZA()()()),2&t){const c=e.MAs(7);e.xp6(5),e.Q6J("ngIf",!l.comment.isRejected)("ngIfElse",c),e.xp6(3),e.Q6J("ngIf",e.lcZ(9,4,l.openedReplyBox$)===l.comment.id),e.xp6(2),e.Q6J("ngIf",l.comment.reply)}},dependencies:[m.ez,m.O5,m.Ov,x.n,u.F,u.q,p.hJ,p.zx,h,y.Z],styles:["[_nghost-%COMP%]     .p-avatar .p-avatar-text{font-size:1.1rem}.w-100[_ngcontent-%COMP%]{width:100%}.ml-n-16[_ngcontent-%COMP%]{margin-left:-9px}.button-bar[_ngcontent-%COMP%]{display:flex;column-gap:10px}[_nghost-%COMP%]  .p-button.p-button-sm{padding:.421875rem .875rem}"],changeDetection:0}),n})()},3003:(T,g,o)=>{o.d(g,{D:()=>d});var e=o(4650),m=o(6895),x=o(4281),u=o(8736),p=o(1624),v=o(2648),f=o(9653),A=o(1422);const h=["dynamicForm"],y=[{type:x.fS.TEXT,name:"filterBy",label:"Filter By:",placeholder:"Search for specific articles"}];let d=(()=>{class _{constructor(a){this.store=a,this.filtered=new e.vpe,this.structure$=this.store.select(u.L.selectStructure),this.data$=this.store.select(u.L.selectData)}ngOnInit(){this.store.dispatch(p.i.setStructure({structure:y}))}ngOnDestroy(){this.store.dispatch(p.i.resetForm())}updateForm(a){this.filtered.emit(a.data.filterBy)}}return _.\u0275fac=function(a){return new(a||_)(e.Y36(f.yh))},_.\u0275cmp=e.Xpm({type:_,selectors:[["filter-articles"]],viewQuery:function(a,r){if(1&a&&e.Gf(h,7),2&a){let C;e.iGM(C=e.CRH())&&(r.dynamicForm=C.first)}},outputs:{filtered:"filtered"},standalone:!0,features:[e.jDz],decls:2,vars:2,consts:[[1,"form",3,"data$","structure$","updateForm"],["dynamicForm",""]],template:function(a,r){1&a&&(e.TgZ(0,"dynamic-form",0,1),e.NdJ("updateForm",function(D){return r.updateForm(D)}),e.qZA()),2&a&&e.Q6J("data$",r.data$)("structure$",r.structure$)},dependencies:[m.ez,v.N,A.r],changeDetection:0}),_})()},4582:(T,g,o)=>{o.d(g,{F:()=>y});var e=o(4650),m=o(6895),x=o(9507),u=o(5593),p=o(1493),v=o(8505),f=o(1558);const A=function(){return{maxWidth:"680px"}};function h(d,_){if(1&d){const i=e.EpF();e.TgZ(0,"p-dialog",1)(1,"article",2)(2,"header")(3,"h1",3),e._uU(4),e.qZA(),e.TgZ(5,"p-button",4),e.NdJ("click",function(){e.CHM(i);const r=e.oxw();return e.KtG(r.closeDialog())}),e.qZA()(),e.TgZ(6,"div",5)(7,"p"),e._uU(8),e.qZA()(),e.TgZ(9,"footer")(10,"p-button",6),e.NdJ("click",function(){e.CHM(i);const r=e.oxw();return e.KtG(r.onDelete())}),e.qZA(),e.TgZ(11,"p-button",7),e.NdJ("click",function(){e.CHM(i);const r=e.oxw();return e.KtG(r.closeDialog())}),e.qZA()()()()}if(2&d){const i=e.oxw();e.Akn(e.DdM(9,A)),e.Q6J("visible",!0)("modal",!0)("draggable",!1)("resizable",!1)("showHeader",!1),e.xp6(4),e.Oqu(null==i.payload?null:i.payload.title),e.xp6(4),e.Oqu(null==i.payload?null:i.payload.text)}}let y=(()=>{class d{onKeydownHandler(i){this.closeDialog()}constructor(i){this.dialogService=i,this.deleted=new e.vpe,this.dialog$=this.dialogService.dialog$.pipe((0,v.b)(()=>this.payload=this.dialogService.payload)),this.payload=null}ngOnInit(){}onDelete(){this.deleted.emit(this.payload?.data)}closeDialog(){this.dialogService.closeDialog(x.iR.Delete)}}return d.\u0275fac=function(i){return new(i||d)(e.Y36(f.x))},d.\u0275cmp=e.Xpm({type:d,selectors:[["delete-dialog"]],hostBindings:function(i,a){1&i&&e.NdJ("keydown.escape",function(C){return a.onKeydownHandler(C)},!1,e.evT)},outputs:{deleted:"deleted"},standalone:!0,features:[e.jDz],decls:2,vars:3,consts:[[3,"visible","modal","draggable","resizable","style","showHeader",4,"ngIf"],[3,"visible","modal","draggable","resizable","showHeader"],[1,"dialog-container"],[1,"color-main"],["icon","pi pi-times","styleClass","p-button-rounded p-button-outlined p-button-text p-button-sm",1,"close-dialog",3,"click"],[1,"body"],["icon","pi pi-times","styleClass","p-button-danger p-button-sm","label","Delete",3,"click"],["icon","pi pi-times","label","Close","styleClass","p-button p-button-outlined p-button-secondary p-button-sm",3,"click"]],template:function(i,a){if(1&i&&(e.YNc(0,h,12,10,"p-dialog",0),e.ALo(1,"async")),2&i){let r;e.Q6J("ngIf",null==(r=e.lcZ(1,1,a.dialog$))?null:r.delete)}},dependencies:[m.ez,m.O5,m.Ov,u.hJ,u.zx,p.S,p.V],styles:["footer[_ngcontent-%COMP%]{display:flex;column-gap:20px}.body[_ngcontent-%COMP%]{margin:10px 0 17px}"],changeDetection:0}),d})()},123:(T,g,o)=>{o.d(g,{v:()=>v});var e=o(2021);const{selectData:m,selectLoaded:x,selectLoading:u,selectError:p}=e.H,v={selectData:m,selectLoaded:x,selectLoading:u,selectError:p}}}]);
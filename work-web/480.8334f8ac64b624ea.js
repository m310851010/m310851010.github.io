"use strict";(self.webpackChunkwork_web=self.webpackChunkwork_web||[]).push([[480],{2480:(F,g,r)=>{r.r(g),r.d(g,{MyCustomerModule:()=>w});var m=r(1048),u=r(4319),C=r(4574),n=r(9724),p=r(7169),d=r(5535),M=r(5731);const f=["container"],x=["infoWindow"],h=function(){return["/default/home"]};function O(t,c){1&t&&(n.TgZ(0,"div",23)(1,"div",24),n._UZ(2,"img",25),n.qZA(),n.TgZ(3,"div",26),n._uU(4,"\u79d1\u6280\u5927\u53a6"),n.qZA()()),2&t&&(n.Q6J("routerLink",n.DdM(2,h)),n.xp6(2),n.Q6J("src","./assets/images/brand-icon.png",n.LSH))}const P=function(){return[1,2,3]},_=[{path:"",component:(()=>{class t{constructor(){this.mapOptions={resizeEnable:!0,zoom:11,center:[116.397428,39.90923]}}onMapLoadDone(o){const e=o.instance,i=o.AMap;e.clearMap();const s=new i.InfoWindow({isCustom:!0,offset:new i.Pixel(16,-45)}),Z=[{lnglat:[116.368904,39.923423],data:{roomCount:11,ticketCount:11,taskCount:23}},{lnglat:[116.382122,39.921176],data:{roomCount:28,ticketCount:24,taskCount:26}},{lnglat:[116.387271,39.922501],data:{roomCount:43,ticketCount:32,taskCount:58}},{lnglat:[116.398258,39.9146],data:{roomCount:66,ticketCount:45,taskCount:75}}],k=a=>{s.setContent(this.createInfoWindow(a.target.data)),s.open(e,a.target.getPosition())},T=this.createIcon(i,"point-success"),A=this.createIcon(i,"point-error");for(const a of Z){const l=new i.Marker({map:e,position:a.lnglat,icon:Math.floor(3*Math.random())%2==0?T:A});l.data=a.data,l.on("click",k)}e.on("click",()=>{s.close()})}ngOnInit(){}createInfoWindow(o){const e=document.createElement("div");return e.innerHTML=C.M3.format(this.infoWindow.nativeElement.innerHTML,o),e}createIcon(o,e){return new o.Icon({size:new o.Size(26,26),image:`./assets/images/${e}.png`,imageSize:new o.Size(26,26),imageOffset:new o.Pixel(0,0)})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["np-my-customer"]],viewQuery:function(o,e){if(1&o&&(n.Gf(f,7),n.Gf(x,7)),2&o){let i;n.iGM(i=n.CRH())&&(e.container=i.first),n.iGM(i=n.CRH())&&(e.infoWindow=i.first)}},decls:38,vars:12,consts:[[3,"showSidebar","showCustomerList","outerMargin","innerPadding"],["nz-row","",1,"full-height"],["nz-col","","nzFlex","219px",1,"customer-container"],[1,"title"],[1,"customer-list"],["nz-row","","class","customer-item",3,"routerLink",4,"ngFor","ngForOf"],["nz-col","","nzFlex","auto",1,"map-container"],[1,"map-container-placeholder"],[1,"map-box"],["gaode-map","",1,"full-size",3,"options","loadDone"],[3,"hidden"],["infoWindow",""],[1,"info-modal"],[1,"image-box"],[1,"full-size",3,"src"],[1,"image-title","mask"],[1,"image-title"],[1,"index-section"],["nz-row","","nzJustify","space-between",1,"index-section"],["nz-col","","nzSpan","17"],["nz-col","","nzSpan","7",1,"index-text","green"],[1,"index-section","bordered"],["nz-col","","nzSpan","7",1,"index-text"],["nz-row","",1,"customer-item",3,"routerLink"],["nz-col","","nzFlex","72px"],[1,"img",3,"src"],["nz-col","","nzFlex","auto",1,"brand-text"]],template:function(o,e){1&o&&(n.TgZ(0,"np-base-layout",0)(1,"div",1)(2,"div",2)(3,"div",3),n._uU(4,"\u6211\u7684\u5ba2\u6237 (1)"),n.qZA(),n.TgZ(5,"div",4),n.YNc(6,O,5,3,"div",5),n.qZA()(),n.TgZ(7,"div",6),n._UZ(8,"div",7),n.TgZ(9,"div",3),n._uU(10,"\u914d\u7535\u623f\u5206\u5e03\u4fe1\u606f (1)"),n.qZA(),n.TgZ(11,"div",8)(12,"div",9),n.NdJ("loadDone",function(s){return e.onMapLoadDone(s)}),n.qZA()()()(),n.TgZ(13,"div",10,11)(15,"div",12)(16,"div",13),n._UZ(17,"img",14)(18,"div",15),n.TgZ(19,"div",16),n._uU(20),n.qZA()(),n._UZ(21,"div",17),n.TgZ(22,"div",18)(23,"div",19),n._uU(24,"\u5065\u5eb7\u98ce\u9669\u6307\u6570"),n.qZA(),n.TgZ(25,"div",20),n._uU(26,"\u5065\u5eb7"),n.qZA()(),n._UZ(27,"div",21),n.TgZ(28,"div",18)(29,"div",19),n._uU(30,"\u9884\u671f\u5de5\u5355"),n.qZA(),n.TgZ(31,"div",22),n._uU(32),n.qZA()(),n.TgZ(33,"div",18)(34,"div",19),n._uU(35,"\u672c\u6708\u7ef4\u62a4\u4efb\u52a1\u5b8c\u6210\u7387"),n.qZA(),n.TgZ(36,"div",22),n._uU(37),n.qZA()()()()()),2&o&&(n.Q6J("showSidebar",!1)("showCustomerList",!1)("outerMargin",null)("innerPadding",null),n.xp6(6),n.Q6J("ngForOf",n.DdM(11,P)),n.xp6(6),n.Q6J("options",e.mapOptions),n.xp6(1),n.Q6J("hidden",!0),n.xp6(4),n.Q6J("src","./assets/images/map-bg.jpg",n.LSH),n.xp6(3),n.hij("\u914d\u7535\u623f","{roomCount}",""),n.xp6(12),n.hij("","{ticketCount}","\u4e2a"),n.xp6(5),n.hij("","{taskCount}","%"))},directives:[p.i,d.SK,d.t3,m.sg,u.rH,M.a],styles:["[_nghost-%COMP%]{height:100%;display:block}[_nghost-%COMP%]   .customer-container[_ngcontent-%COMP%]{margin-right:20px}[_nghost-%COMP%]   .customer-container[_ngcontent-%COMP%]   .customer-list[_ngcontent-%COMP%]{padding:25px 16px 0;flex:1px 1;overflow:auto}[_nghost-%COMP%]   .customer-container[_ngcontent-%COMP%]   .customer-list[_ngcontent-%COMP%]   .customer-item[_ngcontent-%COMP%]{padding:5px;overflow:hidden;box-sizing:border-box;margin-bottom:20px;cursor:pointer;width:187px;height:39px;background:#ffffff;border:1px solid #eaeaea;box-shadow:0 1px 5px #00000024;border-radius:3px}[_nghost-%COMP%]   .customer-container[_ngcontent-%COMP%]   .customer-list[_ngcontent-%COMP%]   .customer-item[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:72px;height:20px}[_nghost-%COMP%]   .customer-container[_ngcontent-%COMP%]   .customer-list[_ngcontent-%COMP%]   .customer-item[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:30px;line-height:30px}[_nghost-%COMP%]   .customer-container[_ngcontent-%COMP%]   .customer-list[_ngcontent-%COMP%]   .customer-item[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]{font-size:16px;margin-left:5px}[_nghost-%COMP%]   .map-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .customer-container[_ngcontent-%COMP%]{display:flex;box-sizing:border-box;flex-direction:column;height:100%;border-radius:4px}[_nghost-%COMP%]   .customer-container[_ngcontent-%COMP%]{padding-top:16px;background:#fff}[_nghost-%COMP%]   .map-container-placeholder[_ngcontent-%COMP%]{height:15px}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{height:49px;line-height:49px;padding-left:20px;border-bottom:2px solid #eaeaea;font-size:16px;font-weight:400;color:#000;background:#fff}[_nghost-%COMP%]   .map-box[_ngcontent-%COMP%]{flex:1;height:100%;padding:14px 10px;background:#fff}[_nghost-%COMP%]   .info-modal[_ngcontent-%COMP%]{width:200px;background:#fff;box-shadow:0 3px 7px #00000029;border-radius:3px}[_nghost-%COMP%]   .info-modal[_ngcontent-%COMP%]   .image-box[_ngcontent-%COMP%]{height:140px;position:relative}[_nghost-%COMP%]   .info-modal[_ngcontent-%COMP%]   .image-box[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;z-index:2;height:30px;line-height:30px;color:#fff;padding-left:8px}[_nghost-%COMP%]   .info-modal[_ngcontent-%COMP%]   .image-box[_ngcontent-%COMP%]   .image-title.mask[_ngcontent-%COMP%]{z-index:1;opacity:.7;background:#3f99e3}[_nghost-%COMP%]   .info-modal[_ngcontent-%COMP%]   .index-section[_ngcontent-%COMP%]{padding:0 10px 10px}[_nghost-%COMP%]   .info-modal[_ngcontent-%COMP%]   .index-section.bordered[_ngcontent-%COMP%]{border-top:1px solid #9c9c9c}[_nghost-%COMP%]   .info-modal[_ngcontent-%COMP%]   .index-section[_ngcontent-%COMP%]   .index-text[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]   .info-modal[_ngcontent-%COMP%]   .index-section[_ngcontent-%COMP%]   .index-text.green[_ngcontent-%COMP%]{color:#3dcd58}"]}),t})(),data:{key:"my-customer",shouldDetach:"no"}}];let v=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[u.Bz.forChild(_)],u.Bz]}),t})(),y=(()=>{class t{constructor(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),t})();var z=r(6263),b=r(800);let w=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[y],imports:[[m.ez,v,d.Jb,z.E,b.x]]}),t})()}}]);
"use strict";(self.webpackChunksales=self.webpackChunksales||[]).push([[525],{506:(t,n,e)=>{e.d(n,{Z:()=>s});var o=e(229),i={"aria-hidden":"true","data-prefix":"fas","data-icon":"star",class:"svg-inline--fa fa-star fa-w-18",xmlns:"http://www.w3.org/2000/svg",width:"20",viewBox:"0 0 576 512"},r=[(0,o._)("path",{fill:"#ff8c00",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},null,-1)];const a={},s=(0,e(21).Z)(a,[["render",function(t,n){return(0,o.wg)(),(0,o.iD)("svg",i,r)}]])},622:(t,n,e)=>{e.r(n),e.d(n,{default:()=>y});var o=e(229),i=e(502),r={class:"cart-container"},a={class:"item-container_main-details"},s={class:"item-container_prices"},c={class:"item-container_buttons-container"},l={viewBox:"0 0 12 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u=[(0,o._)("path",{"clip-rule":"evenodd",d:"M10.923.845a2 2 0 00-2.829 0L1.131 7.808a2 2 0 000 2.828L8.094 17.6a2 2 0 002.829-2.828l-5.55-5.55 5.55-5.548a2 2 0 000-2.828z"},null,-1)],d=e(21);const f={},h=(0,d.Z)(f,[["render",function(t,n){return(0,o.wg)(),(0,o.iD)("svg",l,u)}]]);var p=e(506),m=["src","alt"],g=function(t){return(0,o.dD)("data-v-2334f8c2"),t=t(),(0,o.Cn)(),t}((function(){return(0,o._)("div",{class:"photo-container_zoom-square"},null,-1)}));const v={name:"ZoomImage",props:{photo:{type:Object,required:!0}},methods:{zoomIn:function(t){var n=t.target.closest(".photo-container"),e=Array.from(n.children).find((function(t){return t.classList.contains("photo-container_zoom-square")})),o=Array.from(n.children).find((function(t){return t.classList.contains("photo-container_zoom")}));e.classList.contains("show-hidden-element")||(e.classList.add("show-hidden-element"),o.classList.add("show-hidden-element")),this.moveSquare(t,e,n,o)},moveSquare:function(t,n,e,o){var i=e.getBoundingClientRect(),r=o.offsetWidth/n.offsetWidth,a=o.offsetHeight/n.offsetHeight,s=t.clientX-i.left-n.offsetWidth/2,c=t.clientY-i.top-n.offsetHeight/2;t.clientX<i.left+n.offsetWidth/2&&(s=0),t.clientX>i.right-n.offsetWidth/2&&(s=e.offsetWidth-n.offsetWidth),t.clientY<i.top+n.offsetHeight/2&&(c=0),t.clientY>i.bottom-n.offsetHeight/2&&(c=e.offsetHeight-n.offsetHeight),n.style.left=s+"px",n.style.top=c+"px",o.style.backgroundSize=e.offsetWidth*r+"px "+e.offsetHeight*a+"px",o.style.backgroundPosition="-"+s*r+"px -"+c*a+"px"},zoomOut:function(t){var n=t.target.closest(".photo-container"),e=Array.from(n.children).find((function(t){return t.classList.contains("photo-container_zoom")})),o=Array.from(n.children).find((function(t){return t.classList.contains("photo-container_zoom-square")}));e.classList.remove("show-hidden-element"),o.classList.remove("show-hidden-element")}}},w=(0,d.Z)(v,[["render",function(t,n,e,r,a,s){return(0,o.wg)(),(0,o.iD)("div",{class:"photo-container",onMousemove:n[0]||(n[0]=function(){return s.zoomIn&&s.zoomIn.apply(s,arguments)}),onMouseleave:n[1]||(n[1]=function(){return s.zoomOut&&s.zoomOut.apply(s,arguments)})},[(0,o._)("img",{class:"photo-container_image",src:e.photo.image,alt:e.photo.category},null,8,m),g,(0,o._)("div",{class:"photo-container_zoom",style:(0,i.j5)({backgroundImage:"url(".concat(e.photo.image,")")})},null,4)],32)}],["__scopeId","data-v-2334f8c2"]]),_={name:"Cart",components:{Chevron:h,Star:p.Z,ZoomImage:w},computed:{cartItems:function(){return this.$store.state.cartItems}},methods:{capitalizeProductCategory:function(t){return t.substring(0,1).toUpperCase()+t.substring(1)},roundedProductRate:function(t){return Math.round(t)},decreaseQuantiy:function(t){t.quantity--},increaseQuantiy:function(t){t.quantity++},pricePerQuantity:function(t,n){return(t*n).toFixed(2)}}},y=(0,d.Z)(_,[["render",function(t,n,e,l,u,d){var f=(0,o.up)("zoom-image"),h=(0,o.up)("star"),p=(0,o.up)("chevron");return(0,o.wg)(),(0,o.iD)("div",r,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(d.cartItems,(function(t){return(0,o.wg)(),(0,o.iD)("div",{class:"item-container",key:"cart-"+t.id+t.title},[(0,o.Wm)(f,{photo:t},null,8,["photo"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(d.roundedProductRate(t.rating.rate),(function(t){return(0,o.wg)(),(0,o.j4)(h,{key:t+"-star"})})),128)),(0,o._)("h1",null,(0,i.zw)(d.roundedProductRate(t.rating.rate)),1),(0,o._)("div",a,[(0,o._)("span",null,(0,i.zw)(t.title),1),(0,o._)("span",null,(0,i.zw)(t.rating.count),1),(0,o._)("span",null,(0,i.zw)(d.capitalizeProductCategory(t.category)),1)]),(0,o._)("span",null,(0,i.zw)(t.description),1),(0,o._)("div",s,[(0,o._)("span",null,(0,i.zw)(t.price)+" Eur",1),(0,o._)("span",null,(0,i.zw)(d.pricePerQuantity(t.price,t.quantity))+" Eur",1)]),(0,o._)("div",c,[(0,o.Wm)(p,{class:"chevron",onClick:function(n){return d.decreaseQuantiy(t)}},null,8,["onClick"]),(0,o._)("span",null,(0,i.zw)(t.quantity),1),(0,o.Wm)(p,{class:"chevron chevron-right",onClick:function(n){return d.increaseQuantiy(t)}},null,8,["onClick"])])])})),128))])}],["__scopeId","data-v-4b2db0f9"]])}}]);
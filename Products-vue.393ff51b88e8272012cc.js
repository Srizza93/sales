"use strict";(self.webpackChunksales=self.webpackChunksales||[]).push([[840],{506:(t,n,r)=>{r.d(n,{Z:()=>s});var o=r(229),e={"aria-hidden":"true","data-prefix":"fas","data-icon":"star",class:"svg-inline--fa fa-star fa-w-18",xmlns:"http://www.w3.org/2000/svg",width:"20",viewBox:"0 0 576 512"},c=[(0,o._)("path",{fill:"#ff8c00",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},null,-1)];const i={},s=(0,r(21).Z)(i,[["render",function(t,n){return(0,o.wg)(),(0,o.iD)("svg",e,c)}]])},345:(t,n,r)=>{r.r(n),r.d(n,{default:()=>A});var o=r(229),e={class:"products-page"},c={class:"products-list-outer"},i={class:"products-list-container"},s=r(502),a={class:"filters-container"},u=["onClick"];const d={name:"Filters",components:{closeButton:r(549).Z},computed:{filters:function(){return this.$store.state.filters}},methods:{deleteFilter:function(t){this.$store.commit("deleteFilter",t)}}};var l=r(21);const p=(0,l.Z)(d,[["render",function(t,n,r,e,c,i){var d=(0,o.up)("close-button");return(0,o.wg)(),(0,o.iD)("div",a,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.filters,(function(t,n){return(0,o.wg)(),(0,o.iD)("div",{class:"filters-container_filter-div",key:n+t,onClick:function(n){return i.deleteFilter(t)}},[(0,o.Wm)(d,{class:"close-button"}),(0,o._)("span",null,(0,s.zw)(t),1)],8,u)})),128))])}],["__scopeId","data-v-667813aa"]]);var g=function(t){return(0,o.dD)("data-v-fa3a0840"),t=t(),(0,o.Cn)(),t},f={class:"product-container"},_=["src","alt"],w={class:"product-container_price"},v=g((function(){return(0,o._)("span",{class:"product-container_price_currency"},"EUR",-1)})),h={class:"product-container_ratings"},m={class:"product-container_ratings_star-container"},k={class:"product-container_ratings_star-container_number"},b={class:"product-container_ratings_amount"},y={class:"product-container_ratings_amount_number"},C=g((function(){return(0,o._)("span",null,"Reviews",-1)})),z={class:"product-container_buttons-container"},D={key:1,class:"product-container_buttons-container_button product-container_buttons-container_button-add product-in-cart"},I={class:"product-container_info-container"},P={class:"product-container_info-container_category"},H={class:"product-container_info-container_description"};const Z={name:"Product",components:{Star:r(506).Z},props:{product:{type:Object,required:!0}},computed:{fixedPrice:function(){return this.$props.product.price.toFixed(2)}},methods:{toggleInfo:function(t){var n=t.target;Array.from(n.parentElement.parentElement.children).find((function(t){return t.classList.contains("product-container_info-container")})).classList.toggle("open-info"),n.classList.toggle("clicked-button")},addToCart:function(t){this.productIsInCart(t)||this.$store.commit("addItemToCart",t)},productIsInCart:function(t){return Array.from(this.$store.state.cartItems).includes(t)},capitalizeProductCategory:function(t){return t.substring(0,1).toUpperCase()+t.substring(1)},roundedProductRate:function(t){return Math.floor(t)}}},x=(0,l.Z)(Z,[["render",function(t,n,r,e,c,i){var a=(0,o.up)("star");return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("img",{class:"product-container_image",src:r.product.image,alt:r.product.category},null,8,_),(0,o._)("span",w,[(0,o.Uk)((0,s.zw)(i.fixedPrice)+" ",1),v]),(0,o._)("div",h,[(0,o._)("div",m,[(0,o._)("span",k,(0,s.zw)(r.product.rating.rate),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.roundedProductRate(r.product.rating.rate),(function(t){return(0,o.wg)(),(0,o.j4)(a,{key:t+"-star"})})),128))]),(0,o._)("div",b,[(0,o._)("span",y,(0,s.zw)(r.product.rating.count),1),C])]),(0,o._)("div",z,[(0,o._)("button",{class:"product-container_buttons-container_button",onClick:n[0]||(n[0]=function(){return i.toggleInfo&&i.toggleInfo.apply(i,arguments)})}," Info "),i.productIsInCart(r.product)?((0,o.wg)(),(0,o.iD)("button",D," In Cart ")):((0,o.wg)(),(0,o.iD)("button",{key:0,class:"product-container_buttons-container_button product-container_buttons-container_button-add",onClick:n[1]||(n[1]=function(t){return i.addToCart(r.product)})}," Add "))]),(0,o._)("div",I,[(0,o._)("span",P,(0,s.zw)(i.capitalizeProductCategory(r.product.category)),1),(0,o._)("span",null,(0,s.zw)(r.product.title),1),(0,o._)("p",H,(0,s.zw)(r.product.description),1)])])}],["__scopeId","data-v-fa3a0840"]]);var L={class:"sort-container"},M={class:"sort-subcontainer"},$=["onClick"],F={width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},O=[(0,o._)("path",{d:"M6 8a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM8 12a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zM11 15a1 1 0 100 2h2a1 1 0 100-2h-2z",fill:"currentColor"},null,-1)];const j={},E=(0,l.Z)(j,[["render",function(t,n){return(0,o.wg)(),(0,o.iD)("svg",F,O)}]]);var K={width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R=[(0,o._)("path",{d:"M6 16a1 1 0 001 1h10a1 1 0 100-2H7a1 1 0 00-1 1zM8 12a1 1 0 001 1h6a1 1 0 100-2H9a1 1 0 00-1 1zM11 9a1 1 0 110-2h2a1 1 0 110 2h-2z",fill:"currentColor"},null,-1)];const U={},W={name:"Sort",components:{sortUp:E,sortDown:(0,l.Z)(U,[["render",function(t,n){return(0,o.wg)(),(0,o.iD)("svg",K,R)}]])},data:function(){return{sortOptions:[{id:1,type:"price",level:"Highest",sign:"+",clicked:!1},{id:2,type:"price",level:"Lowest",sign:"-",clicked:!1},{id:3,type:"rating",level:"Highest",sign:"+",clicked:!0},{id:4,type:"rating",level:"Lowest",sign:"-",clicked:!1}]}},methods:{sortProducts:function(t){this.sortOptions.forEach((function(t){return t.clicked=!1})),t.clicked=!0,t.clicked&&(this.$store.state.sort.type=t.type,this.$store.state.sort.sign=t.sign)}},mounted:function(){this.sortProducts(this.sortOptions.find((function(t){return"rating"===t.type&&"Highest"===t.level})))}},Y={name:"Products",components:{Filters:p,Product:x,Sort:(0,l.Z)(W,[["render",function(t,n,r,e,c,i){var a=(0,o.up)("sort-up"),u=(0,o.up)("sort-down");return(0,o.wg)(),(0,o.iD)("div",L,[(0,o._)("div",M,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.sortOptions,(function(t){return(0,o.wg)(),(0,o.iD)("div",{class:(0,s.C_)(["sort-container-button",{"active-button":t.clicked}]),key:t.id+t.type,onClick:function(n){return i.sortProducts(t)}},[(0,o._)("span",null,(0,s.zw)(t.level)+" "+(0,s.zw)(t.type),1),t.clicked?((0,o.wg)(),(0,o.j4)(a,{key:0,class:"svg-sort"})):((0,o.wg)(),(0,o.j4)(u,{key:1,class:"svg-sort sort-off"}))],10,$)})),128))])])}],["__scopeId","data-v-25b806ea"]])},computed:{products:function(){return this.$store.getters.getProducts}}},A=(0,l.Z)(Y,[["render",function(t,n,r,s,a,u){var d=(0,o.up)("sort"),l=(0,o.up)("filters"),p=(0,o.up)("product");return(0,o.wg)(),(0,o.iD)("div",e,[(0,o.Wm)(d),(0,o.Wm)(l),(0,o._)("div",c,[(0,o._)("div",i,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.products,(function(t){return(0,o.wg)(),(0,o.iD)("div",{class:"product-container",key:t.id+t.title},[(0,o.Wm)(p,{product:t},null,8,["product"])])})),128))])])])}],["__scopeId","data-v-d5347c5c"]])}}]);
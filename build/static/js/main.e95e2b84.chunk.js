(this["webpackJsonpch-react-app"]=this["webpackJsonpch-react-app"]||[]).push([[0],{43:function(t){t.exports=JSON.parse('[{"id":1,"title":"Zapatillas","description":"Zapatillas de cuero talle 43","category":"Kids","price":4000,"stock":10,"pictureUrl":"/images/products/1.webp"},{"id":2,"title":"Campera","description":"Campera Hombre talle M","category":"Man","price":7000,"stock":5,"pictureUrl":"/images/products/2.webp"},{"id":3,"title":"Pantalon","description":"Pantalon Regular talle 32","category":"Woman","price":2500,"stock":7,"pictureUrl":"/images/products/3.webp"},{"id":4,"title":"Remera","description":"Remera Mujer talle S","category":"Woman","price":950,"stock":5,"pictureUrl":"/images/products/4.webp"},{"id":5,"title":"Sweater","description":"Sweater Mujer talle S","category":"Woman","price":1800,"stock":20,"pictureUrl":"/images/products/5.webp"},{"id":6,"title":"Shirt","description":"Man Shirt","category":"Man","price":3500,"stock":2,"pictureUrl":"/images/products/6.webp"},{"id":7,"title":"T-Shirt","description":"Man T-Shirt","category":"Man","price":1500,"stock":9,"pictureUrl":"/images/products/7.webp"}]')},44:function(t,e,c){},59:function(t,e,c){},60:function(t,e,c){},62:function(t,e,c){},70:function(t,e,c){},71:function(t,e,c){},72:function(t,e,c){},73:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c.n(a),r=c(20),i=c.n(r),s=(c(59),c(8)),o=c(7),j=c(45),l=c(46),b=c(54),d=c(52),u=c(80),O=c(82),x=c(79),h=(c(60),c.p+"static/media/mello-logo.2fc0f693.svg"),m=c(53),p=c(14),f=c(2),g=n.a.createContext();function v(t){var e=Object(a.useState)([]),c=Object(p.a)(e,2),n=c[0],r=c[1];return Object(f.jsx)(g.Provider,{value:{cart:n,setCart:r,clearCart:function(){console.log("CartContext - clearing cart"),r([])},removeItem:function(t){console.log("CartContext - removeItem");for(var e=[],c=0;c<n.length;c++)n[c].Item.id!==t&&e.push(n[c]);r(e)},addItem:function(t,e){for(var c=0;c<n.length;c++)if(n[c].Item.id===t.id)return void(n[c].qtyBuy=n[c].qtyBuy+e);r([].concat(Object(m.a)(n),[{Item:t,qtyBuy:e}]))},getCartTotals:function(){for(var t=0,e=0,c=0;c<n.length;c++)e+=n[c].Item.price*n[c].qtyBuy,t+=n[c].qtyBuy;return{total:e,qty:t}}},children:t.children})}c(62);var y=function(){var t=Object(a.useContext)(g).getCartTotals;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(s.b,{to:t().qty>0?"/cart/":"#",className:t().qty>0?"cartQty":"disabledCart",children:[t().qty," items",Object(f.jsx)("i",{className:"fas fa-shopping-cart"})]})})},C=function(t){Object(b.a)(c,t);var e=Object(d.a)(c);function c(){return Object(j.a)(this,c),e.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(f.jsxs)(u.a,{bg:"dark",expand:"sm",variant:"dark",fixed:"top",children:[Object(f.jsxs)(u.a.Brand,{as:s.b,to:"/",children:[Object(f.jsx)("img",{src:h,width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"}),"MELLO"]}),Object(f.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsxs)(u.a.Collapse,{id:"basic-navbar-nav",children:[Object(f.jsxs)(O.a,{className:"mr-auto",children:[Object(f.jsxs)(x.a,{title:"Products",id:"basic-nav-dropdown",children:[Object(f.jsx)(x.a.Item,{as:s.b,to:"/itemList/Woman",children:"Woman"}),Object(f.jsx)(x.a.Item,{as:s.b,to:"/itemList/Man",children:"Man"}),Object(f.jsx)(x.a.Item,{as:s.b,to:"/itemList/Kids",children:"Kids"}),Object(f.jsx)(x.a.Divider,{}),Object(f.jsx)(x.a.Item,{as:s.b,to:"/itemList",children:"All"})]}),Object(f.jsx)(O.a.Link,{as:s.b,to:"/AboutUs",children:"About Us"})]}),Object(f.jsx)(y,{})]})]})}}]),c}(a.Component),I=c(34),k=(c(70),c(78)),S=c(51),T=c(13),w=function(t){var e=t.item;return Object(f.jsxs)(T.a,{style:{width:"18rem",marginTop:"20px"},children:[Object(f.jsx)(s.b,{to:"/itemDetail/"+e.id,children:Object(f.jsx)(T.a.Img,{variant:"top",src:""+e.pictureUrl})}),Object(f.jsxs)(T.a.Body,{children:[Object(f.jsx)(T.a.Title,{children:e.title}),Object(f.jsx)(T.a.Text,{children:e.description}),Object(f.jsxs)(T.a.Text,{children:["Price: $",e.price]})]})]})};var N=function(t){var e=t.Items;return Object(f.jsx)(k.a,{xs:1,md:2,lg:3,children:e.map((function(t,e){return Object(f.jsx)(S.a,{children:Object(f.jsx)(w,{item:t})},e)}))})};var B=function(){var t=Object(a.useState)([]),e=Object(p.a)(t,2),n=e[0],r=e[1],i=Object(o.f)().category;return Object(a.useEffect)((function(){new Promise((function(t,e){setTimeout((function(){t(c(43))}),2)})).then((function(t){return t.filter((function(e){return i?e.category===i:t}))})).then((function(t){return r(t)}))}),[i]),Object(f.jsx)(I.a,{children:Object(f.jsx)(N,{Items:n})})},P=c(81),U=c(50);c(44);var q=function(t){var e=t.stock,c=t.initial,n=t.onAdd,r=Object(a.useState)(c),i=Object(p.a)(r,2),s=i[0],o=i[1],j=Object(a.useState)(!1),l=Object(p.a)(j,2),b=l[0],d=l[1],u=Object(a.useState)(!0),O=Object(p.a)(u,2),x=O[0],h=O[1],m=Object(a.useState)(!1),g=Object(p.a)(m,2),v=g[0],y=g[1];function C(t){"plus"===t&&s<e?o(s+1):"minus"===t&&s>1&&o(s-1)}return Object(a.useEffect)((function(){0===s?o(1):s>e&&e>0&&o(e),h(s<=1),d(!(s<=e-1)),y(!(e>=s&&s>0))}),[s,e]),Object(f.jsxs)(P.a,{children:[Object(f.jsxs)(P.a.Row,{children:[Object(f.jsx)(S.a,{xs:"auto",children:Object(f.jsx)(U.a,{className:"btn btn-default btn-number",variant:"outline-secondary",onClick:function(t){return C("minus")},disabled:x,children:Object(f.jsx)("i",{className:"fas fa-minus"})})}),Object(f.jsx)(S.a,{xs:3,children:Object(f.jsx)(P.a.Control,{type:"input",value:s})}),Object(f.jsx)(S.a,{xs:2,children:Object(f.jsx)(U.a,{className:"btn btn-default btn-number",variant:"outline-secondary",onClick:function(t){return C("plus")},disabled:b,children:Object(f.jsx)("i",{className:"fas fa-plus"})})}),Object(f.jsx)(S.a,{xs:{span:4,offset:0},children:Object(f.jsx)(U.a,{variant:"dark",onClick:function(t){return n(t,s)},disabled:v,children:"Add to cart"})})]}),"Cur.Stock: ",e]})},M=function(t){var e=t.Item,c=Object(a.useState)(0),n=Object(p.a)(c,2),r=n[0],i=n[1],s=Object(a.useContext)(g).addItem,o="url("+e.pictureUrl+")";Object(a.useEffect)((function(){i(e.stock)}),[e.stock]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(T.a,{className:"itemDetail",children:[Object(f.jsx)(T.a.Header,{as:"h5",children:e.title}),Object(f.jsx)("div",{className:"itemDetailPicContainer",style:{backgroundImage:o}}),Object(f.jsxs)(T.a.Body,{children:[Object(f.jsxs)(T.a.Text,{children:["Product No: ",e.id]}),Object(f.jsxs)(T.a.Text,{children:["Description: ",e.description]}),Object(f.jsxs)(T.a.Text,{children:["Price: $",e.price]})]}),Object(f.jsx)(T.a.Footer,{children:Object(f.jsx)(q,{stock:r,initial:1,onAdd:function(t,c){t.preventDefault(),r-c>=0?(s(e,c),i(r-c)):alert("Sorry...\nNot enough stock")}})})]})})};var A=function(){var t=Object(a.useState)([]),e=Object(p.a)(t,2),n=e[0],r=e[1],i=Object(o.f)().id;return Object(a.useEffect)((function(){new Promise((function(t,e){setTimeout((function(){t(c(43))}),2)})).then((function(t){return t.find((function(t){return t.id===parseInt(i)}))})).then((function(t){return r(t)}))}),[i]),Object(f.jsxs)(f.Fragment,{children:[console.log(n),Object(f.jsx)(M,{Item:n})]})};c(71);var E=function(){return Object(f.jsx)(I.a,{children:Object(f.jsx)("h2",{children:"This is the AboutUS Page"})})};c(72);var F=function(){var t=Object(a.useContext)(g),e=t.cart,c=t.clearCart,n=t.removeItem,r=t.getCartTotals;return Object(a.useEffect)((function(){}),[e]),Object(f.jsxs)(I.a,{children:[0===r().qty?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:"Your cart is empty"}),Object(f.jsx)(s.b,{to:"/",children:Object(f.jsx)(U.a,{variant:"primary",children:"Back to Store"})})]}):e.map((function(t,e){return Object(f.jsxs)(T.a,{style:{marginTop:"5px"},children:[Object(f.jsx)(T.a.Header,{Header:!0,as:"h5",children:Object(f.jsxs)(k.a,{children:[Object(f.jsx)(S.a,{children:t.Item.title}),Object(f.jsx)(S.a,{xs:"auto",children:Object(f.jsx)("i",{class:"fas fa-trash-alt",onClick:function(e){return n(t.Item.id)}})})]})}),Object(f.jsx)(T.a.Body,{children:Object(f.jsxs)(k.a,{children:[Object(f.jsx)(S.a,{xs:"auto",children:Object(f.jsx)("div",{className:"cartPicContainer",children:Object(f.jsx)(T.a.Img,{src:""+t.Item.pictureUrl})})}),Object(f.jsxs)(S.a,{children:[Object(f.jsxs)(T.a.Text,{children:["Cart Item: ",e+1]}),Object(f.jsx)(T.a.Text,{children:t.Item.description}),Object(f.jsxs)(T.a.Text,{children:["Qty: ",t.qtyBuy," x Item Price: $",t.Item.price," = $ ",t.qtyBuy*t.Item.price]})]})]})})]})})),Object(f.jsx)(T.a.Footer,{className:"cartFooter",children:Object(f.jsxs)(k.a,{children:[Object(f.jsx)(S.a,{xs:"auto",children:Object(f.jsxs)("h4",{children:["Total: $ ",r().total]})}),Object(f.jsx)(S.a,{xs:"auto",children:Object(f.jsx)(U.a,{variant:"success",disabled:!(e.length>0),children:"Go to Payment"})}),Object(f.jsx)(S.a,{xs:"auto",children:Object(f.jsx)(U.a,{variant:"danger",disabled:!(e.length>0),onClick:function(t){return c()},children:"Empty Cart"})})]})})]})};var L=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(v,{children:Object(f.jsxs)(s.a,{children:[Object(f.jsx)(C,{}),Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",component:B}),Object(f.jsx)(o.a,{path:"/AboutUs",component:E}),Object(f.jsx)(o.a,{path:"/Cart",component:F}),Object(f.jsx)(o.a,{path:"/itemDetail/:id?",component:A}),Object(f.jsx)(o.a,{path:"/itemList/:category?",component:B})]})]})})})};i.a.render(Object(f.jsx)(L,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.e95e2b84.chunk.js.map
(this.webpackJsonplandingpage=this.webpackJsonplandingpage||[]).push([[0],{183:function(e,t,n){},198:function(e,t){},253:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),o=n(25),c=n.n(o),s=(n(183),n(304)),r=n(299),l=n(105),d=n(89),u=n(70),m=n.n(u),p=n(106),j=n(296),g=n(298),b=n(305),f=n(306),h=n(163),x=n.n(h),O=n(164),v=n.n(O),w=n(147),k=n(103),N={aws_project_region:"us-east-1",aws_cloud_logic_custom:[{name:"stripeAPI",endpoint:"https://0u5jgh5sij.execute-api.us-east-1.amazonaws.com/dev",region:"us-east-1"}]},y=n(146),I=n(148),C=n(5);k.default.configure(N);var S=Object(r.a)((function(){return{appbar:{background:"none"},icon:{color:"#fff",fontSize:"3rem"},appbarTitle:{flexGrow:"1"},appbarWrapper:{width:"80%",margin:"0 auto"},colorText:{color:"#008000"},root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontFamily:"Nunito"},title:{color:"#fff",fontSize:"4.5rem"},container:{textAlign:"center"},goDown:{color:"#008000",fontSize:"4rem"}}})),q=function(){var e=Object(I.a)("pk_test_RuZc6Tx020hq9t52aCdSCA1e009KAiezMM"),t=function(){var t=Object(p.a)(m.a.mark((function t(){var n,i,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"stripeAPI","/checkout",e.next=4,y.a.post("stripeAPI","/checkout");case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t.next=3,n();case 3:return i=t.sent,t.next=6,e;case 6:a=t.sent,console.log("la sesion",i),a.redirectToCheckout({sessionId:i.id});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=S(),a=Object(i.useState)(!1),o=Object(d.a)(a,2),c=o[0],s=o[1];return Object(i.useEffect)((function(){s(!0)}),[]),Object(C.jsxs)("div",{className:n.root,id:"header",children:[Object(C.jsx)(j.a,{className:n.appbar,elevation:0,children:Object(C.jsxs)(g.a,{className:n.appbarWrapper,children:[Object(C.jsxs)("h1",{className:n.appbarTitle,children:["My ",Object(C.jsx)("span",{className:n.colorText,children:"Island"})]}),Object(C.jsx)(b.a,{className:n.icon,children:Object(C.jsx)(x.a,{})})]})}),Object(C.jsx)(f.a,Object(l.a)(Object(l.a)({in:c},c?{timeout:1e3}:{}),{},{collapsedHeight:50,children:Object(C.jsxs)("div",{className:n.container,children:[Object(C.jsxs)("h1",{className:n.title,children:["Welcome to ",Object(C.jsx)("br",{})," My",Object(C.jsx)("span",{className:n.colorText,children:"Island"})]}),Object(C.jsx)(w.Link,{to:"place-to-visit",smooth:!0,children:Object(C.jsx)(b.a,{className:n.icon,children:Object(C.jsx)(v.a,{className:n.goDown})})}),Object(C.jsx)("button",{onClick:t,children:"Continue to payment"})]})}))]})},A=n(79),z=n(300),D=n(302),T=n(301),F=n(303),L=Object(r.a)({root:{maxWidth:645,background:"rgba(0,0,0,0.5)",margin:"20px"},media:{height:440},title:{fontFamily:"Nunito",fontWeight:"bold",fonstSize:"2rem",color:"#fff"},desc:{fontFamily:"Nunito",fonstSize:"1.1rem",color:"#ddd"}});var _=function(e){var t=e.place,n=L();return Object(C.jsxs)(z.a,{className:n.root,children:[Object(C.jsx)(T.a,{alt:"Contemplative Reptile",height:"140",className:n.media,component:"img",image:t.imageUrl,title:"Contemplative Reptile"}),Object(C.jsxs)(D.a,{children:[Object(C.jsx)(F.a,{gutterBottom:!0,component:"h1",variant:"h5",className:n.title,children:t.title}),Object(C.jsx)(F.a,{variant:"body2",color:"textSecondary",component:"p",className:n.desc,children:t.description})]})]})},E=[{title:"eCommerce",description:"Id esse eu ex ad nulla enim dolor. Dolor nisi quis esse adipisicing. Amet commodo incididunt labore ea commodo dolor aliquip ullamco id cillum et.",imageUrl:"/landingpage/assets/eCommerce.jpg"},{title:"Finanzas",description:"Id esse eu ex ad nulla enim dolor. Dolor nisi quis esse adipisicing. Amet commodo incididunt labore ea commodo dolor aliquip ullamco id cillum et.",imageUrl:"/landingpage/assets/finance.jpg"},{title:"L\xf3gistica",description:"Id esse eu ex ad nulla enim dolor. Dolor nisi quis esse adipisicing. Amet commodo incididunt labore ea commodo dolor aliquip ullamco id cillum et.",imageUrl:"/landingpage/assets/logistic.jpg"},{title:"Legal",description:"Id esse eu ex ad nulla enim dolor. Dolor nisi quis esse adipisicing. Amet commodo incididunt labore ea commodo dolor aliquip ullamco id cillum et.",imageUrl:"/landingpage/assets/legal.jpg"},{title:"Marketing",description:"Id esse eu ex ad nulla enim dolor. Dolor nisi quis esse adipisicing. Amet commodo incididunt labore ea commodo dolor aliquip ullamco id cillum et.",imageUrl:"/landingpage/assets/marketing.jpg"}];var M=function(e){var t=Object(i.useState)(!1),n=Object(d.a)(t,2),a=n[0],o=n[1];return Object(i.useLayoutEffect)((function(){function t(){var t=window.document.getElementById(e).offsetHeight;console.log("windowpageOffset",window.pageYOffset,t),window.pageYOffset>.7*t&&o(!0)}return window.addEventListener("scroll",t),t(),function(){return window.removeEventListener("scroll",t)}}),[e]),a};var U=Object(r.a)((function(e){return{root:Object(A.a)({minheight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},e.breakpoints.down("md"),{flexDirection:"column"})}})),P=function(){var e=U(),t=M("header");return Object(C.jsxs)("div",{className:e.root,id:"place-to-visit",children:[Object(C.jsx)(_,{place:E[0],checked:t}),Object(C.jsx)(_,{place:E[1],checked:t}),Object(C.jsx)(_,{place:E[2],checked:t}),Object(C.jsx)(_,{place:E[3],checked:t}),Object(C.jsx)(_,{place:E[4],checked:t})]})};var W=function(){var e=B();return Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsx)(s.a,{}),Object(C.jsx)(q,{}),Object(C.jsx)(P,{})]})},B=Object(r.a)((function(){return{root:{minHeight:"100vh",backgroundImage:"url(".concat("/landingpage/assets/woods.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}}})),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,308)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),o(e),c(e)}))};c.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(W,{})}),document.getElementById("root")),R()}},[[253,1,2]]]);
//# sourceMappingURL=main.0cfcdca1.chunk.js.map
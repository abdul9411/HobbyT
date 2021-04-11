(this["webpackJsonpchat-client"]=this["webpackJsonpchat-client"]||[]).push([[0],{124:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),s=(a(124),a(225)),i=a(109),u=a(221),l=a(220),b=a(17),j=a(104),O=Object(j.a)(),d=a(66),h=a(111),m=a(222),f=function(){var e=Object(b.b)().enqueueSnackbar;return function(t){return t.text().then((function(a){var n=a&&JSON.parse(a);if(!t.ok){-1!==[401,403].indexOf(t.status)&&(x.logout(),e("User Unauthorized",{variant:"error"}));var r=n&&n.message||t.statusText;return Promise.reject(r)}return n}))}},p=new m.a(JSON.parse(localStorage.getItem("currentUser"))),x={logout:function(){localStorage.removeItem("currentUser"),p.next(null)},currentUser:p.asObservable(),get currentUserValue(){return p.value}};var S=a(4),_=function(e){var t=e.component,a=Object(h.a)(e,["component"]);return Object(S.jsx)(s.b,Object(d.a)(Object(d.a)({},a),{},{render:function(e){return x.currentUserValue?Object(S.jsx)(t,Object(d.a)({},e)):Object(S.jsx)(s.a,{to:{pathname:"/",state:{from:e.location}}})}}))},g=a(13),v=a(207),T=a(219),E=a(224),C=a(211),R=a(163),P=a(208),A=a(162),N=a(210),U=a(209),D=a(226),I=a(46),y=a.n(I);var k=function(){var e=x.currentUserValue;return e&&e.token?{Authorization:"".concat(e.token),"Content-Type":"application/json"}:{}};var H=function(e){return String(e).split(" ").map((function(e){return e.charAt(0)})).join("")},L=Object(v.a)((function(e){return{subheader:{display:"flex",alignItems:"center",cursor:"pointer"},globe:{backgroundColor:e.palette.primary.dark},subheaderText:{color:e.palette.primary.dark},list:{maxHeight:"calc(100vh - 112px)",overflowY:"auto"},avatar:{margin:e.spacing(0,3,0,1)}}})),w=function(e){var t=L(),a=Object(n.useState)([]),c=Object(g.a)(a,2),o=c[0],s=c[1],i=Object(n.useState)(null),u=Object(g.a)(i,2),l=u[0],j=u[1],O=function(){var e=Object(b.b)().enqueueSnackbar,t=f(),a={method:"GET",headers:k()};return function(){return fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,"/api/users"),a).then(t).catch((function(){return e("Could not load Users",{variant:"error"})}))}}();return Object(n.useEffect)((function(){O().then((function(e){return s(e)}))}),[l]),Object(n.useEffect)((function(){y()(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL).on("users",(function(e){j(e)}))}),[]),Object(S.jsx)(P.a,{className:t.list,children:o&&Object(S.jsx)(r.a.Fragment,{children:o.map((function(a){return Object(S.jsxs)(A.a,{className:t.listItem,onClick:function(){e.setUser(a),e.setScope(a.name)},button:!0,children:[Object(S.jsx)(U.a,{className:t.avatar,children:Object(S.jsx)(D.a,{children:H(a.name)})}),Object(S.jsx)(N.a,{primary:a.name})]},a._id)}))})})},W=a(38),K=a(53),F=a(223),V=a(212),B=a(105),G=a.n(B),q=a(79),z=a.n(q);var J=Object(v.a)((function(e){return{root:{height:"100%"},headerRow:{maxHeight:60,zIndex:5},paper:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:e.palette.primary.dark},messageContainer:{height:"100%",display:"flex",alignContent:"flex-end"},messagesRow:{maxHeight:"calc(100vh - 184px)",overflowY:"auto"},newMessageRow:{width:"100%",padding:e.spacing(0,2,1)},messageBubble:{padding:10,border:"1px solid white",backgroundColor:"white",borderRadius:"0 10px 10px 10px",boxShadow:"-3px 4px 4px 0px rgba(0,0,0,0.08)",marginTop:8,maxWidth:"40em"},messageBubbleRight:{borderRadius:"10px 0 10px 10px"},inputRow:{display:"flex",alignItems:"flex-end"},form:{width:"100%"},avatar:{margin:e.spacing(1,1.5)},listItem:{display:"flex",width:"100%"},listItemRight:{flexDirection:"row-reverse"}}})),M=function(e){var t=Object(n.useState)(x.currentUserValue.userId),a=Object(g.a)(t,1)[0],c=Object(n.useState)(""),o=Object(g.a)(c,2),s=o[0],i=o[1],u=Object(n.useState)([]),l=Object(g.a)(u,2),j=l[0],O=l[1],d=Object(n.useState)(null),h=Object(g.a)(d,2),m=h[0],p=h[1],_=function(){var e=Object(b.b)().enqueueSnackbar,t=f(),a={method:"GET",headers:k()};return function(){return fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,"/api/messages/global"),a).then(t).catch((function(){return e("Could not load Global Chat",{variant:"error"})}))}}(),v=function(){var e=Object(b.b)().enqueueSnackbar,t=f();return function(a){var n={method:"POST",headers:k(),body:JSON.stringify({body:a,global:!0})};return fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,"/api/messages/global"),n).then(t).catch((function(t){console.log(t),e("Could send message",{variant:"error"})}))}}(),T=function(){var e=Object(b.b)().enqueueSnackbar,t=f(),a={method:"GET",headers:k()};return function(n){return fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,"/api/messages/conversations/query?userId=").concat(n),a).then(t).catch((function(){return e("Could not load chats",{variant:"error"})}))}}(),E=function(){var e=Object(b.b)().enqueueSnackbar,t=f();return function(a,n){var r={method:"POST",headers:k(),body:JSON.stringify({to:a,body:n})};return fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,"/api/messages/"),r).then(t).catch((function(t){console.log(t),e("Could send message",{variant:"error"})}))}}(),I=Object(n.useRef)(null),L=J();Object(n.useEffect)((function(){w(),B()}),[m,e.scope,e.conversationId]),Object(n.useEffect)((function(){y()(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL).on("messages",(function(e){return p(e)}))}),[]);var w=function(){"Global Chat"===e.scope?_().then((function(e){O(e)})):null!==e.scope&&null!==e.conversationId?T(e.user._id).then((function(e){return O(e)})):O([])},B=function(){I.current.scrollIntoView({behavior:"smooth"})};Object(n.useEffect)(B,[j]);return Object(S.jsxs)(C.a,{container:!0,className:L.root,children:[Object(S.jsx)(C.a,{item:!0,xs:12,className:L.headerRow,children:Object(S.jsx)(R.a,{className:L.paper,square:!0,elevation:2,children:Object(S.jsx)(K.a,{color:"inherit",variant:"h6",children:e.scope})})}),Object(S.jsx)(C.a,{item:!0,xs:12,children:Object(S.jsxs)(C.a,{container:!0,className:L.messageContainer,children:[Object(S.jsxs)(C.a,{item:!0,xs:12,className:L.messagesRow,children:[j&&Object(S.jsx)(P.a,{children:j.map((function(e){return Object(S.jsxs)(A.a,{className:z()(L.listItem,Object(W.a)({},"".concat(L.listItemRight),e.fromObj[0]._id===a)),alignItems:"flex-start",children:[Object(S.jsx)(U.a,{className:L.avatar,children:Object(S.jsx)(D.a,{children:H(e.fromObj[0].name)})}),Object(S.jsx)(N.a,{classes:{root:z()(L.messageBubble,Object(W.a)({},"".concat(L.messageBubbleRight),e.fromObj[0]._id===a))},primary:e.fromObj[0]&&e.fromObj[0].name,secondary:Object(S.jsx)(r.a.Fragment,{children:e.body})})]},e._id)}))}),Object(S.jsx)("div",{ref:I})]}),Object(S.jsx)(C.a,{item:!0,xs:12,className:L.inputRow,children:Object(S.jsx)("form",{onSubmit:function(t){t.preventDefault(),"Global Chat"===e.scope?v(s).then((function(){i("")})):E(e.user._id,s).then((function(e){i("")}))},className:L.form,children:Object(S.jsxs)(C.a,{container:!0,className:L.newMessageRow,alignItems:"flex-end",children:[Object(S.jsx)(C.a,{item:!0,xs:11,children:Object(S.jsx)(F.a,{id:"message",label:"Message",variant:"outlined",margin:"dense",fullWidth:!0,value:s,onChange:function(e){return i(e.target.value)}})}),Object(S.jsx)(C.a,{item:!0,xs:1,children:Object(S.jsx)(V.a,{type:"submit",children:Object(S.jsx)(G.a,{})})})]})})})]})})]})},Y=a(106),Q=a.n(Y),X=a(213),Z=Object(v.a)((function(e){return{subheader:{display:"flex",alignItems:"center",cursor:"pointer"},globe:{backgroundColor:e.palette.primary.dark},subheaderText:{color:e.palette.primary.dark},list:{maxHeight:"calc(100vh - 112px)",overflowY:"auto"}}})),$=function(e){var t=Z(),a=Object(n.useState)([]),c=Object(g.a)(a,2),o=c[0],s=c[1],i=Object(n.useState)(null),u=Object(g.a)(i,2),l=u[0],j=u[1],O=function(){var e=Object(b.b)().enqueueSnackbar,t=f(),a={method:"GET",headers:k()};return function(){return fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,"/api/messages/conversations"),a).then(t).catch((function(){return e("Could not load chats",{variant:"error"})}))}}(),d=function(e){for(var t=0;t<e.length;t++)if(e[t].username!==x.currentUserValue.username)return e[t];return null};return Object(n.useEffect)((function(){O().then((function(e){return s(e)}))}),[l]),Object(n.useEffect)((function(){var e=y()(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL);return e.on("messages",(function(e){return j(e)})),function(){e.removeListener("messages")}}),[]),Object(S.jsxs)(P.a,{className:t.list,children:[Object(S.jsxs)(A.a,{classes:{root:t.subheader},onClick:function(){e.setScope("Global Chat")},children:[Object(S.jsx)(U.a,{children:Object(S.jsx)(D.a,{className:t.globe,children:Object(S.jsx)(Q.a,{})})}),Object(S.jsx)(N.a,{className:t.subheaderText,primary:"Global Chat"})]}),Object(S.jsx)(X.a,{}),o&&Object(S.jsx)(r.a.Fragment,{children:o.map((function(a){return Object(S.jsxs)(A.a,{className:t.listItem,button:!0,onClick:function(){e.setUser(d(a.recipientObj)),e.setScope(d(a.recipientObj).name)},children:[Object(S.jsx)(U.a,{children:Object(S.jsx)(D.a,{children:H(d(a.recipientObj).name)})}),Object(S.jsx)(N.a,{primary:d(a.recipientObj).name,secondary:Object(S.jsx)(r.a.Fragment,{children:a.lastMessage})})]},a._id)}))})]})},ee=a(214),te=a(215),ae=a(217),ne=a(110),re=a(218),ce=a(216),oe=a(108),se=a.n(oe),ie=a(107),ue=a.n(ie),le=Object(v.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1,display:"flex"},userDropdown:Object(W.a)({marginLeft:e.spacing(2),padding:e.spacing(1)},e.breakpoints.down("xs"),{marginLeft:"auto"})}})),be=function(){var e=Object(n.useState)(x.currentUserValue),t=Object(g.a)(e,1)[0],a=Object(n.useState)(null),r=Object(g.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)(!1),i=Object(g.a)(s,2),u=i[0],l=i[1],b=le();return Object(S.jsx)("div",{className:b.root,children:Object(S.jsx)(ee.a,{position:"static",children:Object(S.jsxs)(te.a,{children:[Object(S.jsx)(ce.a,{href:"/",className:b.title}),Object(S.jsxs)(ae.a,{"aria-owns":c?"simple-menu":void 0,"aria-haspopup":"true",onClick:function(e){l(!0),o(e.currentTarget)},className:b.userDropdown,color:"inherit",children:[t.name,u?Object(S.jsx)(ue.a,{}):Object(S.jsx)(se.a,{})]}),Object(S.jsx)(ne.a,{id:"simple-menu",anchorEl:c,open:Boolean(c),onClose:function(){l(!1),o(null)},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:Object(S.jsx)(re.a,{onClick:function(){x.logout(),O.push("/")},children:"Logout"})})]})})})},je=Object(v.a)((function(e){return{paper:{minHeight:"calc(100vh - 64px)",borderRadius:0},sidebar:{zIndex:8},subheader:{display:"flex",alignItems:"center",cursor:"pointer"},globe:{backgroundColor:e.palette.primary.dark},subheaderText:{color:e.palette.primary.dark}}})),Oe=function(){var e=Object(n.useState)("Global Chat"),t=Object(g.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),s=Object(g.a)(o,2),i=s[0],u=s[1],l=Object(n.useState)(null),b=Object(g.a)(l,2),j=b[0],O=b[1],d=je();return Object(S.jsxs)(r.a.Fragment,{children:[Object(S.jsx)(be,{}),Object(S.jsxs)(C.a,{container:!0,children:[Object(S.jsx)(C.a,{item:!0,md:4,className:d.sidebar,children:Object(S.jsxs)(R.a,{className:d.paper,square:!0,elevation:5,children:[Object(S.jsx)(R.a,{square:!0,children:Object(S.jsxs)(E.a,{onChange:function(e,t){u(t)},variant:"fullWidth",value:i,indicatorColor:"primary",textColor:"primary",children:[Object(S.jsx)(T.a,{label:"Chats"}),Object(S.jsx)(T.a,{label:"Users"})]})}),0===i&&Object(S.jsx)($,{setUser:O,setScope:c}),1===i&&Object(S.jsx)(w,{setUser:O,setScope:c})]})}),Object(S.jsx)(C.a,{item:!0,md:8,children:Object(S.jsx)(M,{scope:a,user:j})})]})]})},de=Object(i.a)({palette:{primary:{light:"#58a5f0",main:"#0277bd",dark:"#004c8c"},secondary:{light:"#ffd95a",main:"#f9a825",dark:"#c17900",contrastText:"#212121"},background:{default:"#f0f0f0"}},typography:{useNextVariants:!0}});var he=function(){return Object(S.jsxs)(l.a,{theme:de,children:[Object(S.jsx)(u.a,{}),Object(S.jsx)(b.a,{maxSnack:3,autoHideDuration:3e3,children:Object(S.jsx)(s.c,{history:O,children:Object(S.jsx)(_,{path:"/chat",component:Oe})})})]})};o.a.render(Object(S.jsx)(he,{}),document.getElementById("root"))}},[[161,1,2]]]);
//# sourceMappingURL=main.e495fb0f.chunk.js.map
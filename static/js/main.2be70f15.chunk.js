(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{227:function(e,t,n){e.exports=n(534)},232:function(e,t,n){},233:function(e,t,n){},374:function(e,t,n){},534:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(19),o=n.n(s),c=(n(232),n(233),n(16)),i=n.n(c),l=n(21),u=n(24),p=n(28),d=n(30),m=n(29),h=n(31),g=n(93),f=n(131),b=n.n(f),v=!1;function E(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function k(e){var t={data:e,headers:{}};if((!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&t.data&&0!==t.data.code)throw t.data;return t.data.data}function y(){return(y=Object(l.a)(i.a.mark(function e(t,n){var a,r,s,o,c=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:{},r=!(c.length>3&&void 0!==c[3])||c[3],t=v?t:"http://118.24.146.34:8770".concat(t),e.next=5,b()(t,Object(g.a)({},a,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)}));case 5:return E(s=e.sent),e.next=9,s.json();case 9:return o=e.sent,e.abrupt("return",k(o,r));case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(){return(w=Object(l.a)(i.a.mark(function e(t){var n,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=v?t:"http://118.24.146.34:8770".concat(t),e.next=3,b()(t,{credentials:"include"});case 3:return E(n=e.sent),e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",k(a));case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}var O={postJSON:function(e,t){return y.apply(this,arguments)},get:function(e){return w.apply(this,arguments)}},x=n(55),j=n(224),C=n.n(j),S=n(225),N=n.n(S),D=n(130),I=n.n(D),L=n(65),A=n(41),T=n(54),J=n(214),z=n.n(J),P=n(56),M=n.n(P),R=n(215),U=n.n(R),W=n(129),B=n.n(W),H=n(212),G=n.n(H),q=n(213),V=n.n(q),$=n(209),F=n.n($),K=n(211),Q=n.n(K),X=n(207),Y=n.n(X),Z=n(208),_=n.n(Z),ee=n(128),te=n.n(ee),ne=n(94),ae=n.n(ne),re={message:{display:"flex",alignItems:"center"},success:{backgroundColor:Y.a[600]},error:{backgroundColor:te.a[500]},info:{backgroundColor:ae.a[900]},warning:{backgroundColor:_.a[700]}},se={success:r.a.createElement(F.a,null),warning:r.a.createElement(Q.a,null),error:r.a.createElement(G.a,null),info:r.a.createElement(V.a,null)},oe=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleClose=function(){n.props.onClose()},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,n=e.message,a=e.type;return r.a.createElement(z.a,{anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:this.handleClose,open:t},r.a.createElement(B.a,{style:re[a],message:r.a.createElement("span",{id:"client-snackbar",style:re.message},se[a],n),action:[r.a.createElement(M.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleClose},r.a.createElement(U.a,null))]}))}}]),t}(r.a.Component),ce=n(38),ie=n.n(ce),le=n(96),ue=n.n(le),pe=function e(){Object(u.a)(this,e),this.events=this.events||{}};pe.prototype.emit=function(e){var t;t=this.events[e];for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];if(Array.isArray(t))for(var s=0;s<t.length;s++)t[s].apply(this,a);else t[0].apply(this,a)},pe.prototype.addListener=function(e,t){var n=this.events[e];n?n.push(t):this.events[e]=[t]};var de=new pe,me=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",snackbar:{open:!1,message:"",type:""}},n.handleClose=function(){n.setState({snackbar:{open:!1,message:"",type:""}})},n.handleChange=function(e){return function(t){n.setState(Object(T.a)({},e,t.target.value))}},n.handleLogin=Object(l.a)(i.a.mark(function e(){var t,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.username,r=t.password,a&&r||n.setState({snackbar:{open:!0,message:"\u8bf7\u586b\u5199\u7528\u6237\u540d\u548c\u5bc6\u7801",type:"warning"}}),e.prev=2,e.next=5,O.postJSON("/login",{username:a,password:r});case 5:n.setState({snackbar:{open:!0,message:"\u767b\u5f55\u6210\u529f",type:"success"}},function(){setTimeout(function(){n.props.history.push("/"),de.emit("login")},1e3)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),n.setState({snackbar:{open:!0,message:e.t0.msg,type:"error"}});case 11:case"end":return e.stop()}},e,null,[[2,8]])})),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(oe,Object.assign({},this.state.snackbar,{onClose:this.handleClose})),r.a.createElement("div",{className:"sign"},r.a.createElement(ie.a,{id:"username",label:"\u7528\u6237\u540d",value:this.state.username,onChange:this.handleChange("username"),margin:"normal",variant:"outlined"}),r.a.createElement(ie.a,{id:"password",label:"\u5bc6\u7801",type:"password",value:this.state.password,onChange:this.handleChange("password"),autoComplete:"current-password",margin:"normal",variant:"outlined"}),r.a.createElement(ue.a,{variant:"contained",size:"large",color:"primary",onClick:this.handleLogin},"\u767b\u5f55")))}}]),t}(r.a.Component),he=(n(374),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",snackbar:{open:!1,message:"",type:""}},n.handleClose=function(){n.setState({snackbar:{open:!1,message:"",type:""}})},n.handleChange=function(e){return function(t){n.setState(Object(T.a)({},e,t.target.value))}},n.handleSignUp=Object(l.a)(i.a.mark(function e(){var t,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.username,r=t.password,a&&r||n.setState({snackbar:{open:!0,message:"\u8bf7\u586b\u5199\u7528\u6237\u540d\u548c\u5bc6\u7801",type:"warning"}}),e.prev=2,e.next=5,O.postJSON("/signUp",{username:a,password:r});case 5:n.setState({snackbar:{open:!0,message:"\u6ce8\u518c\u6210\u529f",type:"success"}},function(){setTimeout(function(){n.props.history.push("/signin")},1e3)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),n.setState({snackbar:{open:!0,message:e.t0.msg,type:"error"}});case 11:case"end":return e.stop()}},e,null,[[2,8]])})),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(oe,Object.assign({},this.state.snackbar,{onClose:this.handleClose})),r.a.createElement("div",{className:"sign"},r.a.createElement(ie.a,{id:"username",label:"\u7528\u6237\u540d",value:this.state.username,onChange:this.handleChange("username"),margin:"normal",variant:"outlined"}),r.a.createElement(ie.a,{id:"password",label:"\u5bc6\u7801",type:"password",value:this.state.password,onChange:this.handleChange("password"),autoComplete:"current-password",margin:"normal",variant:"outlined"}),r.a.createElement(ue.a,{variant:"contained",size:"large",color:"primary",onClick:this.handleSignUp},"\u6ce8\u518c")))}}]),t}(r.a.Component)),ge=n(92),fe=n(226),be=n(63),ve=n(216),Ee=n.n(ve),ke=n(99),ye=n(134),we=n.n(ye),Oe=n(222),xe=n.n(Oe),je=n(133),Ce=n.n(je),Se=n(220),Ne=n.n(Se),De=n(221),Ie=n.n(De);function Le(){return r.a.createElement("div",{className:"skeleton"},r.a.createElement("div",{className:"skeleton-content"}),r.a.createElement("div",{className:"skeleton-content"}),r.a.createElement("div",{className:"skeleton-content"}),r.a.createElement("div",{className:"skeleton-content"}),r.a.createElement("div",{className:"skeleton-content"}),r.a.createElement("div",{className:"skeleton-content"}))}var Ae=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){return function(t){var a=t.target.value;n.setState(Object(be.a)(function(t){t.items[e].content=a}))}},n.toggleEdit=function(e){return function(){n.setState(Object(be.a)(function(t){t.items[e].editable=!t.items[e].editable}))}},n.handleClose=function(){n.setState({snackbar:{open:!1,message:"",type:""}})},n.handleToggle=function(e){return function(){n.setState(Object(be.a)(function(t){t.items[e].done=!t.items[e].done}),function(){n.handleSave()})}},n.handleCreate=function(){var e=n.state.items.concat({id:(+new Date).toString(),content:""});n.setState({items:e})},n.handleSave=Object(l.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.items.map(function(e){return{id:e.id,content:e.content,done:e.done}}),e.prev=1,e.next=4,O.postJSON("/updateNotes",{notes:t});case 4:n.setState({snackbar:{open:!0,message:"\u4fdd\u5b58\u6210\u529f",type:"success"},btnSave:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setState({snackbar:{open:!0,message:e.t0.msg,type:"error"}});case 10:case"end":return e.stop()}},e,null,[[1,7]])})),n.handleDelete=function(e){return Object(l.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.postJSON("/delete/".concat(e.id));case 3:n.setState(Object(be.a)(function(t){t.snackbar={open:!0,message:"\u5220\u9664\u6210\u529f",type:"success"},t.items.splice(t.items.findIndex(function(t){return t.id===e.id}),1)})),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),n.setState({snackbar:{open:!0,message:t.t0.msg,type:"error"}});case 9:case"end":return t.stop()}},t,null,[[0,6]])}))},n.state={items:[],done:!1,btnSave:!1,snackbar:{open:!1,message:"",type:""}},n.onDragEnd=n.onDragEnd.bind(Object(ge.a)(n)),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"onDragEnd",value:function(e){if(e.destination){var t=function(e,t,n){var a=Array.from(e),r=a.splice(t,1),s=Object(fe.a)(r,1)[0];return a.splice(n,0,s),a}(this.state.items,e.source.index,e.destination.index);Ee.a.isEqual(t,this.state.items)||this.setState({items:t,btnSave:!0})}}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get("/getNotes");case 3:if(t=e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:n=t.map(function(e){return{id:e.id,content:e.content,done:e.done||!1}}),this.setState({items:n,done:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),this.setState({snackbar:{open:!0,message:e.t0.msg,type:"error"}});case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,n=this;return e=this.state.items.length||this.state.done?this.state.items.map(function(e,t){return r.a.createElement(ke.b,{key:e.id,draggableId:e.id,index:t},function(a,s){return r.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps,{style:(o=s.isDragging,c=a.draggableProps.style,Object(g.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),boxSizing:"border-box",border:"2px solid",borderRadius:"4px",background:"#fff",borderColor:o?"#b3e5fc":"#f6f6f6",boxShadow:o?"3px 3px 20px #4fc3f7":"none"},c)),onClick:n.toggleEdit(t)}),e.editable?r.a.createElement("div",null,r.a.createElement(ie.a,{label:"Note",multiline:!0,rowsMax:"5",fullWidth:!0,className:"input-multiline",value:e.content,onChange:n.handleChange(t),margin:"normal",variant:"outlined",onClick:n.toggleEdit(t)}),r.a.createElement("div",{className:"input-multiline-btns"},r.a.createElement(M.a,{onClick:n.handleToggle(t),variant:"contained",size:"small",color:"secondary"},r.a.createElement(Ce.a,null)),r.a.createElement(M.a,{onClick:n.handleSave,variant:"contained",size:"small",color:"secondary"},r.a.createElement(Ne.a,null)),r.a.createElement(M.a,{onClick:n.handleDelete(e),variant:"contained",size:"small"},r.a.createElement(Ie.a,null)))):r.a.createElement("div",{className:"text-multiline",style:e.done?{textDecoration:"line-through",color:"#ccc"}:{}},r.a.createElement("pre",null,e.content?e.content:r.a.createElement("span",{style:{color:"#ccc"}},"\u70b9\u51fb\u7f16\u8f91"))));var o,c})}):r.a.createElement(Le,null),this.state.btnSave&&(t=r.a.createElement(we.a,{color:"secondary","aria-label":"Edit",className:"btn-feb btn-feb-save",onClick:this.handleSave},r.a.createElement(Ce.a,null))),r.a.createElement("div",null,r.a.createElement(oe,Object.assign({},this.state.snackbar,{onClose:this.handleClose})),r.a.createElement(we.a,{color:"primary","aria-label":"Add",className:"btn-feb btn-feb-create",onClick:this.handleCreate},r.a.createElement(xe.a,null)),t,r.a.createElement(ke.a,{onDragEnd:this.onDragEnd},r.a.createElement(ke.c,{droppableId:"droppable"},function(t,n){return r.a.createElement("div",Object.assign({},t.droppableProps,{ref:t.innerRef,style:(a=n.isDraggingOver,{boxSizing:"border-box",background:a?"#e1f5fe":"#fff",border:"1px solid #ddd",padding:8,width:"100%",maxWidth:"480px",margin:"0 auto"})}),e,t.placeholder);var a})))}}]),t}(r.a.Component),Te=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1},n.logout=Object(l.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.postJSON("/logout",{});case 3:n.setState({isLoggedIn:!1}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,null,[[0,6]])})),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return de.addListener("login",function(){t.setState({isLoggedIn:!0})}),e.prev=1,e.next=4,O.get("/checkLogin");case 4:this.setState({isLoggedIn:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),this.setState({isLoggedIn:!1});case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.props.classes;return e=this.state.isLoggedIn?r.a.createElement("div",{className:"logout",onClick:this.logout},"\u9000\u51fa\u767b\u5f55"):r.a.createElement("div",{className:"link-wrapper"},r.a.createElement(L.b,{to:"/"},"Home"),r.a.createElement(L.b,{to:"/signin/"},"SignIn"),r.a.createElement(L.b,{to:"/signup/"},"SignUp")),r.a.createElement("div",{className:t.root},r.a.createElement(L.a,null,r.a.createElement(C.a,{position:"static"},r.a.createElement(N.a,null,r.a.createElement(I.a,{variant:"h6",color:"inherit",className:t.grow}),e)),r.a.createElement(A.a,{path:"/",exact:!0,component:Ae}),r.a.createElement(A.a,{path:"/signin/",component:me}),r.a.createElement(A.a,{path:"/signup/",component:he}),r.a.createElement(A.a,{path:"/drag/",component:Ae})))}}]),t}(r.a.Component),Je=Object(x.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(Te),ze=Object(x.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:ae.a,secondary:{main:"#64dd17",contrastText:"#fff"}}});var Pe=function(){return r.a.createElement(x.MuiThemeProvider,{theme:ze},r.a.createElement("div",{className:"App"},r.a.createElement(Je,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[227,1,2]]]);
//# sourceMappingURL=main.2be70f15.chunk.js.map
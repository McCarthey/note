(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{311:function(e,t,a){e.exports=a(691)},316:function(e,t,a){},317:function(e,t,a){},455:function(e,t,a){},691:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),o=a.n(s),c=(a(316),a(317),a(11)),i=a.n(c),l=a(22),u=a(27),p=a(31),d=a(33),m=a(32),h=a(34),g=a(132),f=a(188),b=a.n(f),v=!1;function E(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function k(e){var t={data:e,headers:{}};if((!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&t.data&&0!==t.data.code)throw t.data;return t.data.data}function x(){return(x=Object(l.a)(i.a.mark(function e(t,a){var n,r,s,o,c=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>2&&void 0!==c[2]?c[2]:{},r=!(c.length>3&&void 0!==c[3])||c[3],t=v?t:"http://118.24.146.34:8770".concat(t),e.next=5,b()(t,Object(g.a)({},n,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(a)}));case 5:return E(s=e.sent),e.next=9,s.json();case 9:return o=e.sent,e.abrupt("return",k(o,r));case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(){return(y=Object(l.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=v?t:"http://118.24.146.34:8770".concat(t),e.next=3,b()(t,{credentials:"include"});case 3:return E(a=e.sent),e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",k(n));case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}var w={postJSON:function(e,t){return x.apply(this,arguments)},get:function(e){return y.apply(this,arguments)}},O=a(47),S=a(137),j=a.n(S),C=a(138),N=a.n(C),A=a(96),D=a.n(A),I=a(100),T=a(60),L=a(74),z=a(298),J=a.n(z),R=a(48),P=a.n(R),B=a(135),M=a.n(B),H=a(187),W=a.n(H),U=a(296),G=a.n(U),q=a(297),V=a.n(q),X=a(293),$=a.n(X),F=a(295),K=a.n(F),Q=a(291),Y=a.n(Q),Z=a(292),_=a.n(Z),ee=a(185),te=a.n(ee),ae=a(133),ne=a.n(ae),re={message:{display:"flex",alignItems:"center"},success:{backgroundColor:Y.a[600]},error:{backgroundColor:te.a[500]},info:{backgroundColor:ne.a[900]},warning:{backgroundColor:_.a[700]}},se={success:r.a.createElement($.a,null),warning:r.a.createElement(K.a,null),error:r.a.createElement(G.a,null),info:r.a.createElement(V.a,null)},oe=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleClose=function(){a.props.onClose()},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.message,n=e.type;return r.a.createElement(J.a,{anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:this.handleClose,open:t},r.a.createElement(W.a,{style:re[n],message:r.a.createElement("span",{id:"client-snackbar",style:re.message},se[n],a),action:[r.a.createElement(P.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleClose},r.a.createElement(M.a,null))]}))}}]),t}(r.a.Component),ce=a(49),ie=a.n(ce),le=a(75),ue=a.n(le),pe=function e(){Object(u.a)(this,e),this.events=this.events||{}};pe.prototype.emit=function(e){var t;t=this.events[e];for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];if(Array.isArray(t))for(var s=0;s<t.length;s++)t[s].apply(this,n);else t[0].apply(this,n)},pe.prototype.addListener=function(e,t){var a=this.events[e];a?a.push(t):this.events[e]=[t]};var de=new pe,me=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",snackbar:{open:!1,message:"",type:""}},a.handleClose=function(){a.setState({snackbar:{open:!1,message:"",type:""}})},a.handleChange=function(e){return function(t){a.setState(Object(L.a)({},e,t.target.value))}},a.handleLogin=Object(l.a)(i.a.mark(function e(){var t,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.username,r=t.password,n&&r||a.setState({snackbar:{open:!0,message:"\u8bf7\u586b\u5199\u7528\u6237\u540d\u548c\u5bc6\u7801",type:"warning"}}),e.prev=2,e.next=5,w.postJSON("/login",{username:n,password:r});case 5:a.setState({snackbar:{open:!0,message:"\u767b\u5f55\u6210\u529f",type:"success"}},function(){setTimeout(function(){a.props.history.push("/"),de.emit("login")},1e3)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),a.setState({snackbar:{open:!0,message:e.t0.msg,type:"error"}});case 11:case"end":return e.stop()}},e,null,[[2,8]])})),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(oe,Object.assign({},this.state.snackbar,{onClose:this.handleClose})),r.a.createElement("div",{className:"sign"},r.a.createElement(ie.a,{id:"username",label:"\u7528\u6237\u540d",value:this.state.username,onChange:this.handleChange("username"),margin:"normal",variant:"outlined"}),r.a.createElement(ie.a,{id:"password",label:"\u5bc6\u7801",type:"password",value:this.state.password,onChange:this.handleChange("password"),autoComplete:"current-password",margin:"normal",variant:"outlined"}),r.a.createElement(ue.a,{variant:"contained",size:"large",color:"primary",onClick:this.handleLogin},"\u767b\u5f55")))}}]),t}(r.a.Component),he=(a(455),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",snackbar:{open:!1,message:"",type:""}},a.handleClose=function(){a.setState({snackbar:{open:!1,message:"",type:""}})},a.handleChange=function(e){return function(t){a.setState(Object(L.a)({},e,t.target.value))}},a.handleSignUp=Object(l.a)(i.a.mark(function e(){var t,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.username,r=t.password,n&&r||a.setState({snackbar:{open:!0,message:"\u8bf7\u586b\u5199\u7528\u6237\u540d\u548c\u5bc6\u7801",type:"warning"}}),e.prev=2,e.next=5,w.postJSON("/signUp",{username:n,password:r});case 5:a.setState({snackbar:{open:!0,message:"\u6ce8\u518c\u6210\u529f",type:"success"}},function(){setTimeout(function(){a.props.history.push("/signin")},1e3)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),a.setState({snackbar:{open:!0,message:e.t0.msg,type:"error"}});case 11:case"end":return e.stop()}},e,null,[[2,8]])})),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(oe,Object.assign({},this.state.snackbar,{onClose:this.handleClose})),r.a.createElement("div",{className:"sign"},r.a.createElement(ie.a,{id:"username",label:"\u7528\u6237\u540d",value:this.state.username,onChange:this.handleChange("username"),margin:"normal",variant:"outlined"}),r.a.createElement(ie.a,{id:"password",label:"\u5bc6\u7801",type:"password",value:this.state.password,onChange:this.handleChange("password"),autoComplete:"current-password",margin:"normal",variant:"outlined"}),r.a.createElement(ue.a,{variant:"contained",size:"large",color:"primary",onClick:this.handleSignUp},"\u6ce8\u518c")))}}]),t}(r.a.Component)),ge=a(97),fe=a(310),be=a(80),ve=a(309),Ee=a(300),ke=a.n(Ee),xe=a(301),ye=a(101),we=a(136),Oe=a.n(we),Se=a(191),je=a.n(Se),Ce=a(307),Ne=a.n(Ce),Ae=a(190),De=a.n(Ae),Ie=a(303),Te=a.n(Ie),Le=a(186),ze=a.n(Le),Je=a(302),Re=a.n(Je);function Pe(e){return r.a.createElement(ze.a,Object.assign({direction:"up"},e))}var Be=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleClickOpen=function(){a.setState({open:!0},function(){setTimeout(function(){a.textareaRef.current.focus()},300)})},a.handleSave=Object(l.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("clicked Save"),t={id:(+new Date).toString(),content:a.state.content,done:!1},e.prev=2,e.next=5,w.postJSON("/create",t);case 5:a.setState({open:!1,content:""}),a.props.onCreateSuccess(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])})),a.handleClose=function(){a.setState({open:!1})},a.textareaRef=r.a.createRef(),a.state={open:!1,content:""},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(Oe.a,{color:"primary","aria-label":"Add",className:"btn-feb btn-feb-create",onClick:this.handleClickOpen},r.a.createElement(Re.a,null)),r.a.createElement(Te.a,{fullScreen:!0,open:this.state.open,onClose:this.handleClose,TransitionComponent:Pe},r.a.createElement(j.a,{className:t.appBar},r.a.createElement(N.a,null,r.a.createElement(P.a,{color:"inherit",onClick:this.handleClose,"aria-label":"Close"},r.a.createElement(M.a,null)),r.a.createElement(D.a,{variant:"h6",color:"inherit",className:t.flex},"\u65b0\u5efa\u7b14\u8bb0"),r.a.createElement(ue.a,{color:"inherit",onClick:this.handleSave},"\u4fdd\u5b58"))),r.a.createElement("textarea",{ref:this.textareaRef,className:t.textarea,value:this.state.content,onChange:function(t){return e.setState({content:t.target.value})}})))}}]),t}(r.a.Component),Me=Object(O.withStyles)({appBar:{position:"relative"},flex:{flex:1,textAlign:"center"},textarea:{overflow:"visible",height:"calc(100vh - 80px)",fontSize:"18px",lineHeight:"1.5",padding:"16px",resize:"none",border:"none",outline:"none"}})(Be);function He(){return r.a.createElement("div",{className:"skeleton"},r.a.createElement("div",{className:"skeleton-content"}),r.a.createElement("div",{className:"skeleton-content"}),r.a.createElement("div",{className:"skeleton-content"}),r.a.createElement("div",{className:"skeleton-content"}),r.a.createElement("div",{className:"skeleton-content"}),r.a.createElement("div",{className:"skeleton-content"}))}var We=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){return function(t){var n=t.target.value;a.setState(Object(be.a)(function(t){t.items[e].content=n}))}},a.toggleEdit=function(e){return function(t){"TEXTAREA"!==t.target.tagName&&a.setState(Object(be.a)(function(t){t.items[e].editable=!t.items[e].editable}))}},a.handleClose=function(){a.setState({snackbar:{open:!1,message:"",type:""}})},a.handleToggle=function(e,t){return Object(xe.debounce)(function(){a.setState(Object(be.a)(function(e){e.items[t].done=!e.items[t].done}),Object(l.a)(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.postJSON("/update/".concat(e.id),{done:a.state.items[t].done});case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),a.setState({snackbar:{open:!0,message:n.t0.msg,type:"error"}});case 8:case"end":return n.stop()}},n,null,[[0,5]])})))},200)},a.handleCreateSuccess=function(e){a.setState(Object(be.a)(function(t){t.items.unshift(e),t.snackbar={open:!0,message:"\u521b\u5efa\u6210\u529f",type:"success"}}))},a.getNotes=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("/getNotes");case 3:if(t=e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:n=t.map(function(e){return{id:e.id,content:e.content,done:e.done||!1}}),a.setState({items:n,done:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a.setState({snackbar:{open:!0,message:e.t0.msg,type:"error"}});case 13:case"end":return e.stop()}},e,null,[[0,10]])})),a.handleSave=Object(l.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.items.map(function(e){return{id:e.id,content:e.content,done:e.done}}),e.prev=1,e.next=4,w.postJSON("/updateNotes",{notes:t});case 4:a.setState({snackbar:{open:!0,message:"\u4fdd\u5b58\u6210\u529f",type:"success"},btnSave:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a.setState({snackbar:{open:!0,message:e.t0.msg,type:"error"}});case 10:case"end":return e.stop()}},e,null,[[1,7]])})),a.handleDelete=function(e){return Object(l.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.postJSON("/delete/".concat(e));case 3:a.setState(Object(be.a)(function(t){t.snackbar={open:!0,message:"\u5220\u9664\u6210\u529f",type:"success"},t.items.splice(t.items.findIndex(function(t){return t.id===e}),1),t.btnSave=!1})),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),a.setState({snackbar:{open:!0,message:t.t0.msg,type:"error"}});case 9:case"end":return t.stop()}},t,null,[[0,6]])}))},a.state={items:[],done:!1,btnSave:!1,deleteAreaShow:!1,snackbar:{open:!1,message:"",type:""}},a.onDragEnd=a.onDragEnd.bind(Object(ge.a)(a)),a.onDragStart=a.onDragStart.bind(Object(ge.a)(a)),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"onDragStart",value:function(){this.setState({deleteAreaShow:!0})}},{key:"onDragEnd",value:function(e){if(e.destination){if("deleteArea"===e.destination.droppableId){var t=this.state.items[e.source.index];this.handleDelete(t.id)()}var a=function(e,t,a){var n=Array.from(e),r=n.splice(t,1),s=Object(fe.a)(r,1)[0];return n.splice(a,0,s),n}(this.state.items,e.source.index,e.destination.index);this.setState({deleteAreaShow:!1}),"deleteArea"===e.destination.droppableId&&ke.a.isEqual(a,this.state.items)||this.setState({items:a,btnSave:!0})}}},{key:"componentDidMount",value:function(){this.getNotes()}},{key:"render",value:function(){var e,t,a=this;return e=this.state.items.length||this.state.done?this.state.items.map(function(e,t){return r.a.createElement(ye.b,{key:e.id,draggableId:e.id,index:t},function(n,s){return r.a.createElement("div",Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps,{style:(o=s.isDragging,c=n.draggableProps.style,Object(g.a)({position:"relative",userSelect:"none",zIndex:"3",padding:4,margin:"0 0 ".concat(8,"px 0"),boxSizing:"border-box",border:"2px solid",borderRadius:"4px",background:"#fff",borderColor:o?"#b3e5fc":"#f6f6f6",boxShadow:o?"3px 3px 20px #4fc3f7":"none"},c))}),e.editable?r.a.createElement("div",{onClick:a.toggleEdit(t)},r.a.createElement(ie.a,{label:"Note",multiline:!0,rowsMax:"5",fullWidth:!0,className:"input-multiline",value:e.content,onChange:a.handleChange(t),margin:"normal",variant:"outlined"}),r.a.createElement("div",{className:"input-multiline-btns"},r.a.createElement(P.a,{onClick:a.handleSave,variant:"contained",size:"small",color:"secondary"},r.a.createElement(Ne.a,null)),r.a.createElement(P.a,{onClick:a.handleDelete(e.id),variant:"contained",size:"small"},r.a.createElement(De.a,null)))):r.a.createElement("div",null,r.a.createElement(P.a,{onClick:a.handleToggle(e,t),variant:"contained",size:"small",color:e.done?"secondary":"default",style:{float:"left"}},r.a.createElement(je.a,null)),r.a.createElement("div",{className:"text-multiline",style:e.done?{textDecoration:"line-through",color:"#ccc"}:{},onClick:a.toggleEdit(t)},r.a.createElement("pre",null,e.content?e.content:r.a.createElement("span",{style:{color:"#ccc"}},"\u70b9\u51fb\u7f16\u8f91")))));var o,c})}):r.a.createElement(He,null),this.state.btnSave&&(t=r.a.createElement(Oe.a,{color:"secondary","aria-label":"Edit",className:"btn-feb btn-feb-save",onClick:this.handleSave},r.a.createElement(je.a,null))),r.a.createElement("div",null,r.a.createElement(oe,Object.assign({},this.state.snackbar,{onClose:this.handleClose})),t,r.a.createElement(Me,{onCreateSuccess:this.handleCreateSuccess}),r.a.createElement(ye.a,{onDragStart:this.onDragStart,onDragEnd:this.onDragEnd},r.a.createElement(ye.c,{droppableId:"droppable"},function(t,n){return r.a.createElement("div",Object.assign({},t.droppableProps,{ref:t.innerRef,style:(s=n.isDraggingOver,o=a.state.deleteAreaShow,{boxSizing:"border-box",maxHeight:o?"calc(100vh - 64px - 64px)":"calc(100vh - 64px)",overflow:"hidden auto",background:s?"#e1f5fe":"#fff",border:"1px solid #ddd",padding:8,width:"100%",maxWidth:"480px",margin:"0 auto"})}),r.a.createElement(ve.a,{type:["right"]},e,t.placeholder));var s,o}),r.a.createElement(ye.c,{droppableId:"deleteArea"},function(e,t){return r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,style:(n=t.isDraggingOver,{position:"fixed",bottom:"0",textAlign:"center",transition:".3s",color:n?"#fff":"#e53935",background:n?"#e53935":"transparent",padding:8,width:"100%",height:"48px",margin:"0 auto"})}),a.state.deleteAreaShow?r.a.createElement(De.a,null):"",e.placeholder);var n})))}}]),t}(r.a.Component),Ue=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1},a.logout=Object(l.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.postJSON("/logout",{});case 3:a.setState({isLoggedIn:!1}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,null,[[0,6]])})),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return de.addListener("login",function(){t.setState({isLoggedIn:!0})}),e.prev=1,e.next=4,w.get("/checkLogin");case 4:this.setState({isLoggedIn:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),this.setState({isLoggedIn:!1});case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.props.classes;return e=this.state.isLoggedIn?r.a.createElement("div",{className:"logout",onClick:this.logout},"\u9000\u51fa\u767b\u5f55"):r.a.createElement("div",{className:"link-wrapper"},r.a.createElement(I.b,{to:"/"},"\u7b14\u8bb0"),r.a.createElement(I.b,{to:"/signin/"},"\u767b\u5f55"),r.a.createElement(I.b,{to:"/signup/"},"\u6ce8\u518c")),r.a.createElement("div",{className:t.root},r.a.createElement(I.a,null,r.a.createElement(j.a,{position:"static"},r.a.createElement(N.a,null,r.a.createElement(D.a,{variant:"h6",color:"inherit",className:t.grow}),e)),r.a.createElement(T.a,{path:"/",exact:!0,component:We}),r.a.createElement(T.a,{path:"/signin/",component:me}),r.a.createElement(T.a,{path:"/signup/",component:he}),r.a.createElement(T.a,{path:"/drag/",component:We})))}}]),t}(r.a.Component),Ge=Object(O.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(Ue),qe=Object(O.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:ne.a,secondary:{main:"#64dd17",contrastText:"#fff"}}});var Ve=function(){return r.a.createElement(O.MuiThemeProvider,{theme:qe},r.a.createElement("div",{className:"App"},r.a.createElement(Ge,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[311,1,2]]]);
//# sourceMappingURL=main.eab88a2f.chunk.js.map
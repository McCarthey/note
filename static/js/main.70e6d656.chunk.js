(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{310:function(e,t,n){e.exports=n(690)},315:function(e,t,n){},316:function(e,t,n){},454:function(e,t,n){},690:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(21),o=n.n(s),c=(n(315),n(316),n(11)),i=n.n(c),l=n(22),u=n(27),p=n(31),d=n(33),m=n(32),h=n(34),g=n(98),f=n(188),b=n.n(f),v=!1;function E(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function k(e){var t={data:e,headers:{}};if((!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&t.data&&0!==t.data.code)throw t.data;return t.data.data}function O(){return(O=Object(l.a)(i.a.mark(function e(t,n){var a,r,s,o,c=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:{},r=!(c.length>3&&void 0!==c[3])||c[3],t=v?t:"http://118.24.146.34:8770".concat(t),e.next=5,b()(t,Object(g.a)({},a,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)}));case 5:return E(s=e.sent),e.next=9,s.json();case 9:return o=e.sent,e.abrupt("return",k(o,r));case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}function x(){return(x=Object(l.a)(i.a.mark(function e(t){var n,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=v?t:"http://118.24.146.34:8770".concat(t),e.next=3,b()(t,{credentials:"include"});case 3:return E(n=e.sent),e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",k(a));case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}var y={postJSON:function(e,t){return O.apply(this,arguments)},get:function(e){return x.apply(this,arguments)}},S=n(47),w=n(137),j=n.n(w),C=n(138),N=n.n(C),I=n(96),A=n.n(I),D=n(101),T=n(58),L=n(73),P=n(297),_=n.n(P),J=n(74),M=n.n(J),R=n(135),z=n.n(R),G=n(187),U=n.n(G),B=n(295),W=n.n(B),H=n(296),q=n.n(H),V=n(292),X=n.n(V),$=n(294),F=n.n($),K=n(290),Q=n.n(K),Y=n(291),Z=n.n(Y),ee=n(185),te=n.n(ee),ne=n(133),ae=n.n(ne),re={message:{display:"flex",alignItems:"center"},success:{backgroundColor:Q.a[600]},error:{backgroundColor:te.a[500]},info:{backgroundColor:ae.a[900]},warning:{backgroundColor:Z.a[700]}},se={success:r.a.createElement(X.a,null),warning:r.a.createElement(F.a,null),error:r.a.createElement(W.a,null),info:r.a.createElement(q.a,null)},oe=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleClose=function(){n.props.onClose()},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,n=e.message,a=e.type;return r.a.createElement(_.a,{anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:this.handleClose,open:t},r.a.createElement(U.a,{style:re[a],message:r.a.createElement("span",{id:"client-snackbar",style:re.message},se[a],n),action:[r.a.createElement(M.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleClose},r.a.createElement(z.a,null))]}))}}]),t}(r.a.Component),ce=n(80),ie=n.n(ce),le=n(75),ue=n.n(le),pe=function e(){Object(u.a)(this,e),this.events=this.events||{}};pe.prototype.emit=function(e){var t;t=this.events[e];for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];if(Array.isArray(t))for(var s=0;s<t.length;s++)t[s].apply(this,a);else t[0].apply(this,a)},pe.prototype.addListener=function(e,t){var n=this.events[e];n?n.push(t):this.events[e]=[t]};var de=new pe,me=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",snackbar:{open:!1,message:"",type:""}},n.handleClose=function(){n.setState({snackbar:{open:!1,message:"",type:""}})},n.handleChange=function(e){return function(t){n.setState(Object(L.a)({},e,t.target.value))}},n.handleLogin=Object(l.a)(i.a.mark(function e(){var t,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.username,r=t.password,a&&r||n.setState({snackbar:{open:!0,message:"\u8bf7\u586b\u5199\u7528\u6237\u540d\u548c\u5bc6\u7801",type:"warning"}}),e.prev=2,e.next=5,y.postJSON("/login",{username:a,password:r});case 5:n.setState({snackbar:{open:!0,message:"\u767b\u5f55\u6210\u529f",type:"success"}},function(){setTimeout(function(){n.props.history.push("/"),localStorage.setItem("MC_NOTE_APP_LOGIN",1),de.emit("login")},1e3)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),n.setState({snackbar:{open:!0,message:e.t0.msg,type:"error"}});case 11:case"end":return e.stop()}},e,null,[[2,8]])})),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("MC_NOTE_APP_LOGIN")&&this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(oe,Object.assign({},this.state.snackbar,{onClose:this.handleClose})),r.a.createElement("div",{className:"sign"},r.a.createElement(ie.a,{id:"username",label:"\u7528\u6237\u540d",value:this.state.username,onChange:this.handleChange("username"),margin:"normal",variant:"outlined"}),r.a.createElement(ie.a,{id:"password",label:"\u5bc6\u7801",type:"password",value:this.state.password,onChange:this.handleChange("password"),autoComplete:"current-password",margin:"normal",variant:"outlined"}),r.a.createElement(ue.a,{variant:"contained",size:"large",color:"primary",onClick:this.handleLogin},"\u767b\u5f55")))}}]),t}(r.a.Component),he=(n(454),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",snackbar:{open:!1,message:"",type:""}},n.handleClose=function(){n.setState({snackbar:{open:!1,message:"",type:""}})},n.handleChange=function(e){return function(t){n.setState(Object(L.a)({},e,t.target.value))}},n.handleSignUp=Object(l.a)(i.a.mark(function e(){var t,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.username,r=t.password,a&&r||n.setState({snackbar:{open:!0,message:"\u8bf7\u586b\u5199\u7528\u6237\u540d\u548c\u5bc6\u7801",type:"warning"}}),e.prev=2,e.next=5,y.postJSON("/signUp",{username:a,password:r});case 5:n.setState({snackbar:{open:!0,message:"\u6ce8\u518c\u6210\u529f",type:"success"}},function(){setTimeout(function(){n.props.history.push("/signin")},1e3)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),n.setState({snackbar:{open:!0,message:e.t0.msg,type:"error"}});case 11:case"end":return e.stop()}},e,null,[[2,8]])})),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("MC_NOTE_APP_LOGIN")&&this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(oe,Object.assign({},this.state.snackbar,{onClose:this.handleClose})),r.a.createElement("div",{className:"sign"},r.a.createElement(ie.a,{id:"username",label:"\u7528\u6237\u540d",value:this.state.username,onChange:this.handleChange("username"),margin:"normal",variant:"outlined"}),r.a.createElement(ie.a,{id:"password",label:"\u5bc6\u7801",type:"password",value:this.state.password,onChange:this.handleChange("password"),autoComplete:"current-password",margin:"normal",variant:"outlined"}),r.a.createElement(ue.a,{variant:"contained",size:"large",color:"primary",onClick:this.handleSignUp},"\u6ce8\u518c")))}}]),t}(r.a.Component)),ge=n(97),fe=n(309),be=n(59),ve=n(308),Ee=n(299),ke=n.n(Ee),Oe=n(300),xe=n(102),ye=n(136),Se=n.n(ye),we=n(190),je=n.n(we),Ce=n(306),Ne=n.n(Ce),Ie=n(302),Ae=n.n(Ie),De=n(186),Te=n.n(De),Le=n(301),Pe=n.n(Le);function _e(e){return r.a.createElement(Te.a,Object.assign({direction:"up"},e))}var Je=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleClickOpen=function(){n.setState({open:!0},function(){setTimeout(function(){n.textareaRef.current.focus()},300)})},n.handleSave=Object(l.a)(i.a.mark(function e(){var t,a,r,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("clicked Save"),t=n.state,a=t.id,r=t.content,!a){e.next=14;break}return e.prev=3,e.next=6,y.postJSON("/update/".concat(a),{content:r});case 6:n.setState({open:!1,content:"",id:""}),n.props.onEditSuccess({id:a,content:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:return e.abrupt("return");case 14:return s={id:(+new Date).toString(),content:n.state.content,done:!1},e.prev=15,e.next=18,y.postJSON("/create",s);case 18:n.setState({open:!1,content:""}),n.props.onCreateSuccess(s),e.next=25;break;case 22:e.prev=22,e.t1=e.catch(15),console.log(e.t1);case 25:case"end":return e.stop()}},e,null,[[3,10],[15,22]])})),n.handleClose=function(){n.setState({open:!1,content:"",id:""})},n.textareaRef=r.a.createRef(),n.state={open:!1,content:"",id:""},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.item;t!==e.item&&this.setState({open:!0,content:t.content,id:t.id})}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(Se.a,{color:"primary","aria-label":"Add",className:"btn-feb btn-feb-create",onClick:this.handleClickOpen},r.a.createElement(Pe.a,null)),r.a.createElement(Ae.a,{fullScreen:!0,open:this.state.open,onClose:this.handleClose,TransitionComponent:_e},r.a.createElement(j.a,{className:t.appBar},r.a.createElement(N.a,null,r.a.createElement(M.a,{color:"inherit",onClick:this.handleClose,"aria-label":"Close"},r.a.createElement(z.a,null)),r.a.createElement(A.a,{variant:"h6",color:"inherit",className:t.flex},this.state.id?"\u7f16\u8f91\u7b14\u8bb0":"\u65b0\u5efa\u7b14\u8bb0"),r.a.createElement(ue.a,{color:"inherit",onClick:this.handleSave},"\u4fdd\u5b58"))),r.a.createElement("textarea",{ref:this.textareaRef,className:t.textarea,value:this.state.content,onChange:function(t){return e.setState({content:t.target.value})}})))}}]),t}(r.a.Component),Me=Object(S.withStyles)({appBar:{position:"relative"},flex:{flex:1,textAlign:"center"},textarea:{overflow:"visible",height:"calc(100vh - 80px)",fontSize:"18px",lineHeight:"1.5",padding:"16px",resize:"none",border:"none",outline:"none"}})(Je);function Re(){return r.a.createElement("div",{className:"skeleton"},r.a.createElement("div",{className:"skeleton-content"}),r.a.createElement("div",{className:"skeleton-content"}),r.a.createElement("div",{className:"skeleton-content"}),r.a.createElement("div",{className:"skeleton-content"}),r.a.createElement("div",{className:"skeleton-content"}),r.a.createElement("div",{className:"skeleton-content"}))}var ze=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){return function(t){var a=t.target.value;n.setState(Object(be.a)(function(t){t.items[e].content=a}))}},n.handleEdit=function(e,t){return function(){console.log(e,t),n.setState({editItem:Object(g.a)({},e,{index:t})},function(){return console.log(n.state.editItem)})}},n.toggleEdit=function(e){return function(t){"TEXTAREA"!==t.target.tagName&&n.setState(Object(be.a)(function(t){t.items[e].editable=!t.items[e].editable}))}},n.handleClose=function(){n.setState({snackbar:{open:!1,message:"",type:""}})},n.handleToggle=function(e,t){return Object(Oe.debounce)(function(){n.setState(Object(be.a)(function(e){e.items[t].done=!e.items[t].done}),Object(l.a)(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.postJSON("/update/".concat(e.id),{done:n.state.items[t].done});case 3:a.next=8;break;case 5:a.prev=5,a.t0=a.catch(0),n.setState({snackbar:{open:!0,message:a.t0.msg,type:"error"}});case 8:case"end":return a.stop()}},a,null,[[0,5]])})))},200)},n.handleUpdateSuccess=function(e){return function(t){"create"===e?n.setState(Object(be.a)(function(e){e.items.unshift(t),e.snackbar={open:!0,message:"\u521b\u5efa\u6210\u529f",type:"success"}})):"edit"===e&&n.setState(Object(be.a)(function(e){e.items[e.items.findIndex(function(e){return e.id===t.id})].content=t.content,e.snackbar={open:!0,message:"\u4fee\u6539\u6210\u529f",type:"success"}}))}},n.getNotes=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("/getNotes");case 3:if(t=e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:a=t.map(function(e){return{id:e.id,content:e.content,done:e.done||!1}}),n.setState({items:a,done:!0}),e.next=17;break;case 10:if(e.prev=10,e.t0=e.catch(0),999!==e.t0.code){e.next=16;break}return localStorage.setItem("MC_NOTE_APP_LOGIN",""),n.props.history.push("/signin"),e.abrupt("return");case 16:n.setState({snackbar:{open:!0,message:e.t0.msg,type:"error"}});case 17:case"end":return e.stop()}},e,null,[[0,10]])})),n.handleSave=Object(l.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.items.map(function(e){return{id:e.id,content:e.content,done:e.done}}),e.prev=1,e.next=4,y.postJSON("/updateNotes",{notes:t});case 4:n.setState({snackbar:{open:!0,message:"\u4fdd\u5b58\u6210\u529f",type:"success"},btnSave:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setState({snackbar:{open:!0,message:e.t0.msg,type:"error"}});case 10:case"end":return e.stop()}},e,null,[[1,7]])})),n.handleDelete=function(e){return Object(l.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.postJSON("/delete/".concat(e));case 3:n.setState(Object(be.a)(function(t){t.snackbar={open:!0,message:"\u5220\u9664\u6210\u529f",type:"success"},t.items.splice(t.items.findIndex(function(t){return t.id===e}),1),t.btnSave=!1})),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),n.setState({snackbar:{open:!0,message:t.t0.msg,type:"error"}});case 9:case"end":return t.stop()}},t,null,[[0,6]])}))},n.state={items:[],done:!1,btnSave:!1,deleteAreaShow:!1,editItem:{id:"",content:"",done:!1,index:null},snackbar:{open:!1,message:"",type:""}},n.onDragEnd=n.onDragEnd.bind(Object(ge.a)(n)),n.onDragStart=n.onDragStart.bind(Object(ge.a)(n)),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"onDragStart",value:function(){this.setState({deleteAreaShow:!0})}},{key:"onDragEnd",value:function(e){if(e.destination){if("deleteArea"===e.destination.droppableId){var t=this.state.items[e.source.index];this.handleDelete(t.id)()}var n=function(e,t,n){var a=Array.from(e),r=a.splice(t,1),s=Object(fe.a)(r,1)[0];return a.splice(n,0,s),a}(this.state.items,e.source.index,e.destination.index);this.setState({deleteAreaShow:!1}),ke.a.isEqual(n,this.state.items)||"deleteArea"!==e.destination.droppableId&&this.setState({items:n,btnSave:!0})}}},{key:"componentDidMount",value:function(){var e=this;this.getNotes(),de.addListener("logout",function(){e.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e,t,n=this;return e=this.state.items.length||this.state.done?this.state.items.map(function(e,t){return r.a.createElement(xe.b,{key:e.id,draggableId:e.id,index:t},function(a,s){return r.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps,{style:(o=s.isDragging,c=a.draggableProps.style,Object(g.a)({position:"relative",userSelect:"none",zIndex:"3",padding:4,margin:"0 0 ".concat(8,"px 0"),boxSizing:"border-box",border:"2px solid",borderRadius:"4px",background:"#fff",borderColor:o?"#b3e5fc":"#f6f6f6",boxShadow:o?"3px 3px 20px #4fc3f7":"none"},c))}),r.a.createElement("div",null,r.a.createElement(M.a,{onClick:n.handleToggle(e,t),variant:"contained",size:"small",color:e.done?"secondary":"default",style:{float:"left"}},r.a.createElement(je.a,null)),r.a.createElement("div",{className:"text-multiline",style:e.done?{textDecoration:"line-through",color:"#ccc"}:{},onClick:n.handleEdit(e,t)},r.a.createElement("pre",null,e.content?e.content:r.a.createElement("span",{style:{color:"#ccc"}},"\u70b9\u51fb\u7f16\u8f91")))));var o,c})}):r.a.createElement(Re,null),this.state.btnSave&&(t=r.a.createElement(Se.a,{color:"secondary","aria-label":"Edit",className:"btn-feb btn-feb-save",onClick:this.handleSave},r.a.createElement(je.a,null))),r.a.createElement("div",null,r.a.createElement(oe,Object.assign({},this.state.snackbar,{onClose:this.handleClose})),t,r.a.createElement(Me,{onCreateSuccess:this.handleUpdateSuccess("create"),item:this.state.editItem,onEditSuccess:this.handleUpdateSuccess("edit")}),r.a.createElement(xe.a,{onDragStart:this.onDragStart,onDragEnd:this.onDragEnd},r.a.createElement(xe.c,{droppableId:"droppable"},function(t,a){return r.a.createElement("div",Object.assign({},t.droppableProps,{ref:t.innerRef,style:(s=a.isDraggingOver,o=n.state.deleteAreaShow,{boxSizing:"border-box",maxHeight:o?"calc(100vh - 64px - 64px)":"calc(100vh - 64px)",overflow:"hidden auto",background:s?"#e1f5fe":"#fff",border:"1px solid #ddd",padding:8,width:"100%",maxWidth:"480px",boxShadow:"0 4px 10px #ddd",margin:"0 auto"})}),r.a.createElement(ve.a,{type:["right"]},e,t.placeholder));var s,o}),r.a.createElement(xe.c,{droppableId:"deleteArea"},function(e,t){return r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,style:(a=t.isDraggingOver,{position:"fixed",bottom:"0",textAlign:"center",transition:".3s",color:a?"#fff":"#e53935",background:a?"#e53935":"transparent",padding:8,width:"100%",height:"48px",margin:"0 auto"})}),n.state.deleteAreaShow?r.a.createElement(Ne.a,null):"",e.placeholder);var a})))}}]),t}(r.a.Component),Ge=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1},n.logout=Object(l.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.postJSON("/logout",{});case 3:n.setState({isLoggedIn:!1}),localStorage.setItem("MC_NOTE_APP_LOGIN",""),de.emit("logout"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])})),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.cookie.includes("uid")&&localStorage.setItem("MC_NOTE_APP_LOGIN",1),de.addListener("login",function(){t.setState({isLoggedIn:!0})}),e.prev=2,e.next=5,y.get("/checkLogin");case 5:this.setState({isLoggedIn:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),this.setState({isLoggedIn:!1});case 11:case"end":return e.stop()}},e,this,[[2,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.props.classes;return e=this.state.isLoggedIn?r.a.createElement("div",{className:"logout",onClick:this.logout},"\u9000\u51fa\u767b\u5f55"):r.a.createElement("div",{className:"link-wrapper"},r.a.createElement(D.b,{to:"/"},"\u7b14\u8bb0"),r.a.createElement(D.b,{to:"/signin/"},"\u767b\u5f55"),r.a.createElement(D.b,{to:"/signup/"},"\u6ce8\u518c")),r.a.createElement("div",{className:t.root},r.a.createElement(D.a,null,r.a.createElement(j.a,{position:"static",className:"App-header"},r.a.createElement(N.a,null,r.a.createElement(A.a,{variant:"h6",color:"inherit",className:t.grow}),e)),r.a.createElement(T.a,{path:"/",exact:!0,component:ze}),r.a.createElement(T.a,{path:"/signin/",component:me}),r.a.createElement(T.a,{path:"/signup/",component:he})))}}]),t}(r.a.Component),Ue=Object(S.withStyles)({root:{flexGrow:1,marginBottom:20},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(Ge),Be=Object(S.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:ae.a,secondary:{main:"#64dd17",contrastText:"#fff"}}});var We=function(){return r.a.createElement(S.MuiThemeProvider,{theme:Be},r.a.createElement("div",{className:"App"},r.a.createElement(Ue,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[310,1,2]]]);
//# sourceMappingURL=main.70e6d656.chunk.js.map
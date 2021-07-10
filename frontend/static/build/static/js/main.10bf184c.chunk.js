(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{33:function(e,t,a){},53:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(23),r=a.n(i),c=(a(48),a(53),a(16)),o=a(21),l=a(14),d=a.n(l),h=a(25),u=a(7),b=a(8),j=a(6),p=a(11),m=a(10),O=a(12),f=(a(33),a(15)),x=a.n(f),g=a(62),v=a(1),y=["isAuthenticated"];var N=function(e){var t=e.isAuthenticated,a=Object(g.a)(e,y);return t?Object(v.jsx)(O.b,Object(o.a)({},a)):Object(v.jsx)(O.a,{to:"/login"})},k=a(46),C=a(60),w=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this;return Object(v.jsxs)(k.a,{bg:"light",expand:"lg",className:"navbar",children:[Object(v.jsx)(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsx)(k.a.Collapse,{id:"basic-navbar-nav",children:Object(v.jsxs)(C.a,{className:"mr-auto align-items-baseline",children:[Object(v.jsx)(c.b,{to:"/",className:"mr-2",children:"Home"}),Object(v.jsx)(c.b,{to:"/profile",className:"mr-2",children:"Profile"}),Object(v.jsx)(c.b,{to:"/records",className:"mr-2",children:"Records"}),Object(v.jsx)(c.b,{to:"/addRecord",className:"mr-2",children:"Add Record"}),Object(v.jsx)(c.b,{to:"/login",className:"mr-2",children:"Login"}),Object(v.jsx)(c.b,{to:"/registration",className:"mr-2",children:"Register"}),Object(v.jsx)("button",{className:"btn",onClick:function(){return e.props.handleLogout()},children:"Logout"})]})})]})}}]),a}(n.Component),S=a(18),I=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={username:"",email:"",password:""},n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n.handleInput=n.handleInput.bind(Object(j.a)(n)),n}return Object(b.a)(a,[{key:"handleInput",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"login-form-div",children:Object(v.jsxs)("form",{className:"form-login p-4 mb-3 login-form-container",onSubmit:this.handleSubmit,children:[Object(v.jsx)("h2",{children:"Login"}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"InputUsername",className:"form-label",children:"Username"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",placeholder:"username",name:"username",type:"text",value:this.state.username,onChange:this.handleInput})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"InputUsername",className:"form-label",children:"Email"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"InputUsername",className:"form-label",children:"Password"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",type:"password",placeholder:"password",name:"password",value:this.state.password,onChange:this.handleInput})]}),Object(v.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Submit"}),Object(v.jsx)("div",{className:"divider",children:"New here? Register!"}),Object(v.jsx)("button",{className:"btn btn-primary toggle-register",children:"Create New Account"})]})})}}]),a}(n.Component),R=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n.handleInput=n.handleInput.bind(Object(j.a)(n)),n}return Object(b.a)(a,[{key:"handleInput",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleRegistration(this.state)}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"login-form-div",children:Object(v.jsxs)("form",{className:"form-login p-4 mb-3 login-form-container",onSubmit:this.handleSubmit,children:[Object(v.jsxs)("h2",{children:["New User? ",Object(v.jsx)("br",{})," Register!"]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"InputUsername",className:"form-label",children:"Username"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",placeholder:"username",name:"username",type:"text",value:this.state.username,onChange:this.handleInput})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"InputUsername",className:"form-label",children:"Email"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"InputUsername",className:"form-label",children:"Password"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",type:"password",placeholder:"password",name:"password1",value:this.state.password,onChange:this.handleInput})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"InputUsername",className:"form-label",children:"Password"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",type:"password",placeholder:"Re-enter Password",name:"password2",value:this.state.password,onChange:this.handleInput})]}),Object(v.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Submit"}),Object(v.jsx)("div",{className:"divider",children:"New here? Register!"}),Object(v.jsx)("button",{className:"btn btn-primary toggle-register",children:"Create New Account"})]})})}}]),a}(n.Component),_=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)("h1",{children:"Welcome to the Homepage!"})})}}]),a}(n.Component),E=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={display_name:"",dob:"",toothbrush_replaced:"",ins_card:null,preview:"",isEditing:!1,id:null},n.handleInput=n.handleInput.bind(Object(j.a)(n)),n.handleImage=n.handleImage.bind(Object(j.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n.editProfile=n.editProfile.bind(Object(j.a)(n)),n.addProfile=n.addProfile.bind(Object(j.a)(n)),n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/users/profiles/user/").then((function(t){return t.ok||e.setState({isEditing:!0}),t.json()})).then((function(t){return e.setState(Object(o.a)({},t))})).catch((function(e){console.error("There has been a problem with your fetch operation: ",e)}))}},{key:"handleInput",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){var t=this,a=e.target.files[0];this.setState({ins_card:a});var n=new FileReader;n.onloadend=function(){t.setState({preview:n.result})},n.readAsDataURL(a)}},{key:"handleSubmit",value:function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),this.state.id?this.editProfile():this.addProfile();case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addProfile",value:function(){var e=Object(h.a)(d.a.mark((function e(t){var a,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.state.ins_card instanceof File),(a=new FormData).append("display_name",this.state.display_name),a.append("dob",this.state.dob),a.append("toothbrush_replaced",this.state.toothbrush_replaced),this.state.ins_card instanceof File&&a.append("ins_card",this.state.ins_card),n={method:"POST",headers:{"X-CSRFToken":x.a.get("csrftoken")},body:a},e.next=9,fetch("/api/v1/users/profiles/",n);case 9:s=e.sent,this.setState({response:s});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"editProfile",value:function(){var e=Object(h.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("display_name",this.state.display_name),a.append("dob",this.state.dob),a.append("toothbrush_replaced",this.state.toothbrush_replaced),this.state.ins_card instanceof File&&a.append("ins_card",this.state.ins_card),n={method:"PATCH",headers:{"X-CSRFToken":x.a.get("csrftoken")},body:a},e.next=8,fetch("/api/v1/users/profiles/user/",n);case 8:e.sent.ok,this.setState({isEditing:!1});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,a,n,s=this;return Object(v.jsx)("div",{className:"profile-form-div",children:Object(v.jsxs)("form",{className:"form-login p-4 mb-3 login-form-container profile-form-container",children:[Object(v.jsx)("h2",{children:"Profile"}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"display_name",className:"form-label",children:"Full Name:"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",placeholder:"FIRST MIDDLE LAST",name:"display_name",type:"text",value:this.state.display_name,onChange:this.handleInput,disabled:!(null===(e=this.state)||void 0===e?void 0:e.isEditing)})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"dob",className:"form-label",children:"Date of Birth:"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",type:"text",placeholder:"MM/DD/YYYY",name:"dob",value:this.state.dob,onChange:this.handleInput,disabled:!(null===(t=this.state)||void 0===t?void 0:t.isEditing)})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"toothbrush_replaced",className:"form-label",children:"Toothbrush Replaced On:"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",type:"text",placeholder:"MM/DD/YYYY",name:"toothbrush_replaced",value:this.state.toothbrush_replaced,onChange:this.handleInput,disabled:!(null===(a=this.state)||void 0===a?void 0:a.isEditing)})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"ins_card",className:"form-label",children:"Dental Insurance Card:"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{style:{width:"220px"},type:"file",name:"ins_card",onChange:this.handleImage,disabled:!(null===(n=this.state)||void 0===n?void 0:n.isEditing)}),this.state.ins_card?Object(v.jsx)("img",{className:"ins-card",src:this.state.preview||this.state.ins_card,alt:""}):null]}),this.state.isEditing?Object(v.jsx)("button",{className:"btn btn-primary",type:"button",onClick:this.handleSubmit,children:"Save"}):Object(v.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return s.setState({isEditing:!0})},children:"Edit"})]})})}}]),a}(n.Component),A=a(61),D=a(93),T=a(94),L=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state=Object(o.a)(Object(o.a)({},n.props.record),{},{isEditing:!1}),n.handleInput=n.handleInput.bind(Object(j.a)(n)),n.handleCheckbox=n.handleCheckbox.bind(Object(j.a)(n)),n.handleImage=n.handleImage.bind(Object(j.a)(n)),n.saveRecord=n.saveRecord.bind(Object(j.a)(n)),n}return Object(b.a)(a,[{key:"saveRecord",value:function(e){e.preventDefault();var t=this.state;t.appt_img instanceof File||delete t.appt_img,delete t.isEditing,this.props.editRecord(t),this.setState({isEditing:!1})}},{key:"handleInput",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"handleCheckbox",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.checked))}},{key:"handleImage",value:function(e){var t=this,a=e.target.files[0];this.setState({appt_img:a});var n=new FileReader;n.onloadend=function(){t.setState({preview:n.result})},n.readAsDataURL(a)}},{key:"render",value:function(){var e,t,a,n,s,i,r,c=this;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"record-form-div",children:Object(v.jsxs)("form",{className:"form-login p-4 mb-3 login-form-container profile-form-container",children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"appt_date",className:"form-label",children:"Appointment Date:"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",placeholder:"MM/DD/YYYY",name:"appt_date",type:"text",value:this.state.appt_date,onChange:this.handleInput,disabled:!(null===(e=this.state)||void 0===e?void 0:e.isEditing)})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"category",className:"form-label",children:"Appointment Category"}),Object(v.jsx)("br",{}),Object(v.jsxs)("select",{onChange:this.handleInput,value:this.state.category,name:"category",id:"category",disabled:!(null===(t=this.state)||void 0===t?void 0:t.isEditing),children:[Object(v.jsx)("option",{value:"CLE",children:"Cleaning"}),Object(v.jsx)("option",{value:"RES",children:"Restorative"})]})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("input",{id:"xrays",name:"xrays",type:"checkbox",checked:this.state.xrays,onChange:this.handleCheckbox,disabled:!(null===(a=this.state)||void 0===a?void 0:a.isEditing)}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{for:"xrays",className:"form-label",children:"X Rays"})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"category",className:"form-label",children:"Xray Type:"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",type:"text",placeholder:"BWX FMX Pano PA",name:"xray_type",value:this.state.xray_type,onChange:this.handleInput,disabled:!(null===(n=this.state)||void 0===n?void 0:n.isEditing)})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"services",className:"form-label",children:"Services Completed:"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",type:"text",name:"services",placeholder:"Services Completed?",value:this.state.services,onChange:this.handleInput,disabled:!(null===(s=this.state)||void 0===s?void 0:s.isEditing)})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"recommendations",className:"form-label",children:"Recommendations:"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",type:"text",placeholder:"Recommendations?",name:"recommendations",value:this.state.recommendations,onChange:this.handleInput,disabled:!(null===(i=this.state)||void 0===i?void 0:i.isEditing)})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"appt_img",className:"form-label",children:"Upload xrays or photos:"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{style:{width:"220px"},type:"file",name:"appt_img",onChange:this.handleImage,disabled:!(null===(r=this.state)||void 0===r?void 0:r.isEditing)}),this.state.appt_img?Object(v.jsx)("img",{className:"appt-img",src:this.state.preview||this.state.appt_img,alt:""}):null]}),this.state.isEditing?Object(v.jsx)("button",{className:"btn btn-primary",type:"button",onClick:this.saveRecord,children:"Save"}):Object(v.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return c.setState({isEditing:!0})},children:"Edit"}),Object(v.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return c.props.deleteRecord(c.props.record.id)},children:"Delete"})]})})})}}]),a}(n.Component),P=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={appt_date:"",category:"CLE",xrays:!1,xray_type:"",services:"",recommendations:"",appt_img:null,preview:"",isEditing:!1,id:null},n.handleInput=n.handleInput.bind(Object(j.a)(n)),n.handleCheckbox=n.handleCheckbox.bind(Object(j.a)(n)),n.handleImage=n.handleImage.bind(Object(j.a)(n)),n}return Object(b.a)(a,[{key:"handleInput",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"handleCheckbox",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.checked))}},{key:"handleImage",value:function(e){var t=this,a=e.target.files[0];this.setState({appt_img:a});var n=new FileReader;n.onloadend=function(){t.setState({preview:n.result})},n.readAsDataURL(a)}},{key:"render",value:function(){var e,t,a,n,s,i,r,c=this;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"record-form-div",children:Object(v.jsxs)("form",{className:"form-login p-4 mb-3 login-form-container profile-form-container",children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"appt_date",className:"form-label",children:"Appointment Date:"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",placeholder:"MM/DD/YYYY",name:"appt_date",type:"date",value:this.state.appt_date,onChange:this.handleInput,disabled:!(null===(e=this.state)||void 0===e?void 0:e.isEditing)})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"category",className:"form-label",children:"Appointment Category"}),Object(v.jsx)("br",{}),Object(v.jsxs)("select",{onChange:this.handleInput,name:"category",id:"category",children:[Object(v.jsx)("option",{value:"CLE",children:"Cleaning"}),Object(v.jsx)("option",{value:"RES",children:"Restorative"})]})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"xrays",className:"form-label",children:"X Rays"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{id:"xrays",name:"xrays",type:"checkbox",checked:this.state.xrays,onChange:this.handleCheckbox,disabled:!(null===(t=this.state)||void 0===t?void 0:t.isEditing)}),Object(v.jsx)("br",{})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"xrays",className:"form-label",children:"Xrays:"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",type:"text",placeholder:"True / False",name:"xrays",value:this.state.xrays,onChange:this.handleInput,disabled:!(null===(a=this.state)||void 0===a?void 0:a.isEditing)})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"category",className:"form-label",children:"Xray Type:"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",type:"text",placeholder:"BWX FMX Pano PA",name:"xray_type",value:this.state.xray_type,onChange:this.handleInput,disabled:!(null===(n=this.state)||void 0===n?void 0:n.isEditing)})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"services",className:"form-label",children:"Services Completed:"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",type:"text",name:"services",placeholder:"Services Completed?",value:this.state.services,onChange:this.handleInput,disabled:!(null===(s=this.state)||void 0===s?void 0:s.isEditing)})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"recommendations",className:"form-label",children:"Recommendations:"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"login-input",type:"text",placeholder:"Recommendations?",name:"recommendations",value:this.state.recommendations,onChange:this.handleInput,disabled:!(null===(i=this.state)||void 0===i?void 0:i.isEditing)})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{for:"appt_img",className:"form-label",children:"Upload xrays or photos:"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{style:{width:"220px"},type:"file",name:"appt_img",onChange:this.handleImage,disabled:!(null===(r=this.state)||void 0===r?void 0:r.isEditing)}),this.state.appt_img?Object(v.jsx)("img",{className:"appt-img",src:this.state.preview||this.state.appt_img,alt:""}):null]}),this.state.isEditing?Object(v.jsx)("button",{className:"btn btn-primary",type:"button",onClick:this.handleSubmit,children:"Save"}):Object(v.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return c.setState({isEditing:!0})},children:"Edit"})]})})})}}]),a}(n.Component),F=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={records:[],show:!1},n.editRecord=n.editRecord.bind(Object(j.a)(n)),n.deleteRecord=n.deleteRecord.bind(Object(j.a)(n)),n.handleModal=n.handleModal.bind(Object(j.a)(n)),n}return Object(b.a)(a,[{key:"handleModal",value:function(){this.setState({show:!this.state.show})}},{key:"editRecord",value:function(){var e=Object(h.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new FormData,Object.keys(t).forEach((function(e){return a.append(e,t[e])})),n={method:"PATCH",headers:{"X-CSRFToken":x.a.get("csrftoken")},body:a},e.next=6,fetch("/api/v1/records/".concat(t.id,"/"),n);case 6:e.sent.ok;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteRecord",value:function(){var e=Object(h.a)(d.a.mark((function e(t){var a,n=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":x.a.get("csrftoken")}},fetch("/api/v1/records/".concat(t),a).then((function(e){var a=Object(A.a)(n.state.records),s=a.findIndex((function(e){return e.id===t}));a.splice(s,1),n.setState({records:a})})).catch((function(e){console.error("Error: ",e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/records/").then((function(e){return e.json()})).then((function(t){return e.setState({records:t})}))}},{key:"render",value:function(){var e=this,t=this.state.records.map((function(t){return Object(v.jsx)(L,{record:t,deleteRecord:e.deleteRecord,editRecord:e.editRecord},t.id)}));return Object(v.jsxs)("div",{children:[Object(v.jsx)(D.a,{onClick:function(){return e.handleModal()},children:"Add New Record"}),Object(v.jsxs)(T.a,{show:this.state.show,onHide:function(){return e.handleModal()},children:[Object(v.jsx)(T.a.Header,{closeButton:!0,children:Object(v.jsx)(T.a.Title,{children:"Add New Record"})}),Object(v.jsx)(T.a.Body,{children:Object(v.jsx)(P,{})}),Object(v.jsx)(T.a.Footer,{children:Object(v.jsx)(D.a,{variant:"primary",children:"Save"})})]}),Object(v.jsx)("h1",{children:"Records"}),Object(v.jsx)("ul",{children:t})]})}}]),a}(n.Component),M=a(35),U=(a(57),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"map-container",children:[Object(v.jsx)("h2",{children:"Find Care:"}),Object(v.jsxs)(M.Map,{className:"map",google:this.props.google,zoom:14,children:[Object(v.jsx)(M.Marker,{onClick:this.onMarkerClick,name:"Current location"}),Object(v.jsx)(M.InfoWindow,{onClose:this.onInfoWindowClose})]})]})}}]),a}(n.Component)),X=(Object(M.GoogleApiWrapper)({apiKey:"AIzaSyAo_ERV2DzyXcIZnNstLUq4ABrHHR62E5A"})(U),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){fetch("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=".concat("AIzaSyAo_ERV2DzyXcIZnNstLUq4ABrHHR62E5A")).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){return console.log("API test: ",{data:e})})).catch((function(e){console.error("Problem with fetch request: ",e)}))}},{key:"render",value:function(){return Object(v.jsx)("div",{children:"Map"})}}]),a}(n.Component)),Y=(Object(M.GoogleApiWrapper)({apiKey:"AIzaSyBG242E6D2eH_Ai2RYwAiTMg2Y83P3iyXU"})(X),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={isAuthenticated:!!x.a.get("Authorization")},n.handleLogin=n.handleLogin.bind(Object(j.a)(n)),n.handleLogout=n.handleLogout.bind(Object(j.a)(n)),n.handleRegistration=n.handleRegistration.bind(Object(j.a)(n)),n}return Object(b.a)(a,[{key:"handleLogin",value:function(){var e=Object(h.a)(d.a.mark((function e(t){var a,n,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":x.a.get("csrftoken")},body:JSON.stringify(t)},n=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/login/",a).catch(n);case 4:if(!(s=e.sent).ok){e.next=14;break}return e.next=8,s.json().catch(n);case 8:i=e.sent,x.a.set("Authorization","Token ".concat(i.key)),this.setState({isAuthenticated:!0}),this.props.history.push("/"),e.next=15;break;case 14:alert("Incorrect Username of Password, Please Try Again!");case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleRegistration",value:function(){var e=Object(h.a)(d.a.mark((function e(t){var a,n,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":x.a.get("csrftoken")},body:JSON.stringify(t)},n=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/registration/",a).catch(n);case 4:if(!(s=e.sent).ok){e.next=14;break}return e.next=8,s.json().catch(n);case 8:i=e.sent,x.a.set("Authorization","Token ".concat(i.key)),this.setState({isAuthenticated:!0}),this.props.history.push("/"),e.next=15;break;case 14:throw new Error("Network response was not ok");case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":x.a.get("csrftoken")}},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",t).catch(a);case 4:e.sent.ok&&(x.a.remove("Authorization"),this.setState({isAuthenticated:!1}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(w,{handleLogout:this.handleLogout}),Object(v.jsxs)(O.d,{children:[Object(v.jsx)(O.b,{path:"/login",render:function(t){return Object(v.jsx)(I,Object(o.a)(Object(o.a)({},t),{},{handleLogin:e.handleLogin,isAuthed:!0}))}}),Object(v.jsx)(O.b,{path:"/registration",render:function(t){return Object(v.jsx)(R,Object(o.a)(Object(o.a)({},t),{},{handleRegistration:e.handleRegistration}))}}),Object(v.jsx)(N,{isAuthenticated:this.state.isAuthenticated,exact:!0,path:"/",children:Object(v.jsx)(_,{})}),Object(v.jsx)(N,{isAuthenticated:this.state.isAuthenticated,path:"/profile",children:Object(v.jsx)(E,{})}),Object(v.jsx)(N,{isAuthenticated:this.state.isAuthenticated,handleLogout:this.handleLogout,path:"/records",children:Object(v.jsx)(F,{})}),Object(v.jsx)(N,{isAuthenticated:this.state.isAuthenticated,handleLogout:this.handleLogout,path:"/addRecord",children:Object(v.jsx)(P,{})})]})]})}}]),a}(n.Component)),H=Object(O.g)(Y),z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,95)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(c.a,{children:Object(v.jsx)(H,{})})}),document.getElementById("root")),z()}},[[90,1,2]]]);
//# sourceMappingURL=main.10bf184c.chunk.js.map
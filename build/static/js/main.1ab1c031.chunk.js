(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(28),r=n.n(s),o=(n(34),n(35),n(5)),l=n(3),i=n(2),j=n(0),u=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){null!==localStorage.getItem("token")&&a(!0)}),[]),Object(j.jsx)("div",{className:"header",children:Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:[Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)(o.b,{to:"/dashboard",className:"navbar-brand",children:"Django/React Issue Tracker"}),Object(j.jsx)("div",{id:"navbarNav",className:"collapse navbar-collapse",children:Object(j.jsx)("div",{className:"navbar-nav",children:!0===n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o.b,{to:"/dashboard",className:"nav-item nav-link",children:"Dashboard"}),Object(j.jsx)(o.b,{to:"/logout",className:"nav-item nav-link",children:"Logout"})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o.b,{to:"/login",className:"nav-item nav-link",children:"Login"}),Object(j.jsx)(o.b,{to:"/signup",className:"nav-itme nav-link",children:"Signup"})]})})})]})})},b=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],u=Object(c.useState)(!1),b=Object(i.a)(u,2),d=b[0],h=b[1],p=Object(c.useState)(!0),O=Object(i.a)(p,2),m=O[0],x=O[1];Object(c.useEffect)((function(){null!==localStorage.getItem("token")?window.location.replace("http://localhost:3000/dashboard"):x(!1)}),[]);return Object(j.jsxs)("div",{className:"login",children:[!1===m&&Object(j.jsx)("h1",{className:"login-header",children:"Login"}),!0===d&&Object(j.jsx)("p",{className:"login-input alert alert-danger",children:"Cannot log in with provided credentials"}),!1===m&&Object(j.jsxs)("form",{className:"login-input",onSubmit:function(e){e.preventDefault();var t={username:n,password:o};fetch("http://127.0.0.1:8000/api/v1/issue_tracker/auth/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.key?(localStorage.clear(),localStorage.setItem("token",e.key),window.location.replace("http://localhost:3000/dashboard")):(a(""),l(""),localStorage.clear(),h(!0))}))},children:[Object(j.jsx)("label",{className:"login-input",htmlFor:"username",children:"Username:"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"login-input form-control",name:"username",type:"username",value:n,required:!0,onChange:function(e){return a(e.target.value)}})," ",Object(j.jsx)("br",{}),Object(j.jsx)("label",{className:"login-input",htmlFor:"password",children:"Password:"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"login-input form-control",name:"pasword",type:"password",value:o,required:!0,onChange:function(e){return l(e.target.value)}})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"login-input btn btn-primary",type:"submit",value:"Login"})]})]})},d=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],u=Object(c.useState)(""),b=Object(i.a)(u,2),d=b[0],h=b[1],p=Object(c.useState)(!1),O=Object(i.a)(p,2),m=O[0],x=O[1],f=Object(c.useState)(!0),g=Object(i.a)(f,2),v=g[0],N=g[1];Object(c.useEffect)((function(){null!==localStorage.getItem("token")?window.location.replace("http://localhost:3000/dashboard"):N(!1)}),[]);return Object(j.jsxs)("div",{className:"login",children:[!1===v&&Object(j.jsx)("h1",{className:"login-header",children:"Signup"}),!0===m&&Object(j.jsx)("h2",{children:"Cannot signup with provided credentials"}),Object(j.jsxs)("form",{className:"login-input",onSubmit:function(e){e.preventDefault();var t={username:n,password1:o,password2:d};fetch("http://127.0.0.1:8000/api/v1/issue_tracker/auth/register/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e),e.key?(localStorage.clear(),localStorage.setItem("token",e.key),window.location.replace("http://localhost:3000/dashboard")):(a(""),l(""),h(""),localStorage.clear(),x(!0))}))},children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username:"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"login-input form-control",name:"username",type:"username",value:n,onChange:function(e){return a(e.target.value)},required:!0})," ",Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"password1",children:"Password:"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"login-input form-control",name:"password1",type:"password",value:o,onChange:function(e){return l(e.target.value)},required:!0})," ",Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"password2",children:"Confirm password:"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"login-input form-control",name:"password2",type:"password",value:d,onChange:function(e){return h(e.target.value)},required:!0})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"btn btn-primary login-input",type:"submit",value:"Signup"})]})]})},h=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){null===localStorage.getItem("token")?window.location.replace("http://localhost:3000/login"):a(!1)}),[]);return Object(j.jsx)("div",{className:"logout-content",children:!1===n&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Are you sure you want to logout?"}),Object(j.jsx)("input",{className:"btn btn-danger",type:"button",value:"Logout",onClick:function(e){e.preventDefault(),fetch("http://127.0.0.1:8000/api/v1/issue_tracker/auth/logout/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.clear(),window.location.replace("http://localhost:3000/login")}))}}),Object(j.jsx)(o.b,{className:"btn btn-secondary",to:"/dashboard",children:"Cancel"})]})})},p=n(6),O=n.n(p),m="http://127.0.0.1:8000/api/projects/",x=function(){return O.a.get(m).then((function(e){return e.data}))},f=function(e){return O.a.post(m,e).then((function(e){return e.data}))},g=function(e){return O.a.delete("".concat(m).concat(e,"/"))},v={headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}},N=function(){return O.a.get("http://127.0.0.1:8000/api/v1/issue_tracker/auth/user/",v).then((function(e){return e.data}))},y="http://127.0.0.1:8000/api/issues/",w=function(){return O.a.get(y).then((function(e){return e.data}))},k=function(e){return O.a.post(y,e).then((function(e){return e.data}))},S=function(e){return O.a.delete("".concat(y).concat(e,"/"))},I=function(e,t){return O.a.put("".concat(y).concat(e,"/"),t).then((function(e){return e.data}))},C=function(e){var t=e.project,n=e.removeName,c=e.issues.filter((function(e){return e.project===t.pk&&!1===e.completed}));return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"project",children:Object(j.jsx)(o.b,{to:{pathname:"".concat(t.user,"/").concat(t.project_name,"/").concat(t.pk)},children:t.project_name})}),Object(j.jsx)("td",{className:"issue-number",children:c.length}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){return n(t.pk)},children:"Delete"})})]})},_=function(e){var t=e.toggle,n=e.newProject,c=e.addProject,a=e.handleProjectChange;return Object(j.jsx)("div",{className:"modal",children:Object(j.jsx)("div",{className:"modal_content",children:Object(j.jsxs)("form",{onSubmit:c,children:[Object(j.jsx)("span",{className:"close",onClick:t,children:"\xd7"}),Object(j.jsx)("h2",{children:"Create a New Project"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-9",children:Object(j.jsx)("input",{className:"form-control",value:n,onChange:a})}),Object(j.jsx)("div",{className:"col-lg-3",children:Object(j.jsx)("input",{className:"form-control btn btn-success",type:"submit",name:"submit",value:"Save Project"})})]})]})})})},P=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!0),r=Object(i.a)(s,2),o=r[0],l=r[1],u=Object(c.useState)(null),b=Object(i.a)(u,2),d=b[0],h=b[1],p=Object(c.useState)(!1),O=Object(i.a)(p,2),m=O[0],v=O[1],y=Object(c.useState)([]),k=Object(i.a)(y,2),S=k[0],I=k[1],P=Object(c.useState)(""),D=Object(i.a)(P,2),T=D[0],F=D[1];Object(c.useEffect)((function(){w().then((function(e){I(e)}))}),[]),Object(c.useEffect)((function(){null===localStorage.getItem("token")?window.location.replace("http://localhost:3000/login"):N().then((function(e){h(e),l(!1)}))}),[]),Object(c.useEffect)((function(){x().then((function(e){return a(e)}))}),[d]);var A=function(){v(!m)},E=function(e){window.confirm("Are you sure you wish to delete this projecct?")&&g(e).then((function(t){return a(n.filter((function(t){return t.pk!==e})))}))},L=o?{}:n.filter((function(e){return e.user===d.pk}));return Object(j.jsx)("div",{className:"page-content",children:!1===o&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"page-title",children:"Dashboard"}),Object(j.jsxs)("h2",{children:["Hello ",d.username,"!"]}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:A,children:"New Project"}),Object(j.jsxs)("table",{className:"table table-hover",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"table-primary well well-sm",children:[Object(j.jsx)("th",{children:"Project"}),Object(j.jsx)("th",{children:"# of Issues"}),Object(j.jsx)("th",{children:"Actions"})]})}),Object(j.jsx)("tbody",{children:L.map((function(e){return Object(j.jsx)(C,{project:e,username:d.username,removeName:E,issues:S},e.project_name)}))})]}),m?Object(j.jsx)(_,{toggle:A,newProject:T,addProject:function(e){e.preventDefault();var t={project_name:T,user:d.pk};f(t).then((function(e){a(n.concat(e)),F("")})),A()},handleProjectChange:function(e){F(e.target.value)}}):null]})})},D=n(13),T=n(18),F=n.n(T),A=function(e){var t=e.issue,n=e.removeIssue,c=e.completeIssue,a=e.toggleInProgress;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("strong",{children:t.pk})}),Object(j.jsx)("td",{children:t.issue_text}),Object(j.jsx)("td",{children:t.issue_type}),Object(j.jsx)("td",{children:t.priority}),Object(j.jsx)("td",{children:t.date_posted}),Object(j.jsx)("td",{children:Object(j.jsxs)("div",{className:"dropdown",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-info dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:!0===t.in_progress?"In Progress":"Not Started"}),Object(j.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"dropdown-item",onClick:function(){return a(t.pk,!0)},children:"In Progress"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"dropdown-item",onClick:function(){return a(t.pk,!1)},children:"Not Started"})})]})]})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{className:"btn btn-success",onClick:function(){return c(t.pk)},children:"Mark Complete"}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){return n(t.pk)},children:"Delete"})]})]})},E=function(e){var t=e.newIssue,n=e.type,c=e.priority,a=e.addIssue,s=e.handleIssueChange,r=e.handlePriorityChange,o=e.handleTypeChange,l=e.toggle;return Object(j.jsx)("div",{className:"modal",children:Object(j.jsx)("div",{className:"modal_content",children:Object(j.jsxs)("form",{className:"form-group",onSubmit:a,children:[Object(j.jsx)("span",{className:"close",onClick:l,children:"\xd7"}),Object(j.jsx)("h2",{children:"Create a New Issue"}),Object(j.jsxs)("div",{className:"row align-items-center",children:[Object(j.jsxs)("div",{className:"col-lg-6",children:[Object(j.jsx)("label",{htmlFor:"issue-text",className:"form-label",children:"Describe the issue."}),Object(j.jsx)("textarea",{id:"issue-text",className:"form-control",value:t,onChange:s})]}),Object(j.jsxs)("div",{className:"col-lg-2",children:[Object(j.jsx)("label",{htmlFor:"type-select",className:"form-label",children:"Type"}),Object(j.jsxs)("select",{id:"type-select",className:"form-control",name:"type",value:n,onChange:o,children:[Object(j.jsx)("option",{value:"Bug",children:"Bug"}),Object(j.jsx)("option",{value:"Feature",children:"Feature"})]})]}),Object(j.jsxs)("div",{className:"col-lg-2",children:[Object(j.jsx)("label",{htmlFor:"priority-select",className:"form-label",children:"Priority"}),Object(j.jsxs)("select",{id:"priority-select",className:"form-control",name:"priority",value:c,onChange:r,children:[Object(j.jsx)("option",{value:"Low",children:"Low"}),Object(j.jsx)("option",{value:"Medium",children:"Medium"}),Object(j.jsx)("option",{value:"High",children:"High"}),Object(j.jsx)("option",{value:"Critical",children:"Critical"})]})]}),Object(j.jsx)("div",{className:"col-lg-2",children:Object(j.jsx)("input",{className:"form-control btn btn-success",type:"submit",name:"submit",value:"Save Issue"})})]})]})})})},L=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),u=r[0],b=r[1],d=Object(c.useState)("Bug"),h=Object(i.a)(d,2),p=h[0],O=h[1],m=Object(c.useState)("Low"),x=Object(i.a)(m,2),f=x[0],g=x[1],v=Object(c.useState)(!1),N=Object(i.a)(v,2),y=N[0],C=N[1],_=Object(l.f)(),P=_.userId,T=_.projectName,L=_.projectId,B=parseInt(L);Object(c.useEffect)((function(){w().then((function(e){a(e)}))}),[]);var q=function(e){window.confirm("Are you sure you want to delete this issue?")&&S(e).then((function(t){a(n.filter((function(t){return t.pk!==e})))}))},M=function(e){var t=z.find((function(t){return t.pk===e})),c=F()(t.date_posted),s=Object(D.a)(Object(D.a)({},t),{},{completed:!0,date_posted:c,date_completed:new Date});I(e,s).then((function(t){a(n.map((function(n){return n.pk!==e?n:t})))}))},H=function(e,t){var c=z.find((function(t){return t.pk===e})),s=F()(c.date_posted),r=Object(D.a)(Object(D.a)({},c),{},{date_posted:s,in_progress:t});I(e,r).then((function(t){a(n.map((function(n){return n.pk!==e?n:t})))}))},J=function(){C(!y)},z=n.filter((function(e){return e.project===B&&!1===e.completed}));return Object(j.jsxs)("div",{className:"page-content",children:[Object(j.jsx)("h1",{className:"page-title",children:T}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:J,children:"New Issue"}),Object(j.jsx)(o.b,{to:{pathname:"/".concat(P,"/").concat(T,"/").concat(L,"/completed")},className:"btn btn-primary",children:"View Completed Issues"}),z.length>0?Object(j.jsxs)("table",{className:"table table-hover",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"table-primary well well-sm",children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"Issue"}),Object(j.jsx)("th",{children:"Type"}),Object(j.jsx)("th",{"data-sortable":"true",children:"Priority"}),Object(j.jsx)("th",{children:"Date Posted"}),Object(j.jsx)("th",{children:"Status"}),Object(j.jsx)("th",{children:"Actions"})]})}),Object(j.jsx)("tbody",{children:z.map((function(e){return Object(j.jsx)(A,{issue:e,removeIssue:q,completeIssue:M,toggleInProgress:H},e.pk)}))})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("table",{className:"table table-hover",children:Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"table-primary well well-sm",children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"Issue"}),Object(j.jsx)("th",{children:"Type"}),Object(j.jsx)("th",{"data-sortable":"true",children:"Priority"}),Object(j.jsx)("th",{children:"Date Posted"}),Object(j.jsx)("th",{children:"Status"}),Object(j.jsx)("th",{children:"Actions"})]})})}),Object(j.jsx)("p",{children:"No issues yet to show. Create a new issue by clicking the 'New Issue' button above!"})]}),y?Object(j.jsx)(E,{toggle:J,newIssue:u,type:p,priority:f,addIssue:function(e){e.preventDefault();var t={user:P,issue_text:u,project:L,priority:f,issue_type:p,date_posted:new Date,date_completed:null,in_progress:!1,completed:!1};k(t).then((function(e){a(n.concat(e)),b("")})),J()},handleIssueChange:function(e){b(e.target.value)},handlePriorityChange:function(e){g(e.target.value)},handleTypeChange:function(e){O(e.target.value)}}):null]})},B=function(e){var t=e.issue,n=e.removeIssue;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.issue_text}),Object(j.jsx)("td",{children:t.issue_type}),Object(j.jsx)("td",{children:t.priority}),Object(j.jsx)("td",{children:t.date_posted}),Object(j.jsx)("td",{children:t.date_completed}),Object(j.jsx)("td",{className:"table-success",children:"Complete"}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){return n(t.pk)},children:"Delete"})})]})},q=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(l.f)(),r=s.userId,u=s.projectName,b=s.projectId,d=parseInt(b);Object(c.useEffect)((function(){w().then((function(e){a(e)}))}),[]);var h=function(e){window.confirm("Are you sure you want to delete this issue?")&&S(e).then((function(t){a(n.filter((function(t){return t.pk!==e})))}))},p=n.filter((function(e){return e.project===d&&!0===e.completed}));return Object(j.jsxs)("div",{className:"page-content",children:[Object(j.jsxs)("h1",{className:"page-title",children:[u,Object(j.jsx)("small",{className:"text-muted",children:" Completed Issues"})]}),Object(j.jsx)(o.b,{to:{pathname:"/".concat(r,"/").concat(u,"/").concat(b,"/")},className:"btn btn-primary",children:"Back to Issues"}),Object(j.jsxs)("table",{className:"table table-hover",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"table-primary well well-sm",children:[Object(j.jsx)("th",{children:"Issue"}),Object(j.jsx)("th",{children:"Type"}),Object(j.jsx)("th",{children:"Priority"}),Object(j.jsx)("th",{children:"Date Posted"}),Object(j.jsx)("th",{children:"Date Completed"}),Object(j.jsx)("th",{children:"Status"}),Object(j.jsx)("th",{children:"Actions"})]})}),Object(j.jsx)("tbody",{children:p.map((function(e){return Object(j.jsx)(B,{issue:e,removeIssue:h},e.pk)}))})]})]})};O.a.defaults.xsrfCookieName="csrftoken",O.a.defaults.xsrfHeaderName="X-CSRFToken";var M=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",component:P,exact:!0}),Object(j.jsx)(l.a,{path:"/login",component:b,exact:!0}),Object(j.jsx)(l.a,{path:"/signup",component:d,exact:!0}),Object(j.jsx)(l.a,{path:"/logout",component:h,exact:!0}),Object(j.jsx)(l.a,{path:"/dashboard",component:P,exact:!0}),Object(j.jsx)(l.a,{path:"/:userId/:projectName/:projectId",component:L,exact:!0}),Object(j.jsx)(l.a,{path:"/:userId/:projectName/:projectId/completed",component:q,exact:!0})]})]})})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.1ab1c031.chunk.js.map
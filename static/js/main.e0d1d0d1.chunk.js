(this.webpackJsonptasks=this.webpackJsonptasks||[]).push([[0],{23:function(e,n,t){},24:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r,o,c,a,d,i,s,l,b,j,u,h,f,x,p,O,m,g,k,v,y,w=t(1),C=t.n(w),D=t(9),T=t.n(D),z=(t(23),t(24),t(7)),S=t(8),E=t(6),M=t(2),A=t(5),I=t(14),L=t(15),F=t(4),P=new(function(){function e(){Object(I.a)(this,e),this.tasksData=[{id:0,name:"first",type:"new",description:"string",date:"2021-08-09",modal:!1}],this.sortAsc=!1,Object(F.d)(this)}return Object(L.a)(e,[{key:"addTask",value:function(e){this.tasksData.push(e)}},{key:"removeTask",value:function(e){this.tasksData=this.tasksData.filter((function(n){return n.id!==e}))}},{key:"sortTask",value:function(){var e=this;this.sortAsc=!this.sortAsc,this.tasksData=this.tasksData.sort((function(n,t){return n.name.toLowerCase()<t.name.toLowerCase()?e.sortAsc?-1:1:n.name.toLowerCase()>t.name.toLowerCase()?e.sortAsc?1:-1:0}))}},{key:"showModal",value:function(e){this.tasksData.map((function(n){return n.id===e&&(n.modal=!n.modal),n}))}},{key:"changeTaskData",value:function(e,n){this.tasksData.map((function(t){return t.id===e&&(t.name=n.name,t.type=n.type,t.description=n.description,t.date=n.date),t}))}}]),e}()),N=t(3),B=function(e){var n={};return e.name||(n.name="Please, enter name!"),e.type||(n.type="Please, enter type!"),e.date||(n.date="Please, enter date!"),P.tasksData.forEach((function(t){t.name===e.name&&(n.name="This task already exists")})),n},H=t(0),J=N.a.div(r||(r=Object(M.a)(["\n    text-align:center;\n    justify-content: center;\n    display: flex;\n    width:100%;\n    position: relative;\n"]))),W=N.a.div(o||(o=Object(M.a)(["\n    width:100%;\n    \n    background-color: #f3a0a8;\n    border: 1px solid #b02a37;\n    margin: 0;\n    border-radius: .25rem;  \n    font-size: .5rem;\n    position: absolute;\n"]))),q=function(e){var n=e.errorText;return Object(H.jsx)(J,{children:Object(H.jsx)(W,{children:n})})},G=N.a.div(c||(c=Object(M.a)(["\ndisplay:flex;\njustify-content: center;\nalign-items:center;\nflex-direction: column;\n"]))),K=N.a.input(a||(a=Object(M.a)(["\n    padding: .25rem .5rem;\n    font-size: .875rem;\n    border-radius: .2rem;\n    background-color: #fff;\n    border: 1px solid #ced4da;\n    width:90%;\n    height: 25px;\n    &::-webkit-calendar-picker-indicator {\n        opacity:0;\n        position: absolute;\n        width: 100%;\n      }\n"]))),Q=N.a.select(d||(d=Object(M.a)(["\n    padding: .25rem .5rem;\n    font-size: .875rem;\n    border-radius: .2rem;\n    background-color: #fff;\n    border: 1px solid #ced4da;\n    width:90%;\n    height: 35px;\n"]))),R=N.a.form(i||(i=Object(M.a)(["\n    width: 90%;\n    box-sizing:border-box;\n    justify-content:center;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    column-gap: 20px;\n    margin: 20px auto;\n    padding: 20px;\n    border: 1px solid #dee2e6;\n    border-radius: .25rem;\n\n"]))),U=N.a.button(s||(s=Object(M.a)(["\n    color: #fff;\n    background-color: #198754;\n    border-color: #198754;\n    border-radius: .25rem;\n    margin 5px;\n    width:100%;\n    height: 35px;\n    &:hover{\n        background-color: #157347;\n        border-color: #146c43;\n    }\n"]))),V=Object(A.a)((function(){var e=Object(w.useState)({id:Date.now(),name:"",type:"",description:"",date:"",modal:!1}),n=Object(E.a)(e,2),t=n[0],r=n[1],o=Object(w.useState)({}),c=Object(E.a)(o,2),a=c[0],d=c[1],i=function(e){r((function(n){return Object(S.a)(Object(S.a)({},n),{},Object(z.a)({},e.target.name,e.target.value))}))};return Object(H.jsxs)(R,{onSubmit:function(e){e.preventDefault();var n=B(t);d(n),Object.keys(n).length||(P.addTask(t),r({id:Date.now(),name:"",type:"",description:"",date:"",modal:!1}))},children:[Object(H.jsxs)(G,{children:[Object(H.jsx)(K,{type:"text",name:"name",placeholder:"Name",value:t.name,onChange:i}),a.name?Object(H.jsx)(q,{errorText:a.name}):null]}),Object(H.jsxs)(G,{children:[Object(H.jsxs)(Q,{name:"type",value:t.type,onChange:i,children:[Object(H.jsx)("option",{value:"",disabled:!0,children:"Choose an option"}),Object(H.jsx)("option",{children:"new"}),Object(H.jsx)("option",{children:"in-progress"}),Object(H.jsx)("option",{children:"done"})]}),a.type&&Object(H.jsx)(q,{errorText:a.type})]}),Object(H.jsx)(G,{children:Object(H.jsx)(K,{type:"text",name:"description",value:t.description,id:"description",placeholder:"Description",onChange:i})}),Object(H.jsxs)(G,{children:[Object(H.jsx)(K,{type:"date",name:"date",id:"date",value:t.date,onChange:i,onFocus:function(){console.log("focus")}}),a.date&&Object(H.jsx)(q,{errorText:a.date})]}),Object(H.jsx)(G,{children:Object(H.jsx)(U,{type:"submit",children:"Create"})})]})})),X=N.a.div(l||(l=Object(M.a)(["\nbackground-color: #7aa3fa;\nborder: 1px solid black;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nfont-size: .7rem;\nheigth: 100%;\n"]))),Y=N.a.p(b||(b=Object(M.a)(["\nmargin:1px;\ncolor:#fff;\n"]))),Z=N.a.button(j||(j=Object(M.a)(["\ncolor: #fff;\nbackground-color: #dc3545;\nborder-color: #dc3545;\nborder-radius: .25rem;\nfont-size: .7rem;\nmargin:1px;\n&:hover{\n    background-color: #bb2d3b;\n    border-color: #b02a37;\n    color:#fff;\n}\n"]))),$=N.a.button(u||(u=Object(M.a)(["\ncolor: #000;\nfont-size: .7rem;\nmargin:1px;\nbackground-color: #fff;\nborder-color: #fff;\nborder-radius: .25rem;\n&:hover{\n    background-color: #d8d2d2;\n    border-color: #d8d2d2;\n    color:#000;\n}\n"]))),_=function(e){return Object(H.jsxs)(X,{children:[Object(H.jsx)(Y,{children:"Want to delete?"}),Object(H.jsxs)("div",{children:[Object(H.jsx)(Z,{onClick:function(){e.toggleDel()},children:"Delete"}),Object(H.jsx)($,{onClick:function(){e.toggleClose()},children:"Cancel"})]})]})},ee=N.a.input(h||(h=Object(M.a)(["\n    font-size: .875rem;\n    border-radius: .2rem;\n    background-color: #fff;\n    border: 1px solid #ced4da;\n    width:90%;\n    height: 25px;\n"]))),ne=N.a.select(f||(f=Object(M.a)(["\n    font-size: .875rem;\n    border-radius: .2rem;\n    background-color: #fff;\n    border: 1px solid #ced4da;\n    width:90%;\n    height: 29px;\n"]))),te=N.a.tr(x||(x=Object(M.a)(["\n    \n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    border: 1px solid black;\n    height:40px;\n    width:100%;\n    background-color: #c7d8ff;\n    align-items:center;\n\n"]))),re=N.a.button(p||(p=Object(M.a)(["\n    color: #000;\n    background-color: #ffc107;\n    border-color: #ffc107;\n    border-radius: .25rem;\n    margin 5px;\n    height: 25px;\n    &:hover{\n        background-color: #ffca2c;\n        border-color: #ffc720;\n    }\n"]))),oe=N.a.button(O||(O=Object(M.a)(["\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545;\n    border-radius: .25rem;\n    margin 5px;\n    height: 25px;\n    &:hover{\n        background-color: #bb2d3b;\n        border-color: #b02a37;\n        color:#fff;\n    }\n"]))),ce=Object(A.a)((function(e){var n=e.task,t=e.index,r=e.setHookId,o=Object(w.useState)(n),c=Object(E.a)(o,2),a=c[0],d=c[1],i=Object(w.useState)({}),s=Object(E.a)(i,2),l=s[0],b=s[1];function j(e){var n=e.target.value;d((function(t){return Object(S.a)(Object(S.a)({},t),{},Object(z.a)({},e.target.name,n))}))}return Object(H.jsxs)(te,{children:[Object(H.jsx)("td",{children:t+1}),Object(H.jsxs)("td",{children:[Object(H.jsx)(ee,{type:"text",name:"name",placeholder:"Name",value:a.name,onChange:j}),l.name?Object(H.jsx)(q,{errorText:l.name}):null]}),Object(H.jsxs)("td",{children:[Object(H.jsxs)(ne,{name:"type",value:a.type,onChange:j,children:[Object(H.jsx)("option",{value:"",disabled:!0,children:"Choose an option"}),Object(H.jsx)("option",{children:"new"}),Object(H.jsx)("option",{children:"in-progress"}),Object(H.jsx)("option",{children:"done"})]}),l.type?Object(H.jsx)(q,{errorText:l.type}):null]}),Object(H.jsx)("td",{children:Object(H.jsx)(ee,{type:"text",name:"description",id:"EditDescription",placeholder:"Description",value:a.description,onChange:j})}),Object(H.jsxs)("td",{children:[Object(H.jsx)(ee,{type:"date",name:"date",id:"date",value:a.date,onChange:j}),l.date?Object(H.jsx)(q,{errorText:l.date}):null]}),Object(H.jsx)("td",{children:Object(H.jsx)(re,{type:"submit",onClick:function(e){e.preventDefault();var t=B(a);b(t),Object.keys(t).length||(P.changeTaskData(n.id,a),r())},children:"Save"})}),Object(H.jsx)("td",{children:n.modal?Object(H.jsx)(_,{toggleDel:function(){return P.removeTask(n.id)},toggleClose:function(){P.showModal(n.id)}}):Object(H.jsx)(oe,{onClick:function(){P.showModal(n.id)},children:"Delete"})})]})})),ae=N.a.tr(m||(m=Object(M.a)(["\n    display: grid;\n    width:100%;\n    height:40px;\n    grid-template-columns: repeat(7, 1fr);\n    border: 1px solid black;\n    align-items:center;\n    background-color: #c7d8ff;\n\n"]))),de=N.a.button(g||(g=Object(M.a)(["\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545;\n    border-radius: .25rem;\n    margin 5px;\n    height: 25px;\n    &:hover{\n        background-color: #bb2d3b;\n        border-color: #b02a37;\n        color:#fff;\n    }\n"]))),ie=N.a.button(k||(k=Object(M.a)(["\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d;\n    border-radius: .25rem;\n    margin 5px;\n    height: 25px;\n    &:hover{\n        color: #fff;\n        background-color: #5c636a;\n        border-color: #565e64;\n    }\n"]))),se=Object(A.a)((function(e){var n=e.index,t=e.task,r=e.handleEditId;return Object(H.jsxs)(ae,{children:[Object(H.jsx)("td",{children:n+1}),Object(H.jsx)("td",{children:t.name}),Object(H.jsx)("td",{children:t.type}),Object(H.jsx)("td",{children:t.description}),Object(H.jsx)("td",{children:t.date}),Object(H.jsx)("td",{children:Object(H.jsx)(ie,{onClick:r,children:"Edit"})}),Object(H.jsx)("td",{children:t.modal?Object(H.jsx)(_,{toggleDel:function(){return P.removeTask(t.id)},toggleClose:function(){P.showModal(t.id)}}):Object(H.jsx)(de,{onClick:function(){P.showModal(t.id)},children:"Delete"})})]})})),le=N.a.tr(v||(v=Object(M.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    border: 1px solid black;\n    box-sizing: bprder-box;\n    background-color: #7ba3fb;\n\n"]))),be=N.a.table(y||(y=Object(M.a)(["\nwidth:90%;\nmargin:auto;\n"]))),je=Object(A.a)((function(){var e=Object(w.useState)(-1),n=Object(E.a)(e,2),t=n[0],r=n[1];return Object(H.jsxs)(be,{children:[Object(H.jsx)("thead",{children:Object(H.jsxs)(le,{children:[Object(H.jsx)("td",{children:"id "}),Object(H.jsx)("td",{onClick:function(){P.sortTask()},children:"Name"}),Object(H.jsx)("td",{children:"Type"}),Object(H.jsx)("td",{children:"Description"}),Object(H.jsx)("td",{children:"Date"}),Object(H.jsx)("td",{children:"Edit"}),Object(H.jsx)("td",{children:"Delete"})]})}),P.tasksData.map((function(e,n){return Object(H.jsx)("tbody",{children:t===e.id?Object(H.jsx)(ce,{index:n,task:e,setHookId:function(){return r(-1)}}):Object(H.jsx)(se,{index:n,task:e,handleEditId:function(){return function(e){r(e.id)}(e)}})},n)}))]})}));var ue=function(){return Object(H.jsxs)("div",{className:"App",children:[Object(H.jsx)("h1",{children:"Tasks Manager"}),Object(H.jsx)(V,{}),Object(H.jsx)(je,{})]})},he=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),c(e),a(e)}))};T.a.render(Object(H.jsx)(C.a.StrictMode,{children:Object(H.jsx)(ue,{})}),document.getElementById("root")),he()}},[[29,1,2]]]);
//# sourceMappingURL=main.e0d1d0d1.chunk.js.map
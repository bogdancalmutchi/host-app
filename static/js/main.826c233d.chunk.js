(this["webpackJsonppractice-project"]=this["webpackJsonppractice-project"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(6),s=n.n(c),r=(n(12),n(7)),a=n(2),i=n(1),o=(n(13),n(0)),l=function(e){return Object(o.jsx)("div",{className:"card",children:e.children})},j=(n(15),function(e){var t=Object(i.useState)(""),n=Object(a.a)(t,2),c=n[0],s=n[1],r=Object(i.useState)(""),j=Object(a.a)(r,2),u=j[0],d=j[1],b=u.length>0&&u<1,O=0===u.length||0===c.length,m="Please enter a valid age (>0)",h="Please enter a valid name and age (non-empty values)";return Object(o.jsx)(l,{children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={username:c,age:u};O||b||e.onAddNewUser(n),O&&e.onError(h),b&&e.onError(m),s(""),d("")},children:[Object(o.jsxs)("div",{className:"formElements",children:[Object(o.jsxs)("div",{className:"formElement",children:[Object(o.jsx)("label",{children:"Username"}),Object(o.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)},value:c})]}),Object(o.jsxs)("div",{className:"formElement",children:[Object(o.jsx)("label",{children:"Age (Years)"}),Object(o.jsx)("input",{type:"number",onChange:function(e){d(e.target.value)},value:u})]})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"formButton",type:"submit",children:"Add User"})})]})})}),u=(n(16),function(e){return Object(o.jsxs)("div",{className:"userEntry",children:[e.user.username," (",e.user.age," years old)"]})}),d=(n(17),function(e){return Object(o.jsx)(l,{children:Object(o.jsx)("div",{className:"usersContainer",children:e.users.map((function(e){return Object(o.jsx)(u,{user:e},Math.random())}))})})}),b=(n(18),function(e){var t=function(){console.log("CLOSED"),e.isModalVisible(!1)};return Object(o.jsxs)("div",{className:"modalContainer",children:[Object(o.jsx)("div",{onClick:t,className:"overlay"}),Object(o.jsxs)("div",{className:"body",children:[Object(o.jsx)("div",{className:"title",children:"Invalid input"}),Object(o.jsx)("div",{className:"errorMessage",children:e.children}),Object(o.jsx)("div",{className:"buttonContainer",children:Object(o.jsx)("button",{className:"modalButton",type:"button",onClick:t,children:"Okay"})})]})]})}),O=function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(""),l=Object(a.a)(s,2),u=l[0],O=l[1],m=Object(i.useState)(!0),h=Object(a.a)(m,2),v=h[0],x=h[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{onAddNewUser:function(e){c((function(t){return[e].concat(Object(r.a)(t))}))},onError:function(e){console.log("inside onErrorHandler"),console.log("message:",e),O(e),x(!0)}}),n&&Object(o.jsx)(d,{users:n}),u&&v&&Object(o.jsx)(b,{isModalVisible:function(e){x(e)},children:u})]})};s.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.826c233d.chunk.js.map
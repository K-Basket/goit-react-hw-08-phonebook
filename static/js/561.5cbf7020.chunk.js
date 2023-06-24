"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[561],{806:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var a=t(9439),r=t(1686),s=t.n(r),i="ContactForm_form__dhl+T",o="ContactForm_label__-cVXI",c="ContactForm_input__Bl93P",u="ContactForm_btn__wll+u",l=t(9434),d=function(e){return e.contacts.items},m=function(e){return e.contacts.isLoading},h=function(e){return e.contacts.error},f=function(e){return e.contacts.filter},p=t(2791),x=t(3634),v=t(184);function b(){var e=(0,p.useState)(""),n=(0,a.Z)(e,2),t=n[0],r=n[1],m=(0,p.useState)(""),h=(0,a.Z)(m,2),f=h[0],b=h[1],j=(0,l.v9)(d),g=(0,l.I0)();function _(e){"name"===e.target.name&&r(e.target.value),"number"===e.target.name&&b(e.target.value)}return(0,v.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault();var n=t.toLowerCase();if(j.some((function(e){return e.name.toLowerCase()===n}))||j.some((function(e){return e.phone===f})))s().Notify.failure("".concat(t," is already in contacts"));else{var a={name:t,number:f};g((0,x.je)(a)),r(""),b("")}},children:[(0,v.jsxs)("label",{className:o,children:["Name",(0,v.jsx)("input",{className:c,type:"text",name:"name",value:t,onChange:_,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,v.jsxs)("label",{className:o,children:["Number",(0,v.jsx)("input",{className:c,type:"tel",name:"number",value:f,onChange:_,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsx)("button",{className:u,type:"submit",children:"Add contact"})]})}var j=t(1413),g={item:"ContactList_item__EZYHO"},_=t(3821);function C(){var e=(0,l.v9)(f),n=(0,l.v9)(d),t=(0,l.v9)(m),r=(0,l.v9)(h),s=(0,p.useState)(!1),i=(0,a.Z)(s,2),o=i[0],c=i[1],u=(0,p.useState)({}),b=(0,a.Z)(u,2),C=b[0],y=b[1],N=(0,l.I0)();(0,p.useEffect)((function(){N((0,x.VC)())}),[N]);var w=function(e){c(!0);var t=e.target.dataset.id,a=n.find((function(e){return e.id===t}));y(a)},k=function(e){"name"===e.target.name&&y((function(n){return(0,j.Z)((0,j.Z)({},n),{name:e.target.value})})),"number"===e.target.name&&y((function(n){return(0,j.Z)((0,j.Z)({},n),{number:e.target.value})}))};return(0,v.jsxs)(v.Fragment,{children:[t&&!r&&(0,v.jsx)(_.a,{}),o&&(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N((0,x.uH)(C)),c(!1)},children:[(0,v.jsxs)("label",{children:["Name update",(0,v.jsx)("input",{type:"text",name:"name",placeholder:C.name,onChange:k})]}),(0,v.jsxs)("label",{children:["Number update",(0,v.jsx)("input",{type:"tel",name:"number",placeholder:C.number,onChange:k})]}),(0,v.jsx)("button",{type:"submit",children:"Correct contact"})]}),(0,v.jsx)("ul",{children:function(){var t=e.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}().map((function(e){var n=e.id,t=e.name,a=e.number;return(0,v.jsx)("li",{className:g.link,children:(0,v.jsxs)("div",{className:g.item,children:[(0,v.jsxs)("p",{children:[(0,v.jsx)("span",{children:t}),(0,v.jsxs)("span",{children:[": ",a]})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("button",{onClick:function(){return N((0,x.xX)(n))},children:"Delete"}),(0,v.jsx)("button",{onClick:w,"data-id":n,children:"Update"})]})]})},n)}))})]})}var y="Filter_label__vEd1E",N="Filter_input__N7T3z",w=t(7840);function k(){var e=(0,l.v9)(f),n=(0,l.I0)();return(0,v.jsxs)("label",{className:y,children:["Find contacts by name",(0,v.jsx)("input",{className:N,type:"text",name:"filter",value:e,onChange:function(e){n((0,w.Tv)(e.currentTarget.value))}})]})}var Z=t(4217),F=function(){var e=(0,l.v9)(Z.np);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{children:"Phonebook"}),(0,v.jsx)("p",{children:"React Hooks & Redux toolkit (async) & User registration and login"}),(0,v.jsx)(b,{}),(0,v.jsx)("h2",{children:"".concat(e.name,", these are your contacts")}),(0,v.jsx)(k,{}),(0,v.jsx)(C,{})]})}},3821:function(e,n,t){t.d(n,{a:function(){return l}});t(2791);var a,r=t(4164),s=t(168),i=t(6444).ZP.div(a||(a=(0,s.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.1);\n  z-index: 1200;\n"]))),o=t(5243),c=t(184),u=document.querySelector("#loader-root");function l(){return(0,r.createPortal)((0,c.jsx)(i,{children:(0,c.jsx)(o.g4,{height:"50",width:"50",radius:"9",color:"gray",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}),u)}}}]);
//# sourceMappingURL=561.5cbf7020.chunk.js.map
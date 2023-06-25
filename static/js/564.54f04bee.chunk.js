"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[564],{564:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var a=t(9439),r=t(1686),i=t.n(r),s="ContactForm_form__dhl+T",o="ContactForm_label__-cVXI",c="ContactForm_input__Bl93P",l="ContactForm_btn__wll+u",u=t(9434),d=function(e){return e.contacts.items},m=function(e){return e.contacts.isLoading},h=function(e){return e.contacts.error},f=function(e){return e.contacts.filter},p=function(e){return e.contacts.contactUpdate},x=function(e){return e.contacts.isUpdate},v=t(2791),b=t(3634),j=t(184);function g(){var e=(0,v.useState)(""),n=(0,a.Z)(e,2),t=n[0],r=n[1],m=(0,v.useState)(""),h=(0,a.Z)(m,2),f=h[0],p=h[1],x=(0,u.v9)(d),g=(0,u.I0)();function _(e){"name"===e.target.name&&r(e.target.value),"number"===e.target.name&&p(e.target.value)}return(0,j.jsxs)("form",{className:s,onSubmit:function(e){e.preventDefault();var n=t.toLowerCase();if(x.some((function(e){return e.name.toLowerCase()===n}))||x.some((function(e){return e.phone===f})))i().Notify.failure("".concat(t," is already in contacts"));else{var a={name:t,number:f};g((0,b.je)(a)),r(""),p("")}},children:[(0,j.jsxs)("label",{className:o,children:["Name",(0,j.jsx)("input",{className:c,type:"text",name:"name",value:t,onChange:_,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,j.jsxs)("label",{className:o,children:["Number",(0,j.jsx)("input",{className:c,type:"tel",name:"number",value:f,onChange:_,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,j.jsx)("button",{className:l,type:"submit",children:"Add contact"})]})}var _={item:"ContactList_item__EZYHO"},y=t(7840);function C(){var e=(0,u.v9)(d),n=(0,u.v9)(f),t=(0,u.I0)();(0,v.useEffect)((function(){t((0,b.VC)())}),[t]);var a=function(n){var a=n.target.dataset.id,r=e.find((function(e){return e.id===a}));t((0,y.o2)(!0)),t((0,y.qf)(r))};return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("ul",{children:function(){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}().map((function(e){var n=e.id,r=e.name,i=e.number;return(0,j.jsx)("li",{className:_.link,children:(0,j.jsxs)("div",{className:_.item,children:[(0,j.jsxs)("p",{children:[(0,j.jsx)("span",{children:r}),(0,j.jsxs)("span",{children:[": ",i]})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("button",{onClick:function(){return t((0,b.xX)(n))},children:"Delete"}),(0,j.jsx)("button",{onClick:a,"data-id":n,children:"Update"})]})]})},n)}))})})}var Z="Filter_label__vEd1E",N="Filter_input__N7T3z";function w(){var e=(0,u.v9)(f),n=(0,u.I0)();return(0,j.jsxs)("label",{className:Z,children:["Find contacts by name",(0,j.jsx)("input",{className:N,type:"text",name:"filter",value:e,onChange:function(e){n((0,y.Tv)(e.currentTarget.value))}})]})}var k,F,P,L,q,S=t(3821),I=t(1413),E=t(168),T=t(6444),U=(T.ZP.div(k||(k=(0,E.Z)(["\n  display: flex;\n"]))),T.ZP.form(F||(F=(0,E.Z)(["\n  display: flex;\n  gap: 15px;\n"])))),z=T.ZP.label(P||(P=(0,E.Z)(["\n  margin-top: 10px;\n"]))),A=T.ZP.input(L||(L=(0,E.Z)(["\n  margin-top: 5px;\n  display: block;\n"]))),D=function(){var e=(0,u.I0)(),n=(0,u.v9)(p),t=function(t){var a=t.target.name,r=t.target.value;"name"===a&&e((0,y.qf)((0,I.Z)((0,I.Z)({},n),{name:r}))),"number"===a&&e((0,y.qf)((0,I.Z)((0,I.Z)({},n),{number:r})))},a=n.name,r=n.number;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(U,{onSubmit:function(t){t.preventDefault(),e((0,b.uH)(n)),e((0,y.o2)(!1))},children:[(0,j.jsxs)(z,{children:["Name update",(0,j.jsx)(A,{type:"text",name:"name",placeholder:a,onChange:t})]}),(0,j.jsxs)(z,{children:["Number update",(0,j.jsx)(A,{type:"tel",name:"number",placeholder:r,onChange:t})]}),(0,j.jsx)("button",{type:"submit",children:"Correct contact"})]})})},H=t(4217),B=T.ZP.div(q||(q=(0,E.Z)(["\n  display: flex;\n"]))),R=function(){var e=(0,u.v9)(H.np),n=(0,u.v9)(m),t=(0,u.v9)(h),a=(0,u.v9)(x);return(0,j.jsxs)(j.Fragment,{children:[n&&!t&&(0,j.jsx)(S.a,{}),(0,j.jsx)("h1",{children:"Phonebook"}),(0,j.jsx)("p",{children:"React Hooks & Redux toolkit (async) & User registration and login"}),(0,j.jsx)(g,{}),(0,j.jsx)("h2",{children:"".concat(e.name,", these are your contacts")}),(0,j.jsxs)(B,{children:[(0,j.jsx)(w,{}),a&&(0,j.jsx)(D,{})]}),(0,j.jsx)(C,{})]})}},3821:function(e,n,t){t.d(n,{a:function(){return u}});t(2791);var a,r=t(4164),i=t(168),s=t(6444).ZP.div(a||(a=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.1);\n  z-index: 1200;\n"]))),o=t(5243),c=t(184),l=document.querySelector("#loader-root");function u(){return(0,r.createPortal)((0,c.jsx)(s,{children:(0,c.jsx)(o.g4,{height:"50",width:"50",radius:"9",color:"gray",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}),l)}}}]);
//# sourceMappingURL=564.54f04bee.chunk.js.map
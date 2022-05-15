"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[589,767],{9589:function(n,e,r){r.r(e),r.d(e,{default:function(){return d}});var t=r(8152),o=r(2791),a=r(5273),i=r(5048),p=r(7596),s=r(3173),u=r(767),l=r(3329);function d(){var n=(0,o.useState)(""),e=(0,t.Z)(n,2),r=e[0],d=e[1],x=(0,o.useState)(""),m=(0,t.Z)(x,2),c=m[0],h=m[1],f=(0,o.useState)(""),b=(0,t.Z)(f,2),g=b[0],w=b[1],F=(0,i.I0)(),Z=(0,a.x0)(),v=(0,a.x0)(),k=(0,a.x0)(),j=function(n){var e=n.target,r=e.name,t=e.value;switch(r){case"name":return d(t);case"email":return h(t);case"password":return w(t);default:return}};return(0,l.jsxs)(u.FormWrapper,{children:[(0,l.jsx)(u.FormTitle,{children:"New User registration"}),(0,l.jsxs)(u.RegisterForm,{onSubmit:function(n){n.preventDefault(),g.length>=6?(0,s.vl)("Password must contain at least 6 characters"):(F(p.r5.register({name:r,email:c,password:g})),d(""),h(""),w(""))},autoComplete:"off",children:[(0,l.jsxs)(u.FormInputLabel,{htmlFor:Z,children:["Name",(0,l.jsx)(u.FormInput,{type:"text",name:"name",placeholder:"Enter your name",value:r,onChange:j,id:Z,required:!0})]}),(0,l.jsxs)(u.FormInputLabel,{htmlFor:v,children:["E-mail",(0,l.jsx)(u.FormInput,{type:"email",name:"email",placeholder:"Enter your e-mail",value:c,onChange:j,id:v,required:!0})]}),(0,l.jsxs)(u.FormInputLabel,{htmlFor:k,children:["Password",(0,l.jsx)(u.FormInput,{type:"password",name:"password",placeholder:"Set password",value:g,onChange:j,id:k,required:!0})]}),(0,l.jsx)(u.FormSubmitBtn,{type:"submit",children:"Register"})]})]})}},767:function(n,e,r){r.r(e),r.d(e,{FormInput:function(){return h},FormInputLabel:function(){return c},FormSubmitBtn:function(){return f},FormTitle:function(){return x},FormWrapper:function(){return d},RegisterForm:function(){return m}});var t,o,a,i,p,s,u=r(168),l=r(2499),d=l.Z.div(t||(t=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 80px;\n"]))),x=l.Z.h1(o||(o=(0,u.Z)(["\n  margin-bottom: 20px;\n  font-size: 30px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #3498db;\n"]))),m=l.Z.form(a||(a=(0,u.Z)(["\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid darkgray;\n  border-radius: 5px;\n  background-color: white;\n  box-shadow: 0px 2px 10px -3px;\n"]))),c=l.Z.label(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 20px 0px 20px;\n  font-size: 24px;\n"]))),h=l.Z.input(p||(p=(0,u.Z)(["\n  width: 300px;\n  margin-top: 4px;\n  padding: 4px;\n  font-size: 16px;\n  border: 2px solid #3498db;\n  border-radius: 5px;\n  background-color: ghostwhite;\n"]))),f=l.Z.button(s||(s=(0,u.Z)(["\n  width: 160px;\n  height: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  font-size: 18px;\n  text-transform: uppercase;\n  border: 0px;\n  border-radius: 20px;\n  background-color: #3498db;\n  color: white;\n  box-shadow: none;\n  transition: all 250ms ease-in-out;\n\n  :hover,\n  :focus {\n    background-color: #39b0ff;\n    box-shadow: 0px 4px 4px #00000026, inset 0px 0px 0px 0px #0000004d;\n  }\n"])))}}]);
//# sourceMappingURL=589.36281b42.chunk.js.map
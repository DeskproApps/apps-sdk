import{j as l}from"./jsx-runtime-d3c0a380.js";import{i as p,c as i}from"./SPA-d2c3e53d.js";import{T as r}from"./TwoButtonGroup-a57853f8.js";import"./index-070054a4.js";import"./index-f347cf61.js";import"./index-737698a4.js";const f={title:"Core/TwoButtonGroup",component:r,argTypes:{selected:{control:{type:"radio"},options:["one","two"]},oneLabel:{control:"text"},twoLabel:{control:"text"},oneOnClick:{action:"clicked",table:{disable:!0}},twoOnClick:{action:"clicked",table:{disable:!0}},oneIcon:{control:"boolean"},twoIcon:{control:"boolean"}}},o=({oneIcon:a,twoIcon:c,...s})=>l.jsx(r,{...s,...a?{oneIcon:p}:{},...c?{twoIcon:i}:{}});o.args={selected:"one",oneLabel:"Find",twoLabel:"Create",oneIcon:!0,twoIcon:!0};var t,e,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`({
  oneIcon,
  twoIcon,
  ...props
}) => <TwoButtonGroup {...props} {...oneIcon ? {
  oneIcon: faSearch
} : {}} {...twoIcon ? {
  twoIcon: faPlus
} : {}} />`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const x=["Default"];export{o as Default,x as __namedExportsOrder,f as default};

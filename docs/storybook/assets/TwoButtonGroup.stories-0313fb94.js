import{j as l}from"./jsx-runtime-29545a09.js";import{i as p,c as i}from"./SPA-7e65fab1.js";import{T as r}from"./TwoButtonGroup-e32b9614.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./index-9d475cdf.js";const T={title:"Core/TwoButtonGroup",component:r,argTypes:{selected:{control:{type:"radio"},options:["one","two"]},oneLabel:{control:"text"},twoLabel:{control:"text"},oneOnClick:{action:"clicked",table:{disable:!0}},twoOnClick:{action:"clicked",table:{disable:!0}},oneIcon:{control:"boolean"},twoIcon:{control:"boolean"}}},o=({oneIcon:a,twoIcon:c,...s})=>l(r,{...s,...a?{oneIcon:p}:{},...c?{twoIcon:i}:{}});o.args={selected:"one",oneLabel:"Find",twoLabel:"Create",oneIcon:!0,twoIcon:!0};var t,e,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`({
  oneIcon,
  twoIcon,
  ...props
}) => <TwoButtonGroup {...props} {...oneIcon ? {
  oneIcon: faSearch
} : {}} {...twoIcon ? {
  twoIcon: faPlus
} : {}} />`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const x=["Default"];export{o as Default,x as __namedExportsOrder,T as default};

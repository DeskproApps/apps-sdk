import{a as m,j as t}from"./jsx-runtime-29545a09.js";import{s as n,G as r,S as c}from"./SPA-3e501c95.js";import"./index-76fb7be0.js";import"./index-d3ea75b5.js";import{P as i}from"./Property-c5ca5b0d.js";const u=n(c)`
  width: 100%;
  display: flex;
  align-items: stretch;
  margin-bottom: ${({marginBottom:e})=>`${e}px`};
`,l=n.div`
  display: inline-block;

  ${({withDivider:e})=>e?r`
      width: calc(50% - 6px - 1px);
      padding-left: 10px;
      border-left: 1px solid ${({theme:a})=>a.colors.grey20};
    `:r`
      width: calc(50% - 6px - 10px);
      padding-right: 10px;
    `}
`,o=({leftLabel:e,leftText:a,rightLabel:d,rightText:p,marginBottom:s=7})=>m(u,{marginBottom:s,children:[t(l,{children:t(i,{marginBottom:0,label:e,text:a})}),t(l,{withDivider:!0,children:t(i,{marginBottom:0,label:d,text:p})})]});try{o.displayName="TwoProperties",o.__docgenInfo={description:"",displayName:"TwoProperties",props:{marginBottom:{defaultValue:{value:"7"},description:"",name:"marginBottom",required:!1,type:{name:"number"}},leftLabel:{defaultValue:null,description:"",name:"leftLabel",required:!1,type:{name:"ReactNode | Element"}},leftText:{defaultValue:null,description:"",name:"leftText",required:!1,type:{name:"ReactNode | Element"}},rightLabel:{defaultValue:null,description:"",name:"rightLabel",required:!1,type:{name:"ReactNode | Element"}},rightText:{defaultValue:null,description:"",name:"rightText",required:!1,type:{name:"ReactNode | Element"}}}}}catch{}export{o as T};
//# sourceMappingURL=TwoProperties-e84e727e.js.map

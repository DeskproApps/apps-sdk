import{j as e,a as d}from"./jsx-runtime-29545a09.js";import{s as o,S as s,C as i,R as c,D as t,E as p}from"./SPA-4e5a8262.js";import"./index-76fb7be0.js";import"./index-d3ea75b5.js";const m=o(s)`
  align-items: center;
  padding: 2px;
`,h=o.a`
  display: inline-block;
  border-radius: 10px;
  border: 1px solid transparent;
  color: ${({theme:r})=>r.colors.brandShade60};
`,g=o(i)`
  display: inline-block !important;
  padding: 0 6px 0 0;
  cursor: pointer;

  > svg {
    width: 12px;
    height: 12px;
    margin-top: -2px;
  }
`,u=o(c)`
  border-color: ${({theme:r})=>r.colors.brandShade20};
  &:hover {
    border-color: ${({theme:r})=>r.colors.brandShade60};
  }
`,l=({href:r,icon:a})=>{const n=p;return e(h,{target:"_blank",href:r,children:e(u,{size:"small",withClose:!1,backgroundColor:n.colors.brandShade20,textColor:n.colors.grey100,closeIcon:t,label:d(m,{gap:5,children:[a&&e(g,{icon:a}),e(s,{children:e(i,{icon:t})})]})})})};try{l.displayName="ExternalIconLink",l.__docgenInfo={description:"",displayName:"ExternalIconLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"AnyIcon"}}}}}catch{}export{l as E};
//# sourceMappingURL=ExternalIconLink-a36ee991.js.map

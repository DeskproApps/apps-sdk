import{j as e}from"./jsx-runtime-d3c0a380.js";import{s as o,S as l,d as i,R as d,e as s,l as c}from"./SPA-d2c3e53d.js";import"./index-070054a4.js";import"./index-f347cf61.js";const p=o(l)`
  align-items: center;
  padding: 2px;
`,m=o.a`
  display: inline-block;
  border-radius: 10px;
  border: 1px solid transparent;
  color: ${({theme:r})=>r.colors.brandShade60};
`,x=o(i)`
  display: inline-block !important;
  padding: 0 6px 0 0;
  cursor: pointer;

  > svg {
    width: 12px;
    height: 12px;
    margin-top: -2px;
  }
`,h=o(d)`
  border-color: ${({theme:r})=>r.colors.brandShade20};
  &:hover {
    border-color: ${({theme:r})=>r.colors.brandShade60};
  }
`,t=({href:r,icon:n})=>{const a=c;return e.jsx(m,{target:"_blank",href:r,children:e.jsx(h,{size:"small",withClose:!1,backgroundColor:a.colors.brandShade20,textColor:a.colors.grey100,closeIcon:s,label:e.jsxs(p,{gap:5,children:[n&&e.jsx(x,{icon:n}),e.jsx(l,{children:e.jsx(i,{icon:s})})]})})})};try{t.displayName="ExternalIconLink",t.__docgenInfo={description:"",displayName:"ExternalIconLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"AnyIcon"}}}}}catch{}export{t as E};

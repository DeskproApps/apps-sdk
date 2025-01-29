import{j as e}from"./jsx-runtime-2aae9559.js";import{d as o,g as t,S as i,e as l,l as d,R as c}from"./SPA-1143c1d3.js";import"./index-ff614419.js";import"./index-fc111d74.js";const p=o(i)`
  align-items: center;
  padding: 2px;
`,m=o.a`
  display: inline-block;
  border-radius: 10px;
  border: 1px solid transparent;
  color: ${({theme:r})=>r.colors.brandShade60};
`,x=o(l)`
  display: inline-block !important;
  padding: 0 6px 0 0;
  cursor: pointer;

  > svg {
    width: 12px;
    height: 12px;
    margin-top: -2px;
  }
`,h=o(c)`
  border-color: ${({theme:r})=>r.colors.brandShade20};
  &:hover {
    border-color: ${({theme:r})=>r.colors.brandShade60};
  }
`,s=({href:r,icon:n})=>{const a=d;return e.jsx(m,{target:"_blank",href:r,children:e.jsx(h,{size:"small",withClose:!1,backgroundColor:a.colors.brandShade20,textColor:a.colors.grey100,closeIcon:t,label:e.jsxs(p,{gap:5,children:[n&&e.jsx(x,{icon:n}),e.jsx(i,{children:e.jsx(l,{icon:t})})]})})})};try{s.displayName="ExternalIconLink",s.__docgenInfo={description:"",displayName:"ExternalIconLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"AnyIcon"}}}}}catch{}export{s as E};

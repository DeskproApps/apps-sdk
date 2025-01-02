import{j as t}from"./jsx-runtime-d3c0a380.js";import{s as i}from"./SPA-f1ed4a3e.js";const n=i.div`
  display: grid;
  grid-template-columns: repeat(${({count:e})=>e}, ${({count:e})=>100/e}%);
  width: 100%;
  margin-bottom: ${({marginBottom:e})=>`${e}px`};
`,p=i.div`
  padding: 0 6px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  &:not(:first-child) {
    border-left: 1px solid ${({theme:e})=>e.colors.grey20};
  }
`,c=i.div`
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
`,a=({style:e,children:o,marginBottom:d=10})=>{const r=Array.isArray(o)?o.filter(Boolean):o;return Array.isArray(r)?t.jsx(n,{count:r.length,marginBottom:d,style:e,children:r.map((s,l)=>t.jsx(p,{children:t.jsx(c,{children:s})},l))}):t.jsx("div",{style:e,children:r})};try{a.displayName="PropertyRow",a.__docgenInfo={description:"",displayName:"PropertyRow",props:{marginBottom:{defaultValue:{value:"10"},description:"",name:"marginBottom",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{a as P};

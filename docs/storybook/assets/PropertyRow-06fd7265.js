import{j as t}from"./jsx-runtime-2aae9559.js";import{d as i}from"./SPA-b6af1813.js";const l=i.div`
  display: grid;
  grid-template-columns: repeat(${({count:r})=>r}, ${({count:r})=>100/r}%);
  width: 100%;
  margin-bottom: ${({marginBottom:r})=>`${r}px`};
`,p=i.div`
  padding: 0 6px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  &:not(:first-child) {
    border-left: 1px solid ${({theme:r})=>r.colors.grey20};
  }
`,c=i.div`
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
`,a=({style:r,children:o,marginBottom:d=10})=>{const e=Array.isArray(o)?o.filter(Boolean):o;return Array.isArray(e)?t.jsx(l,{count:e.length,marginBottom:d,style:r,children:e.map((s,n)=>t.jsx(p,{children:t.jsx(c,{children:s})},n))}):t.jsx("div",{style:r,children:e})};try{a.displayName="PropertyRow",a.__docgenInfo={description:"",displayName:"PropertyRow",props:{marginBottom:{defaultValue:{value:"10"},description:"",name:"marginBottom",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{a as P};

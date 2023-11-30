import{j as t}from"./jsx-runtime-29545a09.js";import{s as i}from"./SPA-0f542073.js";const s=i.div`
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
`,a=({style:e,children:o,marginBottom:d=10})=>{const r=Array.isArray(o)?o.filter(Boolean):o;return Array.isArray(r)?t(s,{count:r.length,marginBottom:d,style:e,children:r.map((l,n)=>t(p,{children:t(c,{children:l})},n))}):t("div",{style:e,children:r})};try{a.displayName="PropertyRow",a.__docgenInfo={description:"",displayName:"PropertyRow",props:{marginBottom:{defaultValue:{value:"10"},description:"",name:"marginBottom",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{a as P};
//# sourceMappingURL=PropertyRow-ea144318.js.map

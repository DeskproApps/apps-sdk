import{j as e,F as s}from"./jsx-runtime-29545a09.js";import{s as o}from"./SPA-4e5a8262.js";const d=o.div`
  display: grid;
  grid-template-columns: repeat(${({count:r})=>r}, ${({count:r})=>100/r}%);
  width: 100%;
`,n=o.div`
  padding: 0 6px;

  &:not(:first-child) {
    border-left: 1px solid ${({theme:r})=>r.colors.grey20};
  }
`,l=o.div`
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
`,t=({children:r,marginBottom:a=10})=>Array.isArray(r)?e(d,{count:r.length,marginBottom:a,children:r.map((i,p)=>e(n,{children:e(l,{children:i})},p))}):e(s,{children:r});try{t.displayName="PropertyRow",t.__docgenInfo={description:"",displayName:"PropertyRow",props:{marginBottom:{defaultValue:{value:"10"},description:"",name:"marginBottom",required:!1,type:{name:"number"}}}}}catch{}export{t as P};
//# sourceMappingURL=PropertyRow-f1137ebf.js.map

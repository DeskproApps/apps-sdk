import{j as t}from"./jsx-runtime-2aae9559.js";import{r as d}from"./index-ff614419.js";import{d as r,Q as m,a as u,b as y,n as s,T as f}from"./SPA-b6af1813.js";import"./index-072c1eb7.js";import{C as x}from"./index-7aaefbcc.js";const h=r.div`
  width: 1px;
  height: 1rem;
`,g=m`
  from {
    opacity: 0;
    transform: translate(100%, -15%);
  }
  to {
    opacity: 1;
    transform: translate(0, -15%);
  }
`,l=r.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-15%);
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 1) 100%);
`,_=r.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  &:hover ${l} {
    opacity: 1;
    animation: ${g} 0.15s ease-in-out;
  }
`,j=({copyText:e})=>t.jsx(h,{children:t.jsx(l,{children:t.jsx(x,{text:e,children:t.jsx(u,{icon:y,size:"small",intent:"minimal"})})})}),n=({children:e,copyText:a})=>t.jsxs(_,{children:[e,t.jsx(j,{copyText:a})]});try{n.displayName="WithCopyButton",n.__docgenInfo={description:"",displayName:"WithCopyButton",props:{copyText:{defaultValue:null,description:"",name:"copyText",required:!0,type:{name:"string"}}}}}catch{}const b=r(f)`
  color: ${({theme:e})=>e.colors.grey80};
`,C=r.div`
  margin-bottom: ${({marginBottom:e})=>`${e}px`};
`,p=({text:e,label:a,copyText:i,marginBottom:c=10})=>{let o;return typeof e=="string"&&e||typeof e=="number"?o=t.jsx(s,{children:e}):d.isValidElement(e)&&(o=e),i&&o&&(o=t.jsx(n,{copyText:i,children:o})),t.jsxs(C,{marginBottom:c,children:[a&&t.jsx(b,{type:"p8",children:a}),o||t.jsx(s,{children:"-"})]})};try{p.displayName="Property",p.__docgenInfo={description:"",displayName:"Property",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"ReactNode"}},copyText:{defaultValue:null,description:"",name:"copyText",required:!1,type:{name:"string"}},marginBottom:{defaultValue:{value:"10"},description:"",name:"marginBottom",required:!1,type:{name:"number"}}}}}catch{}export{p as P};

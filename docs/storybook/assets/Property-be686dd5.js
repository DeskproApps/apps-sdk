import{a as l,j as t}from"./jsx-runtime-29545a09.js";import{r as m}from"./index-76fb7be0.js";import{s as r,W as y,a as u,b as f,T as h,m as s}from"./SPA-7e65fab1.js";import"./index-d3ea75b5.js";import{C as g}from"./index-84638c93.js";const _=r.div`
  width: 1px;
  height: 1rem;
`,b=y`
  from {
    opacity: 0;
    transform: translate(100%, -15%);
  }
  to {
    opacity: 1;
    transform: translate(0, -15%);
  }
`,c=r.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-15%);
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 1) 100%);
`,C=r.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  &:hover ${c} {
    opacity: 1;
    animation: ${b} 0.15s ease-in-out;
  }
`,x=({copyText:e})=>t(_,{children:t(c,{children:t(g,{text:e,children:t(u,{icon:f,size:"small",intent:"minimal"})})})}),n=({children:e,copyText:a})=>l(C,{children:[e,t(x,{copyText:a})]});try{n.displayName="WithCopyButton",n.__docgenInfo={description:"",displayName:"WithCopyButton",props:{copyText:{defaultValue:null,description:"",name:"copyText",required:!0,type:{name:"string"}}}}}catch{}const B=r(h)`
  color: ${({theme:e})=>e.colors.grey80};
`,v=r.div`
  margin-bottom: ${({marginBottom:e})=>`${e}px`};
`,p=({text:e,label:a,copyText:i,marginBottom:d=10})=>{let o;return typeof e=="string"&&e||typeof e=="number"?o=t(s,{children:e}):m.isValidElement(e)&&(o=e),i&&o&&(o=t(n,{copyText:i,children:o})),l(v,{marginBottom:d,children:[a&&t(B,{type:"p8",children:a}),o||t(s,{children:"-"})]})};try{p.displayName="Property",p.__docgenInfo={description:"",displayName:"Property",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"ReactNode"}},copyText:{defaultValue:null,description:"",name:"copyText",required:!1,type:{name:"string"}},marginBottom:{defaultValue:{value:"10"},description:"",name:"marginBottom",required:!1,type:{name:"number"}}}}}catch{}export{p as P};

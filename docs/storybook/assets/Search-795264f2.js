import{j as a}from"./jsx-runtime-29545a09.js";import{r}from"./index-76fb7be0.js";import{s as h,L as y,I as b,F as S,y as g,f as v,z as I,A as q}from"./SPA-0f542073.js";import"./index-d3ea75b5.js";const _=h.div`
  [data-dp-name=Input] {
    display: flex;
    margin-bottom: 10px;
  }
`,n=({label:t,onChange:e,disabled:i=!1,required:o=!1,isFetching:c=!1,marginBottom:u=10,inputProps:d={}})=>{const[p,s]=r.useState(""),m=r.useCallback(({target:{value:l}})=>{s(l),e&&e(l)},[e]),f=r.useCallback(()=>{s(""),e&&e("")},[e]);return a(_,{children:a(y,{required:o,label:t,htmlFor:"search",style:{marginBottom:u},children:a(b,{id:"search",name:"search",value:p,inputsize:"small",disabled:i,onChange:m,placeholder:"Search",leftIcon:c?a(S,{icon:g,spin:!0}):v,rightIcon:a(I,{minimal:!0,"data-testid":"search-reset",icon:q,onClick:f}),...d})})})};try{n.displayName="Search",n.__docgenInfo={description:"",displayName:"Search",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((search: string) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},isFetching:{defaultValue:{value:"false"},description:"",name:"isFetching",required:!1,type:{name:"boolean"}},marginBottom:{defaultValue:{value:"10"},description:"",name:"marginBottom",required:!1,type:{name:"number"}},inputProps:{defaultValue:{value:"{}"},description:"",name:"inputProps",required:!1,type:{name:"InputProps"}}}}}catch{}export{n as S};
//# sourceMappingURL=Search-795264f2.js.map

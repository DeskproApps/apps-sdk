import{j as y}from"./jsx-runtime-29545a09.js";import{r as h}from"./index-76fb7be0.js";import{O as q,Q as x,U as v,V as D,W as F,S as k}from"./SPA-9917dd72.js";import"./index-d3ea75b5.js";const I="No items(s) found",g=e=>typeof e=="string",N=e=>typeof e=="number"&&!isNaN(e),A=e=>g(e)||N(e),C=(e,a)=>{if(!Array.isArray(a)||!a.length||!N(e)&&!g(e)&&!Array.isArray(e))return"";if(Array.isArray(e)){const n=a.filter(t=>e.includes(t.value)).map(t=>t.label);return e.length?A(n[0])?n.join(", "):n:""}else{const n=a.find(t=>t.value===e);return(n==null?void 0:n.label)??""}},L=(e,a,n,t)=>{const s=n||"",o=t||I;if(!Array.isArray(e)||!e.length)return[{type:"header",label:o}];const c=e.filter(r=>{const d=r==null?void 0:r.label,m=r==null?void 0:r.description,u=A(d)?`${d}`:m||"";return u?(g(u)?u.toLowerCase():u).includes(s.toLowerCase()):!0}).map(r=>({...r,selected:Array.isArray(a)?a.includes(r.value):r.value===a}));return!Array.isArray(c)||!c.length?[{type:"header",label:o}]:c},w=({id:e,error:a,initValue:n,options:t,onChange:s,disabled:o,placeholder:c,showInternalSearch:r,noFoundText:d=I,children:m,...u})=>{const[V,S]=h.useState(""),[i,b]=h.useState(n),p=h.useMemo(()=>C(i,t),[i,t]),T=h.useMemo(()=>L(t,i,V,d),[t,i,V,d]);return y(q,{disabled:o,showInternalSearch:r,fetchMoreText:"Fetch more",autoscrollText:"Autoscroll",selectedIcon:x,externalLinkIcon:v,placement:"bottom-start",hideIcons:!0,inputValue:V,onSelectOption:l=>{if(S(""),A(i))b(l.value),s&&s(l.value);else if(Array.isArray(i)){const f=i.includes(l.value)?i.filter(_=>_!==l.value):[...i,l.value];b(f),s&&s(f)}},onInputChange:l=>{r&&S(l)},options:T,...u,children:({targetRef:l,targetProps:f})=>m?y("div",{ref:l,...f,children:m}):y(D,{...e?{id:e}:{},placeholder:c||"Select Value",variant:"inline",rightIcon:F,error:a,ref:l,...f,value:Array.isArray(p)?A(p[0])?p[0]:y(k,{gap:6,wrap:"wrap",style:{marginBottom:6},children:p}):p,style:{paddingRight:0,cursor:o?"not-allowed":"pointer"}})})};try{w.displayName="Select",w.__docgenInfo={description:"",displayName:"Select",props:{initValue:{defaultValue:null,description:"",name:"initValue",required:!0,type:{name:"T | T[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"DropdownValueType<T>[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T | T[]) => void)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},showInternalSearch:{defaultValue:null,description:"",name:"showInternalSearch",required:!1,type:{name:"boolean"}},noFoundText:{defaultValue:{value:"No items(s) found"},description:"",name:"noFoundText",required:!1,type:{name:"string"}}}}}catch{}export{w as S};
//# sourceMappingURL=Select-af3a5ee9.js.map

import{j as y}from"./jsx-runtime-29545a09.js";import{r as h}from"./index-76fb7be0.js";import{U as D,f as F,V as k,X as C,Y as j,S as M}from"./SPA-7e65fab1.js";import"./index-d3ea75b5.js";const w="No items(s) found",O=e=>{if(e.length<=35)return e;const r=e.slice(0,35),t=r.lastIndexOf(" ");return(t>0?r.slice(0,t):r)+"..."},V=e=>typeof e=="string",q=e=>typeof e=="number"&&!isNaN(e),g=e=>V(e)||q(e),v=(e,l)=>{if(!Array.isArray(l)||!l.length||!q(e)&&!V(e)&&!Array.isArray(e))return"";if(Array.isArray(e)){const r=l.filter(t=>e.includes(t.value)).map(t=>t.label);return e.length?g(r[0])?r.map(t=>O(`${t}`)).join(", "):r:""}else{const r=l.find(t=>t.value===e);return(r==null?void 0:r.label)??""}},E=(e,l,r,t)=>{const o=r||"",i=t||w;if(!Array.isArray(e)||!e.length)return[{type:"header",label:i}];const c=e.filter(a=>{const d=a==null?void 0:a.label,m=a==null?void 0:a.description,u=g(d)?`${d}`:m||"";return u?(V(u)?u.toLowerCase():u).includes(o.toLowerCase()):!0}).map(a=>({...a,selected:Array.isArray(l)?l.includes(a.value):a.value===l}));return!Array.isArray(c)||!c.length?[{type:"header",label:i}]:c},b=({id:e,error:l,value:r,initValue:t,options:o,onChange:i,disabled:c,placeholder:a,showInternalSearch:d,noFoundText:m=w,children:u,...N})=>{const[A,S]=h.useState(""),[p,x]=h.useState(t),f=h.useMemo(()=>v(r||p,o),[r,p,o]),_=h.useMemo(()=>E(o,p,A,m),[o,p,A,m]),I=(n,s)=>{if(g(n))x(s.value),i&&i(s.value);else if(Array.isArray(n)){const T=n.includes(s.value)?n.filter(L=>L!==s.value):[...n,s.value];x(T),i&&i(T)}};return y(D,{disabled:c,showInternalSearch:d,fetchMoreText:"Fetch more",autoscrollText:"Autoscroll",selectedIcon:F,externalLinkIcon:k,placement:"bottom-start",hideIcons:!0,inputValue:A,onSelectOption:n=>{S(""),I(r||p,n)},onInputChange:n=>{d&&S(n)},options:_,...N,children:({targetRef:n,targetProps:s})=>u?y("div",{ref:n,...s,children:u}):y(C,{...e?{id:e}:{},placeholder:a||"Select Value",variant:"inline",rightIcon:j,error:l,ref:n,...s,value:Array.isArray(f)?g(f[0])?f[0]:y(M,{gap:6,wrap:"wrap",style:{marginBottom:6},children:f}):f,style:{paddingRight:0,cursor:c?"not-allowed":"pointer"}})})};try{b.displayName="Select",b.__docgenInfo={description:"",displayName:"Select",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T | T[]"}},initValue:{defaultValue:null,description:"",name:"initValue",required:!1,type:{name:"T | T[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"DropdownValueType<T>[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T | T[]) => void)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},showInternalSearch:{defaultValue:null,description:"",name:"showInternalSearch",required:!1,type:{name:"boolean"}},noFoundText:{defaultValue:{value:"No items(s) found"},description:"",name:"noFoundText",required:!1,type:{name:"string"}}}}}catch{}export{b as S};

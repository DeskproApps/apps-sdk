import{j as n}from"./jsx-runtime-2aae9559.js";import{d as r,S as s,B as p}from"./SPA-1143c1d3.js";import"./index-ff614419.js";import"./index-fc111d74.js";const m=r(s)`
    margin-bottom: 10px;
    padding: 6px 6px 7px;
    border-radius: 6px;
    background-color: ${({theme:e})=>e.colors.grey10};
`,t=r(p)`
    flex-grow: 1;
    justify-content: center;

    ${({selected:e})=>e?"":`
        background-color: transparent;
        border-color: transparent;
        box-shadow: none;
    `}
`,o=({selected:e,oneLabel:a,twoLabel:i,oneOnClick:l,twoOnClick:u,oneIcon:c,twoIcon:d})=>n.jsxs(m,{justify:"space-between",align:"center",gap:6,children:[n.jsx(t,{text:a,intent:"secondary",icon:c,size:"large",selected:e==="one",onClick:l}),n.jsx(t,{text:i,intent:"secondary",icon:d,size:"large",selected:e==="two",onClick:u})]});try{o.displayName="TwoButtonGroup",o.__docgenInfo={description:"",displayName:"TwoButtonGroup",props:{selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'}]}},oneLabel:{defaultValue:null,description:"",name:"oneLabel",required:!0,type:{name:"string"}},twoLabel:{defaultValue:null,description:"",name:"twoLabel",required:!0,type:{name:"string"}},oneOnClick:{defaultValue:null,description:"",name:"oneOnClick",required:!0,type:{name:"() => void"}},twoOnClick:{defaultValue:null,description:"",name:"twoOnClick",required:!0,type:{name:"() => void"}},oneIcon:{defaultValue:null,description:"",name:"oneIcon",required:!1,type:{name:"IconDefinition"}},twoIcon:{defaultValue:null,description:"",name:"twoIcon",required:!1,type:{name:"IconDefinition"}}}}}catch{}export{o as T};

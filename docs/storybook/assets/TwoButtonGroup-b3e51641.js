import{a as d,j as n}from"./jsx-runtime-29545a09.js";import{s as r,S as p,B as m}from"./SPA-0f542073.js";import"./index-76fb7be0.js";import"./index-d3ea75b5.js";const f=r(p)`
    margin-bottom: 10px;
    padding: 6px 6px 7px;
    border-radius: 6px;
    background-color: ${({theme:e})=>e.colors.grey10};
`,o=r(m)`
    flex-grow: 1;
    justify-content: center;

    ${({selected:e})=>e?"":`
        background-color: transparent;
        border-color: transparent;
        box-shadow: none;
    `}
`,t=({selected:e,oneLabel:a,twoLabel:i,oneOnClick:l,twoOnClick:u,oneIcon:c,twoIcon:s})=>d(f,{justify:"space-between",align:"center",gap:6,children:[n(o,{text:a,intent:"secondary",icon:c,size:"large",selected:e==="one",onClick:l}),n(o,{text:i,intent:"secondary",icon:s,size:"large",selected:e==="two",onClick:u})]});try{t.displayName="TwoButtonGroup",t.__docgenInfo={description:"",displayName:"TwoButtonGroup",props:{selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'}]}},oneLabel:{defaultValue:null,description:"",name:"oneLabel",required:!0,type:{name:"string"}},twoLabel:{defaultValue:null,description:"",name:"twoLabel",required:!0,type:{name:"string"}},oneOnClick:{defaultValue:null,description:"",name:"oneOnClick",required:!0,type:{name:"() => void"}},twoOnClick:{defaultValue:null,description:"",name:"twoOnClick",required:!0,type:{name:"() => void"}},oneIcon:{defaultValue:null,description:"",name:"oneIcon",required:!1,type:{name:"IconDefinition"}},twoIcon:{defaultValue:null,description:"",name:"twoIcon",required:!1,type:{name:"IconDefinition"}}}}}catch{}export{t as T};
//# sourceMappingURL=TwoButtonGroup-b3e51641.js.map

import{j as e}from"./jsx-runtime-2aae9559.js";import{r as P}from"./index-ff614419.js";import{a as g}from"./chunk-D5ZWXAHU-ba67761f.js";import{B as T}from"./SPA-b6af1813.js";import"./index-072c1eb7.js";import{M as t}from"./Member-eee953ec.js";import{S as a}from"./Select-b41d3fed.js";import"./v4-4a60fe23.js";const ae={title:"Core/Select"},d=[{value:"1",label:"one",key:"1",type:"value"},{value:"2",label:"two",key:"2",type:"value"},{value:"3",label:"three",key:"3",type:"value"}],y=[{key:"1",value:"1",label:e.jsx(t,{name:"William Shakespeare"}),description:"William Shakespeare",type:"value"},{key:"2",value:"2",label:e.jsx(t,{name:"Taras Shevchenko"}),description:"Taras Shevchenko",type:"value"},{key:"3",value:"3",label:e.jsx(t,{name:"Henryk Sienkiewicz"}),description:"Henryk Sienkiewicz",type:"value"},{key:"4",value:"4",label:e.jsx(t,{name:"Rudyard Kipling"}),description:"Rudyard Kipling",type:"value"}],n=()=>e.jsx(a,{initValue:"",options:d,onChange:g("onChange")}),o=()=>{const[s,v]=P.useState("1");return e.jsx(a,{value:s,options:d,onChange:S=>v(S)})},r=()=>e.jsx(a,{initValue:[],closeOnSelect:!1,options:d,onChange:g("onChange")}),i=()=>e.jsx(a,{disabled:!0,initValue:"1",options:d}),l=()=>e.jsx(a,{initValue:[],showInternalSearch:!0,closeOnSelect:!1,options:y}),u=()=>e.jsx(a,{initValue:[],closeOnSelect:!1,options:[{value:"1",label:"Lorem ipsum dolor sit amet.",key:"1",type:"value"},{value:"2",label:"Aliquam aperiam debitis delectus dolorem, dolorum, earum in ipsa magnam minus nisi nulla quam quo repellat similique, tempora?",key:"2",type:"value"},{value:"3",label:"A alias, consequatur consequuntur distinctio dolorum ducimus ea eius harum magnam nam non quam quos reiciendis repellat sequi sint sit tempora ullam vitae voluptas.",key:"3",type:"value"},{value:"4",label:"Aliquid enim, eveniet laborum nihil possimus quia reiciendis tenetur voluptatibus.",key:"4",type:"value"},{value:"5",label:"Consequatur delectus dignissimos, facere impedit inventore nemo nobis qui rerum tenetur vitae!",key:"5",type:"value"}]}),c=()=>e.jsx(a,{initValue:"",options:[]}),m=()=>e.jsx(a,{initValue:"",options:y,children:e.jsx(T,{type:"button",text:"Open"}),onChange:g("onChange")}),p=()=>{const[s,v]=P.useState({writers:["1"]});return e.jsxs(e.Fragment,{children:[e.jsx(a,{initValue:["1"],closeOnSelect:!1,options:y,onChange:S=>{v({...s,writers:S})}}),e.jsx("pre",{children:JSON.stringify(s,null,2)})]})};var h,b,q;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:'() => <Select initValue={""} options={options as never} onChange={action("onChange")} />',...(q=(b=n.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var k,C,V;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("1");
  return <Select value={value} options={options as never} onChange={e => setValue(e as string)} />;
}`,...(V=(C=o.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var f,x,O;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:'() => <Select initValue={[]} closeOnSelect={false} options={options as never[]} onChange={action("onChange")} />',...(O=(x=r.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var j,w,A;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:'() => <Select disabled initValue={"1"} options={options as never[]} />',...(A=(w=i.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var L,M,W;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:"() => <Select initValue={[]} showInternalSearch closeOnSelect={false} options={memberOptions as never[]} />",...(W=(M=l.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var F,H,I;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`() => <Select initValue={[]} closeOnSelect={false} options={[{
  value: "1",
  label: "Lorem ipsum dolor sit amet.",
  key: "1",
  type: "value"
}, {
  value: "2",
  label: "Aliquam aperiam debitis delectus dolorem, dolorum, earum in ipsa magnam minus nisi nulla quam quo repellat similique, tempora?",
  key: "2",
  type: "value"
}, {
  value: "3",
  label: "A alias, consequatur consequuntur distinctio dolorum ducimus ea eius harum magnam nam non quam quos reiciendis repellat sequi sint sit tempora ullam vitae voluptas.",
  key: "3",
  type: "value"
}, {
  value: "4",
  label: "Aliquid enim, eveniet laborum nihil possimus quia reiciendis tenetur voluptatibus.",
  key: "4",
  type: "value"
}, {
  value: "5",
  label: "Consequatur delectus dignissimos, facere impedit inventore nemo nobis qui rerum tenetur vitae!",
  key: "5",
  type: "value"
}]} />`,...(I=(H=u.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var B,E,R;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:'() => <Select initValue={""} options={[]} />',...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var _,z,D;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:'() => <Select initValue="" options={memberOptions} children={<Button type="button" text="Open" />} onChange={action("onChange")} />',...(D=(z=m.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var J,K,N;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [form, setForm] = useState({
    writers: ["1"]
  });
  return <>
      <Select initValue={["1"]} closeOnSelect={false} options={memberOptions as never[]} onChange={newValue => {
      setForm({
        ...form,
        writers: newValue as string[]
      });
    }} />
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </>;
}`,...(N=(K=p.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};const se=["SingleSelect","PassingValue","MultiplySelect","Disabled","CustomLabels","MultiplyLongItems","WithoutOptions","WithChildren","HandleChangedValue"];export{l as CustomLabels,i as Disabled,p as HandleChangedValue,u as MultiplyLongItems,r as MultiplySelect,o as PassingValue,n as SingleSelect,m as WithChildren,c as WithoutOptions,se as __namedExportsOrder,ae as default};

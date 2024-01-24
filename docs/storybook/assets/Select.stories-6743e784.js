import{j as e,a as T}from"./jsx-runtime-29545a09.js";import{r as R}from"./index-76fb7be0.js";import{a as y}from"./chunk-AY7I2SME-c7b6cf8a.js";import{B as G,S as Q}from"./SPA-45e0163f.js";import"./index-d3ea75b5.js";import{M as n}from"./Member-736f4d15.js";import{S as a}from"./Select-6c571ea3.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";const se={title:"Core/Select"},d=[{value:"1",label:"one",key:"1",type:"value"},{value:"2",label:"two",key:"2",type:"value"},{value:"3",label:"three",key:"3",type:"value"}],g=[{key:"1",value:"1",label:e(n,{name:"William Shakespeare"}),description:"William Shakespeare",type:"value"},{key:"2",value:"2",label:e(n,{name:"Taras Shevchenko"}),description:"Taras Shevchenko",type:"value"},{key:"3",value:"3",label:e(n,{name:"Henryk Sienkiewicz"}),description:"Henryk Sienkiewicz",type:"value"},{key:"4",value:"4",label:e(n,{name:"Rudyard Kipling"}),description:"Rudyard Kipling",type:"value"}],s=()=>e(a,{initValue:"",options:d,onChange:y("onChange")}),o=()=>{const[t,v]=R.useState("1");return e(a,{value:t,options:d,onChange:S=>v(S)})},r=()=>e(a,{initValue:[],closeOnSelect:!1,options:d,onChange:y("onChange")}),i=()=>e(a,{disabled:!0,initValue:"1",options:d}),l=()=>e(a,{initValue:[],showInternalSearch:!0,closeOnSelect:!1,options:g}),u=()=>e(a,{initValue:[],closeOnSelect:!1,options:[{value:"1",label:"Lorem ipsum dolor sit amet.",key:"1",type:"value"},{value:"2",label:"Aliquam aperiam debitis delectus dolorem, dolorum, earum in ipsa magnam minus nisi nulla quam quo repellat similique, tempora?",key:"2",type:"value"},{value:"3",label:"A alias, consequatur consequuntur distinctio dolorum ducimus ea eius harum magnam nam non quam quos reiciendis repellat sequi sint sit tempora ullam vitae voluptas.",key:"3",type:"value"},{value:"4",label:"Aliquid enim, eveniet laborum nihil possimus quia reiciendis tenetur voluptatibus.",key:"4",type:"value"},{value:"5",label:"Consequatur delectus dignissimos, facere impedit inventore nemo nobis qui rerum tenetur vitae!",key:"5",type:"value"}]}),c=()=>e(a,{initValue:"",options:[]}),m=()=>e(a,{initValue:"",options:g,children:e(G,{type:"button",text:"Open"}),onChange:y("onChange")}),p=()=>{const[t,v]=R.useState({writers:["1"]});return T(Q,{gap:15,children:[e("div",{style:{width:"300px"},children:e(a,{initValue:["1"],closeOnSelect:!1,options:g,onChange:S=>{v({...t,writers:S})}})}),e("pre",{children:JSON.stringify(t,null,2)})]})};var h,b,k;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:'() => <Select initValue={""} options={(options as never)} onChange={action("onChange")} />',...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var q,C,V;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("1");
  return <Select value={value} options={(options as never)} onChange={e => setValue((e as string))} />;
}`,...(V=(C=o.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var f,O,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:'() => <Select initValue={[]} closeOnSelect={false} options={(options as never[])} onChange={action("onChange")} />',...(w=(O=r.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var x,A,L;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:'() => <Select disabled initValue={"1"} options={(options as never[])} />',...(L=(A=i.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var M,W,H;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:"() => <Select initValue={[]} showInternalSearch closeOnSelect={false} options={(memberOptions as never[])} />",...(H=(W=l.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var I,j,B;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Select initValue={[]} closeOnSelect={false} options={[{
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
}]} />`,...(B=(j=u.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var F,_,z;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:'() => <Select initValue={""} options={[]} />',...(z=(_=c.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var D,E,J;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:'() => <Select initValue="" options={memberOptions} children={<Button type="button" text="Open" />} onChange={action("onChange")} />',...(J=(E=m.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};var K,N,P;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [form, setForm] = useState({
    writers: ["1"]
  });
  return <Stack gap={15}>
      <div style={{
      width: "300px"
    }}>
        <Select initValue={["1"]} closeOnSelect={false} options={(memberOptions as never[])} onChange={newValue => {
        setForm({
          ...form,
          writers: (newValue as string[])
        });
      }} />
      </div>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </Stack>;
}`,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const oe=["SingleSelect","PassingValue","MultiplySelect","Disabled","CustomLabels","MultiplyLongItems","WithoutOptions","WithChildren","HandleChangedValue"];export{l as CustomLabels,i as Disabled,p as HandleChangedValue,u as MultiplyLongItems,r as MultiplySelect,o as PassingValue,s as SingleSelect,m as WithChildren,c as WithoutOptions,oe as __namedExportsOrder,se as default};
//# sourceMappingURL=Select.stories-6743e784.js.map

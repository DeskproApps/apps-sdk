import { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@deskpro/deskpro-ui";
import { Stack } from "@deskpro/deskpro-ui";
import { Member } from "../../Member";
import { Select } from "../Select";
import type { DropdownValueType } from "@deskpro/deskpro-ui";

export default {
  title: "Core/Select",
};

const options = [
  { value: "1", label: "one", key: "1", type: "value" },
  { value: "2", label: "two", key: "2", type: "value" },
  { value: "3", label: "three", key: "3", type: "value" },
];

const memberOptions: Array<DropdownValueType<string>> = [
  {
    key: "1",
    value: "1",
    label: <Member name="William Shakespeare" />,
    description: "William Shakespeare",
    type: "value",
  },
  {
    key: "2",
    value: "2",
    label: <Member name="Taras Shevchenko" />,
    description: "Taras Shevchenko",
    type: "value",
  },
  {
    key: "3",
    value: "3",
    label: <Member name="Henryk Sienkiewicz" />,
    description: "Henryk Sienkiewicz",
    type: "value",
  },
  {
    key: "4",
    value: "4",
    label: <Member name="Rudyard Kipling" />,
    description: "Rudyard Kipling",
    type: "value",
  },
];

export const SingleSelect = () => (
  <Select initValue={""} options={options as never} onChange={action("onChange")} />
);

export const PassingValue = () => {
  const [value, setValue] = useState("1");

  return (
    <Select value={value} options={options as never} onChange={(e) => setValue(e as string)} />
  );
};

export const MultiplySelect = () => (
  <Select
    initValue={[]}
    closeOnSelect={false}
    options={options as never[]}
    onChange={action("onChange")}
  />
);

export const Disabled = () => <Select disabled initValue={"1"} options={options as never[]} />;

export const CustomLabels = () => (
  <Select
    initValue={[]}
    showInternalSearch
    closeOnSelect={false}
    options={memberOptions as never[]}
  />
);

export const WithoutOptions = () => <Select initValue={""} options={[]} />;

export const WithChildren = () => (
  <Select initValue="" options={memberOptions} children={<Button type="button" text="Open" />} />
);

export const HandleChangedValue = () => {
  const [form, setForm] = useState({ writers: ["1"] });

  return (
    <Stack gap={15}>
      <div style={{ width: "300px" }}>
        <Select
          initValue={["1"]}
          closeOnSelect={false}
          options={memberOptions as never[]}
          onChange={(newValue) => {
            setForm({
              ...form,
              writers: newValue as string[],
            });
          }}
        />
      </div>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </Stack>
  );
};

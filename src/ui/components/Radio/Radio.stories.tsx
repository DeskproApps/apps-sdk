import { Label, LabelGroup, Radio, Stack } from "@deskpro/deskpro-ui";
import { withKnobs } from "@storybook/addon-knobs";
import * as React from "react";
import { useState } from "react";
import { P2 } from "../Typography";

export default {
  title: "Core/Radio",
  decorators: [withKnobs],
};

export const Radios = () => {
  const [value, setValue] = useState("");
  return (
    <Stack vertical gap={10} align={"start"} justify="center">
      <Stack align={"center"} justify="start">
        <Label label="Option 1" htmlFor={"option1"}>
          <Radio
            label={"Option 1"}
            value={"option1"}
            id={"option1"}
            name={"sbtest"}
            checked={value === "option1"}
            onChange={(e) => setValue(e.target.value)}
          />
        </Label>
      </Stack>
      <Stack align={"center"} justify="start">
        <Label label="Option 2" htmlFor={"option2"}>
          <Radio
            label={"Option 2"}
            value={"option2"}
            id={"option2"}
            name={"sbtest"}
            checked={value === "option2"}
            onChange={(e) => setValue(e.target.value)}
          />
        </Label>
      </Stack>
      <Stack align={"center"} justify="start">
        <Label label="Option 3" htmlFor={"option3"}>
          <Radio
            label={"Option 3"}
            value={"option3"}
            id={"option3"}
            name={"sbtest"}
            checked={value === "option3"}
            onChange={(e) => setValue(e.target.value)}
          />
        </Label>
      </Stack>
      <Stack align={"center"} justify="start">
        <Label label="Option 4" htmlFor={"option4"}>
          <Radio
            label={"Option 4 (Prefixed)"}
            value={"option4"}
            id={"option4"}
            name={"sbtest"}
            checked={value === "option4"}
            onChange={(e) => setValue(e.target.value)}
            labelIsPrefix
          />
        </Label>
      </Stack>
    </Stack>
  );
};

export const RadioGroup = () => {
  const [value, setValue] = useState("");
  return (
    <Stack vertical gap={10} align={"start"} justify="center">
      <LabelGroup label="Group">
        <Stack align={"center"} justify="start">
          <Label label="Option 1" htmlFor={"option1"}>
            <Radio
              label={"Option 1"}
              value={"option1"}
              id={"option1"}
              name={"sbtest"}
              checked={value === "option1"}
              onChange={(e) => setValue(e.target.value)}
            />
          </Label>
        </Stack>
        <Stack align={"center"} justify="start">
          <Label label="Option 2" htmlFor={"option2"}>
            <Radio
              label={"Option 2"}
              value={"option2"}
              id={"option2"}
              name={"sbtest"}
              checked={value === "option2"}
              onChange={(e) => setValue(e.target.value)}
            />
          </Label>
        </Stack>
        <Stack align={"center"} justify="start">
          <Label label="Option 3" htmlFor={"option3"}>
            <Radio
              label={"Option 3"}
              value={"option3"}
              id={"option3"}
              name={"sbtest"}
              checked={value === "option3"}
              onChange={(e) => setValue(e.target.value)}
            />
          </Label>
        </Stack>
      </LabelGroup>
    </Stack>
  );
};

export const RadioDefault = () => {
  return (
    <Stack gap={10} align={"start"} justify="center">
      <Stack vertical gap={10} align="center">
        <P2 type="p2">Default</P2>
        <Radio checked={false} size={16} />
        <Radio checked={true} size={16} />
      </Stack>
      <Stack vertical gap={10} align="center">
        <P2 type="p2">Error</P2>
        <Radio checked={false} size={16} error />
        <Radio checked={true} size={16} error />
      </Stack>
      <Stack vertical gap={10} align="center">
        <P2 type="p2">Disabled</P2>
        <Radio checked={false} size={16} disabled />
        <Radio checked={true} size={16} disabled />
      </Stack>
      <Stack vertical gap={10} align="center">
        <P2 type="p2">Display Only</P2>
        <Radio checked={false} size={16} isDisplayOnly />
        <Radio checked={true} size={16} isDisplayOnly />
      </Stack>
    </Stack>
  );
};

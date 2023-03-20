import { Checkbox, H1, Stack } from "@deskpro/deskpro-ui";
import { withKnobs } from "@storybook/addon-knobs";
import * as React from "react";
import { useState } from "react";

export default {
  title: "Core/CheckBox",
  decorators: [withKnobs],
};

export const CheckBoxes = () => {
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const [value4, setValue4] = useState(false);
  const [value5, setValue5] = useState(false);
  return (
    <Stack vertical gap={10} align={"start"} justify="center">
      <Stack align={"center"} justify="start">
        <Checkbox
          label={"Option 1"}
          checked={value1}
          onChange={(e) => setValue1(e.target.checked)}
          id="option1"
          size={8}
        />
      </Stack>
      <Stack align={"center"} justify="start">
        <Checkbox
          label={"Option 2"}
          checked={value2}
          onChange={(e) => setValue2(e.target.checked)}
          id="option2"
          size={10}
        />
      </Stack>
      <Stack align={"center"} justify="start">
        <Checkbox
          label={"Option 3 "}
          checked={value3}
          onChange={(e) => setValue3(e.target.checked)}
          id="option3"
          size={12}
        />
      </Stack>
      <Stack align={"center"} justify="start">
        <Checkbox
          label={"Option 4"}
          checked={value4}
          onChange={(e) => setValue4(e.target.checked)}
          id="option4"
          size={14}
        />
      </Stack>
      <Stack align={"center"} justify="start">
        <Checkbox
          label={"Display only Option"}
          checked={true}
          id="displayOnly option"
          size={14}
          isDisplayOnly
        />
      </Stack>
      <Stack align={"center"} justify="start">
        <Checkbox
          label={"Display only Option"}
          checked={false}
          id="displayOnly option2"
          size={14}
          isDisplayOnly
        />
      </Stack>
      <Stack align={"center"} justify="start">
        <Checkbox
          label={"Option 5 (Prefixed)"}
          labelIsPrefix
          checked={value5}
          onChange={(e) => setValue5(e.target.checked)}
          id="option5"
          size={12}
        />
      </Stack>
    </Stack>
  );
};

export const CheckBoxDefault = () => {
  return (
    <Stack gap={10} align={"start"} justify="center">
      <Stack vertical gap={10} align="center">
        <H1 type="p2">Default</H1>
        <Checkbox checked={false} size={16} />
        <Checkbox checked={true} size={16} />
      </Stack>
      <Stack vertical gap={10} align="center">
        <H1 type="p2">Error</H1>
        <Checkbox checked={false} size={16} error />
        <Checkbox checked={true} size={16} error />
      </Stack>
      <Stack vertical gap={10} align="center">
        <H1 type="p2">Disabled</H1>
        <Checkbox checked={false} size={16} disabled />
        <Checkbox checked={true} size={16} disabled />
      </Stack>
      <Stack vertical gap={10} align="center">
        <H1 type="p2">Display Only</H1>
        <Checkbox checked={false} size={16} isDisplayOnly />
        <Checkbox checked={true} size={16} isDisplayOnly />
      </Stack>
    </Stack>
  );
};
export const CheckBoxIndeterminate = () => {
  return (
    <Stack gap={10} align={"start"} justify="center">
      <Stack vertical gap={10} align="center">
        <H1 type="p2">Default</H1>
        <Checkbox checked={false} size={16} />
        <Checkbox checked={true} indeterminate size={16} />
      </Stack>
      <Stack vertical gap={10} align="center">
        <H1 type="p2">Error</H1>
        <Checkbox checked={false} size={16} error />
        <Checkbox checked={true} indeterminate size={16} error />
      </Stack>
      <Stack vertical gap={10} align="center">
        <H1 type="p2">Disabled</H1>
        <Checkbox checked={false} size={16} disabled />
        <Checkbox checked={true} indeterminate size={16} disabled />
      </Stack>
      <Stack vertical gap={10} align="center">
        <H1 type="p2">Display Only</H1>
        <Checkbox checked={false} size={16} isDisplayOnly />
        <Checkbox checked={true} indeterminate size={16} isDisplayOnly />
      </Stack>
    </Stack>
  );
};
export const CheckBoxIndeterminateWithSelection = () => {
  return (
    <Stack gap={10} align={"start"} justify="center">
      <Stack vertical gap={10} align="center">
        <H1 type="p2">Default</H1>
        <Checkbox checked={false} size={16} withSelection />
        <Checkbox checked={true} indeterminate size={16} withSelection />
      </Stack>
      <Stack vertical gap={10} align="center">
        <H1 type="p2">Error</H1>
        <Checkbox checked={false} size={16} error withSelection />
        <Checkbox checked={true} indeterminate size={16} error withSelection />
      </Stack>
      <Stack vertical gap={10} align="center">
        <H1 type="p2">Disabled</H1>
        <Checkbox checked={false} size={16} disabled withSelection />
        <Checkbox
          checked={true}
          indeterminate
          size={16}
          disabled
          withSelection
        />
      </Stack>
      <Stack vertical gap={10} align="center">
        <H1 type="p2">Display Only</H1>
        <Checkbox checked={false} size={16} isDisplayOnly withSelection />
        <Checkbox
          checked={true}
          indeterminate
          size={16}
          isDisplayOnly
          withSelection
        />
      </Stack>
    </Stack>
  );
};

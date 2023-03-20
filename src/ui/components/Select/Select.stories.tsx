import {
  Select,
  Stack as StackContainer,
  StackItem,
} from "@deskpro/deskpro-ui";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { action } from "@storybook/addon-actions";
import * as React from "react";
import styled from "styled-components";
import { IconButton } from "../Button";
import { Label } from "../Label";
import { H0 } from "../Typography";

type HTMLOptionAttributes = React.OptionHTMLAttributes<HTMLOptionElement>;

interface HTMLOptgroupAttributes
  extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {
  options?: HTMLOptionAttributes[];
}

export default {
  title: "Core/Select",
  component: Select,
};

const options: HTMLOptionAttributes[] = [
  {
    label: "label1jqgp",
    value: "value1",
  },
  {
    label: "label2",
    value: "value2",
  },
  {
    label: "label3",
    value: "value3",
  },
];

const optGroup: HTMLOptgroupAttributes[] = [
  {
    label: "Option group 1",
    options,
  },
  {
    label: "Option group 2",
    options,
  },
  {
    label: "Option group 3",
    options,
  },
];

const StyledH0 = styled(H0)`
  margin-bottom: 6px;
`;

export const Selects = () => {
  return (
    <StackContainer vertical wrap={"wrap"}>
      <StackItem>
        <StyledH0>Native select with options</StyledH0>
        <Select
          options={options}
          aria-label="label"
          onChange={action("on change")}
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select with optgroup</StyledH0>
        <Select
          optGroup={optGroup}
          aria-label="label"
          onChange={action("on change")}
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select with options and optgroup</StyledH0>
        <Select
          options={options}
          optGroup={optGroup}
          aria-label="label"
          onChange={action("on change")}
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select with placeholder</StyledH0>
        <Select
          optGroup={optGroup}
          aria-label="label"
          onChange={action("on change")}
          placeholder="Please select.."
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select disabled</StyledH0>
        <Select
          options={options}
          aria-label="label"
          onChange={action("on change")}
          disabled
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select with error</StyledH0>
        <Select
          options={options}
          aria-label="label"
          onChange={action("on change")}
          error
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select with default value</StyledH0>
        <Select
          options={options}
          aria-label="label"
          onChange={action("on change")}
          defaultValue="value2"
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select fill width</StyledH0>
        <Select
          options={options}
          aria-label="label"
          onChange={action("on change")}
          fillWidth
        />
      </StackItem>
      <StackItem style={{ width: "100%" }}>
        <StyledH0>
          Native select fill width of parent (requires wrap to be set on parent)
        </StyledH0>
        <Select
          options={options}
          aria-label="label"
          onChange={action("on change")}
          fillWidth
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select with label</StyledH0>
        <Label htmlFor="select-someid1" label="This is a label">
          <Select
            options={options}
            id="select-someid1"
            onChange={action("on change")}
          />
        </Label>
      </StackItem>
      <StackItem>
        <StyledH0>
          Native select with label, info, action and description
        </StyledH0>
        <Label
          htmlFor="select-someid2"
          label="This is a label"
          labelInfo="(This is some extra stuff)"
          labelAction={<IconButton icon={faPlus} minimal></IconButton>}
          description="This is a description"
        >
          <Select
            options={options}
            id="select-someid2"
            onChange={action("on change")}
          />
        </Label>
      </StackItem>
      <StackItem>
        <StyledH0>
          Native select with inline label, info, action and description
        </StyledH0>
        <Label
          htmlFor="select-someid2"
          label="This is a label"
          labelInfo="(This is some extra stuff)"
          labelAction={<IconButton icon={faPlus} minimal></IconButton>}
          description="This is a description"
        >
          <Select
            options={options}
            id="select-someid2"
            onChange={action("on change")}
          />
        </Label>
      </StackItem>
    </StackContainer>
  );
};

export const InlineSelects = () => {
  return (
    <StackContainer vertical wrap={"wrap"}>
      <StackItem>
        <StyledH0>Native select with options</StyledH0>
        <Select
          options={options}
          aria-label="label"
          onChange={action("on change")}
          inline
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select with optgroup</StyledH0>
        <Select
          optGroup={optGroup}
          aria-label="label"
          onChange={action("on change")}
          inline
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select with options and optgroup</StyledH0>
        <Select
          options={options}
          optGroup={optGroup}
          aria-label="label"
          onChange={action("on change")}
          inline
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select with placeholder</StyledH0>
        <Select
          optGroup={optGroup}
          aria-label="label"
          onChange={action("on change")}
          placeholder="Please select.."
          inline
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select disabled</StyledH0>
        <Select
          options={options}
          aria-label="label"
          onChange={action("on change")}
          inline
          disabled
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select with error</StyledH0>
        <Select
          options={options}
          aria-label="label"
          onChange={action("on change")}
          inline
          error
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select with default value</StyledH0>
        <Select
          options={options}
          aria-label="label"
          onChange={action("on change")}
          inline
          defaultValue="value2"
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select fill width</StyledH0>
        <Select
          options={options}
          aria-label="label"
          onChange={action("on change")}
          inline
          fillWidth
        />
      </StackItem>
      <StackItem style={{ width: "100%" }}>
        <StyledH0>
          Native select fill width of parent (requires wrap to be set on parent)
        </StyledH0>
        <Select
          options={options}
          aria-label="label"
          onChange={action("on change")}
          inline
          fillWidth
        />
      </StackItem>
      <StackItem>
        <StyledH0>Native select with label</StyledH0>
        <Label htmlFor="select-inline-someid1" label="This is a label">
          <Select
            options={options}
            id="select-inline-someid1"
            onChange={action("on change")}
            inline
          />
        </Label>
      </StackItem>
      <StackItem>
        <StyledH0>Native select required</StyledH0>
        <Select
          options={options}
          aria-label="label"
          onChange={action("on change")}
          inline
          required
        />
      </StackItem>
    </StackContainer>
  );
};

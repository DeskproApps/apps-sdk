import { Code, H0, Label, LabelGroup, P1 } from "@deskpro/deskpro-ui";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import styled from "styled-components";
import { IconButton } from "../Button";
import { Input } from "../Input";

export default {
  title: "Core/Label",
};

const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const value = "this is an input";
export const LabelsAgent = () => {
  return (
    <Container>
      <H0>Labels for Agent</H0>

      <H0>Label with single input</H0>
      <Label htmlFor="someid2" label="This is a label">
        <Input
          inputsize="small"
          variant="inline"
          id="someid1"
          placeholder="Placeholder"
        ></Input>
      </Label>

      <Label required htmlFor="someid199" label="This is a label">
        <Input
          inputsize="small"
          variant="inline"
          id="someid1"
          placeholder="Placeholder"
          required
        />
      </Label>
      <Label
        htmlFor="someid1"
        label="This is a label"
        labelInfo="(This is some extra stuff)"
        labelAction={<IconButton icon={faPlus} minimal></IconButton>}
        description="This is a description"
      >
        <Input
          inputsize="small"
          variant="inline"
          id="someid1"
          placeholder="Placeholder"
        ></Input>
      </Label>

      <H0>with overflowing labels</H0>
      <Label
        required
        htmlFor="someid3"
        label="This is a label is a really really long label text"
        labelInfo="(This is some extra stuff that is also really really really long)"
        labelAction={<IconButton icon={faPlus} minimal></IconButton>}
        description="This is a description"
      >
        <Input
          inputsize="small"
          variant="inline"
          id="someid3"
          placeholder="Placeholder"
          required
        />
      </Label>

      <H0>Required</H0>
      <Label
        required
        htmlFor="someid4"
        label="This is a label"
        labelInfo="(This is some extra stuff)"
        labelAction={<IconButton icon={faPlus} minimal></IconButton>}
        description="This is a description"
      >
        <Input
          inputsize="small"
          variant="inline"
          id="someid4"
          placeholder="Placeholder"
          required
        />
      </Label>

      <H0>Required, with value</H0>
      <Label
        required
        htmlFor="someid4"
        label="This is a label"
        labelInfo="(This is some extra stuff)"
        labelAction={<IconButton icon={faPlus} minimal></IconButton>}
        description="This is a description"
      >
        <Input
          inputsize="small"
          variant="inline"
          id="someid4"
          value={value}
          required={!value}
        />
      </Label>

      <H0>Error</H0>
      <Label
        error
        errorMsg="This is an error message"
        htmlFor="someid5"
        label="This is a label"
        labelInfo="(This is some extra stuff)"
        labelAction={<IconButton icon={faPlus} minimal></IconButton>}
        description="This is a description"
      >
        <Input
          inputsize="small"
          variant="inline"
          error
          id="someid5"
          placeholder="Placeholder"
        />
      </Label>

      <H0>With Inline Input</H0>
      <Label
        htmlFor="someid6"
        label="This is a label"
        labelInfo="(This is some extra stuff)"
        labelAction={<IconButton icon={faPlus} minimal></IconButton>}
        description="This is a description"
      >
        <Input
          inputsize="small"
          variant="inline"
          id="someid6"
          placeholder="Placeholder"
        />
      </Label>
    </Container>
  );
};

export const LabelsAdmin = () => {
  return (
    <Container>
      <H0>Labels for Admin</H0>
      <H0>Label with single input</H0>
      <Label variant="admin" htmlFor="someid2" label="This is a label">
        <Input inputsize="small" id="someid1" placeholder="Placeholder"></Input>
      </Label>

      <Label
        variant="admin"
        required
        htmlFor="someid199"
        label="This is a label"
      >
        <Input
          inputsize="small"
          id="someid1"
          placeholder="Placeholder"
          required
        ></Input>
      </Label>
      <Label
        htmlFor="someid1"
        label="This is a label"
        labelInfo="(This is some extra stuff)"
        labelAction={<IconButton icon={faPlus} minimal></IconButton>}
        description="This is a description"
      >
        <Input inputsize="small" id="someid1" placeholder="Placeholder"></Input>
      </Label>

      <H0>with overflowing labels</H0>
      <Label
        variant="admin"
        htmlFor="someid3"
        label="This is a label is a really really long label text"
        labelInfo="(This is some extra stuff that is also really really really long)"
        labelAction={<IconButton icon={faPlus} minimal></IconButton>}
        description="This is a description"
      >
        <Input id="someid3" placeholder="Placeholder" required />
      </Label>

      <H0>Required</H0>
      <Label
        variant="admin"
        required
        htmlFor="someid4"
        label="This is a label"
        labelInfo="(This is some extra stuff)"
        labelAction={<IconButton icon={faPlus} minimal></IconButton>}
        description="This is a description"
      >
        <Input id="someid4" required placeholder="Placeholder" />
      </Label>

      <H0>Required, with value</H0>
      <Label
        variant="admin"
        required
        htmlFor="someid4"
        label="This is a label"
        labelInfo="(This is some extra stuff)"
        labelAction={<IconButton icon={faPlus} minimal></IconButton>}
        description="This is a description"
      >
        <Input inputsize="small" id="someid4" value={value} required={!value} />
      </Label>

      <H0>Error</H0>
      <Label
        variant="admin"
        error
        errorMsg="This is an error message"
        htmlFor="someid5"
        label="This is a label"
        labelInfo="(This is some extra stuff)"
        labelAction={<IconButton icon={faPlus} minimal></IconButton>}
        description="This is a description"
      >
        <Input error id="someid5" placeholder="Placeholder" />
      </Label>

      <H0>With Inline Input</H0>
      <Label
        variant="admin"
        htmlFor="someid6"
        label="This is a label"
        labelInfo="(This is some extra stuff)"
        labelAction={<IconButton icon={faPlus} minimal></IconButton>}
        description="This is a description"
      >
        <Input id="someid6" placeholder="Placeholder" />
      </Label>
    </Container>
  );
};

export const LabelGroups = () => {
  return (
    <Container>
      <H0>Label Group with multiple inputs</H0>
      <P1>
        For when you don't want <Code>{`<label />`}</Code> behaviours with click
        and focus events
      </P1>

      <LabelGroup
        label="This is a label"
        labelInfo="(This is some extra stuff)"
        labelAction={<IconButton icon={faPlus} minimal></IconButton>}
        description="This is a description"
      >
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </LabelGroup>
    </Container>
  );
};

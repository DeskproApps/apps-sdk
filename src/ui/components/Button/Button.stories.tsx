import { Button, IconButton } from "./";
import { Stack } from "../Layout";
import { H1 } from "../Typography";
import * as React from "react";
import { faCheck, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Core/Button",
};

export const Buttons = () => {
  return (
    <Stack gap={20}>

      <Stack vertical gap={5}>
        <H1>Buttons</H1>
        <Button text="Text" />
        <Button text="Text" intent="secondary" />
        <Button text="Text" intent="tertiary" />
      </Stack>

      <Stack vertical gap={5}>
        <H1>With Icons</H1>
        <Button text="Text" icon={faClipboardCheck} />
        <Button text="Text" icon={faCheck} />
        <Button text="Text" icon="follow-up" />
        <Button text="Text" icon="follow-up" intent="secondary" />
        <Button text="Text" icon="follow-up" intent="tertiary" />
      </Stack>

    </Stack>
  );
};

export const IconButtons = () => {
  return (
    <Stack gap={20}>

      <Stack vertical gap={5}>
        <H1>Icon Buttons</H1>
        <IconButton aria-label="Text" icon="follow-up" />
        <IconButton aria-label="Text" icon="follow-up" intent="secondary" />
        <IconButton aria-label="Text" icon="follow-up" intent="tertiary" />
      </Stack>

      <Stack vertical gap={5}>
        <H1>Small</H1>
        <IconButton aria-label="Text" icon="follow-up" size="small" />
        <IconButton aria-label="Text" icon="follow-up" intent="secondary" size="small" />
        <IconButton aria-label="Text" icon="follow-up" intent="tertiary" size="small" />
      </Stack>

      <Stack vertical gap={5}>
        <H1>Minimal</H1>
        <IconButton aria-label="Text" icon="follow-up" minimal />
        <IconButton aria-label="Text" icon="follow-up" intent="secondary" minimal />
        <IconButton aria-label="Text" icon="follow-up" intent="tertiary" minimal />
      </Stack>

    </Stack>
  );
};

import { Stack, Tooltip, TooltipCommonIcon } from "@deskpro/deskpro-ui";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import * as React from "react";
import { useState } from "react";
import { Button } from "../Button";

export default {
  title: "Core/ToolTip",
  decorators: [withKnobs],
};

export const TooltipComponent = () => {
  const content = text(
    "Content",
    "The Splash image is a cover image displayed when rendering this content in the help center. It can be used as a backdrop to decorate the title to help give contex and value flare."
  );
  const placement = select(
    "Placement",
    ["left", "right", "bottom", "top"],
    "left"
  );
  const styleType = select("Style", ["dark", "light", "lightBox"], "dark");

  return (
    <Stack justify="center" align="center">
      <Tooltip content={content} styleType={styleType} placement={placement}>
        <span style={{ border: "solid 1px", padding: 30 }}>Tooltip</span>
      </Tooltip>
    </Stack>
  );
};

export const TooltipCommonIconSB = () => {
  const content = text(
    "Content",
    "The Splash image is a cover image displayed when rendering this content in the help center. It can be used as a backdrop to decorate the title to help give contex and value flare."
  );

  return <TooltipCommonIcon content={content} />;
};

export const ControlledToolTip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <Stack gap={16}>
      <Stack vertical>
        <div>light</div>
        <Tooltip
          content={<div>light</div>}
          visible={isOpen}
          onPresEsc={() => setIsOpen(false)}
          arrow={true}
          arrowColor={"grey3"}
          styleType="light"
        >
          <Button
            text={isOpen ? "Close" : "Open"}
            onClick={() => setIsOpen((pre) => !pre)}
          />
        </Tooltip>
      </Stack>

      <Stack vertical>
        <div>lightBox</div>
        <Tooltip
          content={<div>lightBox</div>}
          visible={isOpen1}
          onPresEsc={() => setIsOpen(false)}
          arrow={true}
          arrowColor={"white"}
          styleType="lightBox"
        >
          <Button
            text={isOpen1 ? "Close" : "Open"}
            onClick={() => setIsOpen1((pre) => !pre)}
          />
        </Tooltip>
      </Stack>

      <Stack vertical>
        <div>lightBoxModal</div>
        <Tooltip
          content={<div>lightBoxModal</div>}
          visible={isOpen2}
          onPresEsc={() => setIsOpen(false)}
          arrow={true}
          arrowColor={"white"}
          styleType="lightBoxModal"
        >
          <Button
            text={isOpen2 ? "Close" : "Open"}
            onClick={() => setIsOpen2((pre) => !pre)}
          />
        </Tooltip>
      </Stack>

      <Stack vertical>
        <div>dark</div>
        <Tooltip
          content={<div>dark</div>}
          visible={isOpen3}
          onPresEsc={() => setIsOpen(false)}
          arrow={true}
          arrowColor={"grey_black100"}
          styleType="dark"
        >
          <Button
            text={isOpen3 ? "Close" : "Open"}
            onClick={() => setIsOpen3((pre) => !pre)}
          />
        </Tooltip>
      </Stack>

      <Stack vertical>
        <div>extraDark</div>
        <Tooltip
          content={<div>extraDark</div>}
          visible={isOpen4}
          onPresEsc={() => setIsOpen(false)}
          arrow={true}
          arrowColor={"grey100"}
          styleType="extraDark"
        >
          <Button
            text={isOpen4 ? "Close" : "Open"}
            onClick={() => setIsOpen4((pre) => !pre)}
          />
        </Tooltip>
      </Stack>
    </Stack>
  );
};

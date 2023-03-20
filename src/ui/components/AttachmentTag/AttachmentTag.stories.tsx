import * as React from "react";
import { AttachmentTag } from "@deskpro/deskpro-ui";
import { number, text, withKnobs } from "@storybook/addon-knobs";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Core/AttachmentTag",
  component: AttachmentTag,
  decorators: [withKnobs],
};

export const Tag = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <AttachmentTag
      target="_blank"
      download
      href="https://www.google.com"
      filename={text("Label Text", "Android.pdf")}
      fileSize={number("File Size (number bytes)", 40000, {
        min: 0,
        max: 100000000,
      })}
      withClose
      icon={faFile}
      onClose={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onClick={() => {}}
    />
  </div>
);

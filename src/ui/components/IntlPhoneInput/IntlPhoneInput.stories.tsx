import React from "react";
import { Stack } from "@deskpro/deskpro-ui";
import { IntlPhoneInput } from "./IntlPhoneInput";
import { useState } from "react";
import { faCheck, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Core/Link",
};

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <Stack>
      <IntlPhoneInput
        value={value}
        onChange={(e) => setValue(e)}
        fetchMoreText="Fetch More"
        autoscrollText="Jump to most recent"
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
      ></IntlPhoneInput>
    </Stack>
  );
};

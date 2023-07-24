import { PropertyRow as PropertyRowCmp } from "../PropertyRow";
import { Property } from "../Property";
import * as React from "react";
import { Pill, Stack } from "@deskpro/deskpro-ui";

export default {
  title: "Core/Property",
  component: PropertyRowCmp,
};

export const PropertyRow = () => {
  return (
    <Stack vertical style={{ maxWidth: "265px" }} gap={15}>
      <PropertyRowCmp>
        <Property label="key" text="value"/>
        <Property label="key" text="value"/>
      </PropertyRowCmp>
      <PropertyRowCmp>
        <Property label="key" text="value"/>
        <Property label="key" text="value"/>
        <Property label="key" text="value"/>
      </PropertyRowCmp>
      <PropertyRowCmp>
        <Property label="key" text="value"/>
        <Property label="key" text="value"/>
        <Property label="key" text="value"/>
        <Property label="key" text="value"/>
      </PropertyRowCmp>
      <PropertyRowCmp>
        <Property label="key" text="value"/>
        <Property label="key" text="value"/>
        <Property label="key" text="value"/>
        <Property label="key" text="value"/>
        <Property label="key" text="value"/>
      </PropertyRowCmp>
      <PropertyRowCmp>
        <Property label="key" text="value"/>
        <Property
          label="key"
          text={(
            <Pill label="Pill" textColor="#FFFFFF" backgroundColor="#000000"></Pill>
          )}
        />
      </PropertyRowCmp>
      <PropertyRowCmp>
        <Property
          label="key"
          text="JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn."
        />
        <Property
          label="key"
          text="JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn."
        />
      </PropertyRowCmp>
    </Stack>
  );
};

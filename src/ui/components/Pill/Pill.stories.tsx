import * as React from "react";
import { Pill } from "./Pill";
import { withKnobs } from "@storybook/addon-knobs";
import { lightTheme } from "../../theme";

export default {
  title: "Core/Pill",
  component: Pill,
  decorators: [withKnobs],
};

export const AllPillLabels = () => {
  const colors = lightTheme.colors;
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
        <Pill
          textColor={colors.white}
          backgroundColor={colors.turquoise100}
          subStatusBackgroudcolor={colors.turquoise10}
          subStatus={"SubStatus"}
          label={"Published"}
        />
        <Pill
          textColor={colors.white}
          backgroundColor={colors.red100}
          subStatusBackgroudcolor={colors.red10}
          subStatus={"SubStatus"}
          label={"Unpublished"}
        />
        <Pill
          textColor={colors.white}
          backgroundColor={colors.grey80}
          subStatus={"SubStatus"}
          label={"Draft"}
        />
        <Pill
          textColor={colors.white}
          backgroundColor={colors.grey20}
          subStatus={"SubStatus"}
          label={"Archived"}
        />
        <Pill
          textColor={colors.white}
          backgroundColor={colors.yellow100}
          subStatusBackgroudcolor={colors.yellow10}
          label={"Pending"}
          subStatus={"Substatus"}
        />
      </div>
    </div>
  );
};

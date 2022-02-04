import React, { FC, ReactNode } from "react";
import { useDeskproAppTheme } from "../../context";
import { Stack } from "../Layout";
import { H2 } from "../Typography";

export interface PropertyProps {
  children: JSX.Element | ReactNode;
  title?: string;
  width?: string;
}

export const Property: FC<PropertyProps> = ({ title, children, width }: PropertyProps) => {
  const { theme } = useDeskproAppTheme();

  return (
    <Stack vertical style={{ width: width ?? "auto" }}>
      {title && <H2 style={{ color: theme.colors.grey80, marginBottom: "2px" }}>{title}</H2>}
      <div style={{ fontSize: "12px" }}>{children}</div>
    </Stack>
  );
};

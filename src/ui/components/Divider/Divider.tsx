import React, { FC, CSSProperties } from "react";
import { useDeskproAppTheme } from "../../context";

export interface VerticalDividerProps {
  width?: number;
  style?: CSSProperties;
}

export const VerticalDivider: FC<VerticalDividerProps> = ({ width, style }: VerticalDividerProps) => {
  const { theme } = useDeskproAppTheme();

  return (
    <div style={{ margin: "0 8px", backgroundColor: theme.colors.grey20, width: `${width ?? 2}px`, ...(style ?? {}) }} />
  );
};

export interface HorizontalDividerProps {
  width?: number;
  style?: CSSProperties;
}

export const HorizontalDivider: FC<HorizontalDividerProps> = ({ width, style }: HorizontalDividerProps) => {
  const { theme } = useDeskproAppTheme();

  return (
    <div style={{ margin: "4px 0 0 0", backgroundColor: theme.colors.grey10, height: `${width ?? 1}px`, ...(style ?? {}) }} />
  );
};

import React, { FC, CSSProperties } from "react";
import styled from "styled-components";

export interface VerticalDividerProps {
  width?: number;
  style?: CSSProperties;
}

const StyledDivider = styled.div`
  background-color: ${({ theme }) => theme.colors.grey20};
`;

export const VerticalDivider: FC<VerticalDividerProps> = ({ width, style }: VerticalDividerProps) => (
  <StyledDivider style={{ margin: "0 8px", width: `${width ?? 2}px`, ...(style ?? {}) }} />
);

export interface HorizontalDividerProps {
  width?: number;
  style?: CSSProperties;
}

export const HorizontalDivider: FC<HorizontalDividerProps> = ({ width, style }: HorizontalDividerProps) => (
  <StyledDivider style={{ margin: "4px 0 0 0", height: `${width ?? 1}px`, ...(style ?? {}) }} />
);

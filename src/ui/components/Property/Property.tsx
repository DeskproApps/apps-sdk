import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { Stack } from "../Layout";
import { H2 } from "../Typography";

export interface PropertyProps {
  children: JSX.Element | ReactNode;
  title?: string;
  width?: string;
  style?: React.CSSProperties;
  childrenStyle?: React.CSSProperties;
}

const Title = styled(H2)`
    color: ${({ theme }) => theme.colors.grey80};
    margin-bottom: 2px;
`;

export const Property: FC<PropertyProps> = ({ title, children, style, childrenStyle }: PropertyProps) => {
  return (
    <Stack vertical style={ style }>
      {title && <Title>{title}</Title>}
      <div style={{ fontSize: "12px",...childrenStyle }}>{children}</div>
    </Stack>
  );
};

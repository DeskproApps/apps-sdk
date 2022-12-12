import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { Stack } from "../Layout";
import { H2 } from "../Typography";

export interface PropertyProps {
  children: JSX.Element | ReactNode;
  title?: string;
  width?: string;
}

const Title = styled(H2)`
    color: ${({ theme }) => theme.colors.grey80};
    margin-bottom: 2px;
`;

export const Property: FC<PropertyProps> = ({ title, children, width }: PropertyProps) => {
  return (
    <Stack vertical style={{ width: width ?? "100%" }}>
      {title && <Title>{title}</Title>}
      <div style={{ fontSize: "12px" }}>{children}</div>
    </Stack>
  );
};

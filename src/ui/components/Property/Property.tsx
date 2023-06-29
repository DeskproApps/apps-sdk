import React, { isValidElement } from "react";
import styled from "styled-components";
import { P5, TSpan } from "@deskpro/deskpro-ui";
import type { FC, ReactNode } from "react";

export interface PropertyProps {
  label?: string|number|JSX.Element|ReactNode,
  text?: string|number|JSX.Element|ReactNode,
  marginBottom?: number,
}

const Label = styled(TSpan)`
  color: ${({ theme }) => theme.colors.grey80};
`;

const Container = styled.div<PropertyProps>`
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
`;

const Property: FC<PropertyProps> = ({ text, label, marginBottom = 10 }: PropertyProps) => {
  let textBlock: ReactNode = (<P5>-</P5>);

  if ((typeof text === "string" && Boolean(text)) || typeof text === "number") {
    textBlock = (<P5>{text}</P5>);
  } else if (isValidElement(text)) {
    textBlock = text;
  }

  return (
    <Container marginBottom={marginBottom}>
      {label && <Label type="p8">{label}</Label>}
      {textBlock && textBlock}
    </Container>
  );
};

export { Property };

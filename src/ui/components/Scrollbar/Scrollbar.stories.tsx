import { Scrollbar, Stack } from "@deskpro/deskpro-ui";
import * as React from "react";
import styled from "styled-components";
import { H0 } from "../Typography";

export default {
  title: "Core/Scrollbar",
};

const Container = styled.div`
  width: 250px;
  border: 1px solid ${({ theme }) => theme.colors.grey20};
`;

const StyledH0 = styled(H0)`
  background: ${({ theme }) => theme.colors.grey20};
  margin-bottom: 6px;
`;

const content = [...Array(50)].map((x, i) => (
  <p key={i} className="odd">
    Some content
  </p>
));
export const Scrollbars = () => {
  return (
    <Stack gap={20}>
      <Container>
        <StyledH0>Default</StyledH0>
        <Scrollbar style={{ height: "300px" }}>{content}</Scrollbar>
      </Container>
      <Container>
        <StyledH0>Default no overflow</StyledH0>
        <Scrollbar style={{ height: "300px" }}>content</Scrollbar>
      </Container>
      <Container>
        <StyledH0>AutoHide disabled</StyledH0>
        <Scrollbar style={{ height: "300px" }} autoHide={false}>
          {content}
        </Scrollbar>
      </Container>
      <Container>
        <StyledH0>Prevent overflow on flexgrow parent</StyledH0>
        <Stack vertical style={{ height: "300px" }}>
          <H0>Header</H0>
          {/* If flexgrow is set on parent, then need to:
          - add width 100% and overflow hidden to parent
          - and height: 100% to scrollbar */}
          <div style={{ flexGrow: 1, width: "100%", overflow: "hidden" }}>
            <Scrollbar style={{ height: "100%" }} autoHide={false}>
              {content}
            </Scrollbar>
          </div>
        </Stack>
      </Container>
    </Stack>
  );
};

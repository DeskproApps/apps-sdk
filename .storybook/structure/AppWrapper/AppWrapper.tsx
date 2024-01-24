import styled from "styled-components";
import { AppSidebar } from "@deskpro/deskpro-ui";
import type { FC, PropsWithChildren } from "react";

const Wrapper = styled.div`
  width: 300px;
  height: 500px;
  border: 1px dashed #D3D6D7;
  border-radius: 3px;
`;

const Body = styled.div`
  margin: 8px;
`;

const AppWrapper: FC<PropsWithChildren> = ({ children }) => (
  <Wrapper>
    <AppSidebar.Container>
      <AppSidebar.Header title="Some App" />
      <AppSidebar.Body>
        <Body>{children}</Body>
      </AppSidebar.Body>
    </AppSidebar.Container>
  </Wrapper>
);

export { AppWrapper };

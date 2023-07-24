import React from "react";
import { Spinner, Stack } from "@deskpro/deskpro-ui";

const LoadingSpinner = () => (
  <Stack justify="center" align="center" style={{ height: "200px" }}>
    <Spinner size="large" />
  </Stack>
);

export { LoadingSpinner };

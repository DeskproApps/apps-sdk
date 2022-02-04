import React from "react";
import { Spinner } from "@deskpro/deskpro-ui";
import { Stack } from "../Layout";

const LoadingSpinner = () => (
  <Stack justify="center" align="center" style={{ height: "200px" }}>
    <Spinner size="large" />
  </Stack>
);

export {
  LoadingSpinner,
  Spinner,
};

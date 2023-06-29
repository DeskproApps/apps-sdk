import * as React from "react";
import { LoadingSpinner } from "./Spinner";
import { Stack } from "@deskpro/deskpro-ui";

export default {
  title: "Core/Spinner",
  component: LoadingSpinner,
};

export const Spinners = () => (
    <Stack justify="center">
      <LoadingSpinner />
    </Stack>
);

import * as React from "react";
import { LoadingSpinner, Spinner } from "./Spinner";
import { Stack } from "../Layout";

export default {
  title: "Core/Spinner",
  component: Spinner,
};

export const Spinners = () => {
  return (
    <>
      <Stack>
        <Spinner />
        <Spinner size="large" />
        <Spinner size="medium" />
        <Spinner size="small" />
      </Stack>
      <Stack>
        <LoadingSpinner />
      </Stack>
    </>
  );
};

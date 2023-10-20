import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Stack } from "@deskpro/deskpro-ui";
import { Link, LinkIcon } from "./Link";
import { Title } from "../Title";

export default {
  title: "Core/Link",
};

export const Default = () => (
  <Stack vertical gap={6}>
    {[
      <Link href="https://google.com" target="_blank">google.com</Link>,
      <Link href="https://google.com" target="_blank" color="red100">google.com</Link>,
      <LinkIcon href="https://deskpro.com"/>,
      <LinkIcon href="https://deskpro.com" icon={faPlus} color="green100"/>,
    ]}
  </Stack>
);

export const ExampleWithTitle = () => (
  <Title
    title={
      <>
        Sales Invoices (5)
        {" "}
        <LinkIcon icon={faPlus} href="https://deskpro.com/apps" />
      </>
    }
  />
);

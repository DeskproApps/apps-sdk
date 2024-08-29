import { DateInput as DateInputCmp } from "./DateInput";
import { action } from "@storybook/addon-actions";

export default {
  title: "Core/DateInput",
};

const defaultProps = {
  id: "date-input",
  placeholder: "DD/MM/YYYY",
  error: false,
  onChange: action("onChange"),
};

export const OnlyDate = () => <DateInputCmp {...defaultProps} />;

export const DateWithTime = () => (
  <DateInputCmp {...defaultProps} enableTime={true} />
);

export const WithError = () => <DateInputCmp {...defaultProps} error={true} />;

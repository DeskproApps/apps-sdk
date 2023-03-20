import { Checkbox, Stack } from "@deskpro/deskpro-ui";
import { withKnobs } from "@storybook/addon-knobs";
import * as React from "react";
import { Label } from "../Label";

export default {
  title: "Core/CheckBox",
  decorators: [withKnobs],
};

const approvers = [
  { label: "Option One", id: "one" },
  { label: "Option Two", id: "two" },
  { label: "Option Three", id: "three" },
];

export const CheckBoxGroupWithFormik = () => {
  return (
    <div>
      {([field, , helper], { id, error }) => (
        <Label htmlFor={id} label="Approvers" error={error}>
          <Stack vertical gap={6}>
            {approvers.map((approver) => {
              return (
                <Checkbox
                  label={approver.label}
                  checked={field.value.includes(approver.id)}
                  value={approver.id}
                  onChange={() => {
                    const checked = field.value.includes(approver.id);
                    const newValues = field.value.slice();
                    if (checked) {
                      const index = newValues.indexOf(approver.id);
                      newValues.splice(index, 1);
                    } else if (!checked) {
                      newValues.push(approver.id);
                    }
                    helper.setValue(newValues);
                  }}
                  id={approver.id}
                  size={12}
                />
              );
            })}
          </Stack>
        </Label>
      )}
    </div>
  );
};

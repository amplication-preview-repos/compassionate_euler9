import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CommissionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="coin" source="coin" />
        <NumberInput label="commission" source="commission" />
      </SimpleForm>
    </Edit>
  );
};

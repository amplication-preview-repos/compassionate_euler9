import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CommissionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="coin" source="coin" />
        <NumberInput label="commission" source="commission" />
      </SimpleForm>
    </Create>
  );
};

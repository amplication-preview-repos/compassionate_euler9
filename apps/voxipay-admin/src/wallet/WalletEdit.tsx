import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CryptocurrencyTitle } from "../cryptocurrency/CryptocurrencyTitle";
import { UserTitle } from "../user/UserTitle";

export const WalletEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <NumberInput label="balance" source="balance" />
        <ReferenceInput
          source="cryptocurrency.id"
          reference="Cryptocurrency"
          label="cryptocurrency"
        >
          <SelectInput optionText={CryptocurrencyTitle} />
        </ReferenceInput>
        <TextInput label="fromWallet" source="fromWallet" />
        <TextInput label="toWallet" source="toWallet" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

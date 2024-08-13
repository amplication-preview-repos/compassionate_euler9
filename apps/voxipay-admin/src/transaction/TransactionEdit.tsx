import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CryptocurrencyTitle } from "../cryptocurrency/CryptocurrencyTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="cryptocurrency.id"
          reference="Cryptocurrency"
          label="Cryptocurrency"
        >
          <SelectInput optionText={CryptocurrencyTitle} />
        </ReferenceInput>
        <TextInput label="fromWallet" source="fromWallet" />
        <TextInput label="fromWalletId" source="fromWalletId" />
        <TextInput label="fromWalletReference" source="fromWalletReference" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="toWallet" source="toWallet" />
        <TextInput label="toWalletId" source="toWalletId" />
        <TextInput label="toWalletReference" source="toWalletReference" />
        <SelectInput
          source="transactionType"
          label="transactionType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};

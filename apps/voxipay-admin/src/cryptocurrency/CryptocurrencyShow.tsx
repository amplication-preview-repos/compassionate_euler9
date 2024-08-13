import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CRYPTOCURRENCY_TITLE_FIELD } from "./CryptocurrencyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CryptocurrencyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="symbol" source="symbolField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Transaction"
          target="cryptocurrencyId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Cryptocurrency"
              source="cryptocurrency.id"
              reference="Cryptocurrency"
            >
              <TextField source={CRYPTOCURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="fromWallet" source="fromWallet" />
            <TextField label="fromWalletId" source="fromWalletId" />
            <TextField
              label="fromWalletReference"
              source="fromWalletReference"
            />
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <TextField label="timestamp" source="timestamp" />
            <TextField label="toWallet" source="toWallet" />
            <TextField label="toWalletId" source="toWalletId" />
            <TextField label="toWalletReference" source="toWalletReference" />
            <TextField label="transactionType" source="transactionType" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Wallet"
          target="cryptocurrencyId"
          label="Wallets"
        >
          <Datagrid rowClick="show">
            <TextField label="address" source="address" />
            <TextField label="balance" source="balance" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="cryptocurrency"
              source="cryptocurrency.id"
              reference="Cryptocurrency"
            >
              <TextField source={CRYPTOCURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="fromWallet" source="fromWallet" />
            <TextField label="ID" source="id" />
            <TextField label="toWallet" source="toWallet" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

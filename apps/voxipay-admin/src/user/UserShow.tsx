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

import { CRYPTOCURRENCY_TITLE_FIELD } from "../cryptocurrency/CryptocurrencyTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Wallet" target="userId" label="Wallets">
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

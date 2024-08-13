import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CRYPTOCURRENCY_TITLE_FIELD } from "../cryptocurrency/CryptocurrencyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const WalletShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

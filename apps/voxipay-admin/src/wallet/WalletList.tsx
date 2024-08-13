import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CRYPTOCURRENCY_TITLE_FIELD } from "../cryptocurrency/CryptocurrencyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const WalletList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Wallets"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};

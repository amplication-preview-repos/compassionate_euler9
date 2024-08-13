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

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="fromWalletReference" source="fromWalletReference" />
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
    </List>
  );
};

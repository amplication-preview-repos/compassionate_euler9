import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { WalletListRelationFilter } from "../wallet/WalletListRelationFilter";

export type CryptocurrencyWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  symbolField?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  wallets?: WalletListRelationFilter;
};

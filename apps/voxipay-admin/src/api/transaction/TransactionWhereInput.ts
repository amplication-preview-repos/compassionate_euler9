import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CryptocurrencyWhereUniqueInput } from "../cryptocurrency/CryptocurrencyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  cryptocurrency?: CryptocurrencyWhereUniqueInput;
  fromWallet?: StringNullableFilter;
  fromWalletId?: StringNullableFilter;
  fromWalletReference?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  timestamp?: DateTimeNullableFilter;
  toWallet?: StringNullableFilter;
  toWalletId?: StringNullableFilter;
  toWalletReference?: StringNullableFilter;
  transactionType?: "Option1";
  typeField?: "Option1";
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CryptocurrencyWhereUniqueInput } from "../cryptocurrency/CryptocurrencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletWhereInput = {
  address?: StringNullableFilter;
  balance?: FloatNullableFilter;
  cryptocurrency?: CryptocurrencyWhereUniqueInput;
  fromWallet?: StringNullableFilter;
  id?: StringFilter;
  toWallet?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};

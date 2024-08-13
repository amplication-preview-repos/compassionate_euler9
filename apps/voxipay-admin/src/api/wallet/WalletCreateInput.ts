import { CryptocurrencyWhereUniqueInput } from "../cryptocurrency/CryptocurrencyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletCreateInput = {
  address?: string | null;
  balance?: number | null;
  cryptocurrency?: CryptocurrencyWhereUniqueInput | null;
  fromWallet?: string | null;
  toWallet?: string | null;
  user?: UserWhereUniqueInput | null;
};

import { CryptocurrencyWhereUniqueInput } from "../cryptocurrency/CryptocurrencyWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  cryptocurrency?: CryptocurrencyWhereUniqueInput | null;
  fromWallet?: string | null;
  fromWalletId?: string | null;
  fromWalletReference?: string | null;
  status?: "Option1" | null;
  timestamp?: Date | null;
  toWallet?: string | null;
  toWalletId?: string | null;
  toWalletReference?: string | null;
  transactionType?: "Option1" | null;
  typeField?: "Option1" | null;
};

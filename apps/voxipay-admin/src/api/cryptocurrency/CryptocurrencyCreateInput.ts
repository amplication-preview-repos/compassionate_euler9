import { TransactionCreateNestedManyWithoutCryptocurrenciesInput } from "./TransactionCreateNestedManyWithoutCryptocurrenciesInput";
import { WalletCreateNestedManyWithoutCryptocurrenciesInput } from "./WalletCreateNestedManyWithoutCryptocurrenciesInput";

export type CryptocurrencyCreateInput = {
  description?: string | null;
  name?: string | null;
  symbolField?: string | null;
  transactions?: TransactionCreateNestedManyWithoutCryptocurrenciesInput;
  wallets?: WalletCreateNestedManyWithoutCryptocurrenciesInput;
};

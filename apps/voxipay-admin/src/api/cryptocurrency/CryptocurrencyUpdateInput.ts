import { TransactionUpdateManyWithoutCryptocurrenciesInput } from "./TransactionUpdateManyWithoutCryptocurrenciesInput";
import { WalletUpdateManyWithoutCryptocurrenciesInput } from "./WalletUpdateManyWithoutCryptocurrenciesInput";

export type CryptocurrencyUpdateInput = {
  description?: string | null;
  name?: string | null;
  symbolField?: string | null;
  transactions?: TransactionUpdateManyWithoutCryptocurrenciesInput;
  wallets?: WalletUpdateManyWithoutCryptocurrenciesInput;
};

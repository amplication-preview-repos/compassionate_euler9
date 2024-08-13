import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  cryptocurrencyId?: SortOrder;
  fromWallet?: SortOrder;
  fromWalletId?: SortOrder;
  fromWalletReference?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  timestamp?: SortOrder;
  toWallet?: SortOrder;
  toWalletId?: SortOrder;
  toWalletReference?: SortOrder;
  transactionType?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};

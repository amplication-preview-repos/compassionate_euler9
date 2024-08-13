import { SortOrder } from "../../util/SortOrder";

export type WalletOrderByInput = {
  address?: SortOrder;
  balance?: SortOrder;
  createdAt?: SortOrder;
  cryptocurrencyId?: SortOrder;
  fromWallet?: SortOrder;
  id?: SortOrder;
  toWallet?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

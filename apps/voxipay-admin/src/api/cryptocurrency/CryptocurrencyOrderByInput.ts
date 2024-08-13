import { SortOrder } from "../../util/SortOrder";

export type CryptocurrencyOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  symbolField?: SortOrder;
  updatedAt?: SortOrder;
};

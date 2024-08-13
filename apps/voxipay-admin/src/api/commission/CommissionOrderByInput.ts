import { SortOrder } from "../../util/SortOrder";

export type CommissionOrderByInput = {
  coin?: SortOrder;
  commission?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

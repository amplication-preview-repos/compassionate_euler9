import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommissionWhereInput = {
  coin?: StringNullableFilter;
  commission?: FloatNullableFilter;
  id?: StringFilter;
};

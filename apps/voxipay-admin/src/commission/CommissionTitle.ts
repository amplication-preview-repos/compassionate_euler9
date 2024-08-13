import { Commission as TCommission } from "../api/commission/Commission";

export const COMMISSION_TITLE_FIELD = "coin";

export const CommissionTitle = (record: TCommission): string => {
  return record.coin?.toString() || String(record.id);
};

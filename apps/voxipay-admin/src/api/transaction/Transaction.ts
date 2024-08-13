import { Cryptocurrency } from "../cryptocurrency/Cryptocurrency";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  cryptocurrency?: Cryptocurrency | null;
  fromWallet: string | null;
  fromWalletId: string | null;
  fromWalletReference: string | null;
  id: string;
  status?: "Option1" | null;
  timestamp: Date | null;
  toWallet: string | null;
  toWalletId: string | null;
  toWalletReference: string | null;
  transactionType?: "Option1" | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};

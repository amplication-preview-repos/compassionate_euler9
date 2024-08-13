import { Transaction } from "../transaction/Transaction";
import { Wallet } from "../wallet/Wallet";

export type Cryptocurrency = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  symbolField: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  wallets?: Array<Wallet>;
};

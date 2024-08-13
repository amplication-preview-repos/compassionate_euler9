import { Cryptocurrency } from "../cryptocurrency/Cryptocurrency";
import { User } from "../user/User";

export type Wallet = {
  address: string | null;
  balance: number | null;
  createdAt: Date;
  cryptocurrency?: Cryptocurrency | null;
  fromWallet: string | null;
  id: string;
  toWallet: string | null;
  updatedAt: Date;
  user?: User | null;
};

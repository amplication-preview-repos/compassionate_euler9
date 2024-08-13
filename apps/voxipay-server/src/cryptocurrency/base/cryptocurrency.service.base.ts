/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Cryptocurrency as PrismaCryptocurrency,
  Transaction as PrismaTransaction,
  Wallet as PrismaWallet,
} from "@prisma/client";

export class CryptocurrencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CryptocurrencyCountArgs, "select">
  ): Promise<number> {
    return this.prisma.cryptocurrency.count(args);
  }

  async cryptocurrencies(
    args: Prisma.CryptocurrencyFindManyArgs
  ): Promise<PrismaCryptocurrency[]> {
    return this.prisma.cryptocurrency.findMany(args);
  }
  async cryptocurrency(
    args: Prisma.CryptocurrencyFindUniqueArgs
  ): Promise<PrismaCryptocurrency | null> {
    return this.prisma.cryptocurrency.findUnique(args);
  }
  async createCryptocurrency(
    args: Prisma.CryptocurrencyCreateArgs
  ): Promise<PrismaCryptocurrency> {
    return this.prisma.cryptocurrency.create(args);
  }
  async updateCryptocurrency(
    args: Prisma.CryptocurrencyUpdateArgs
  ): Promise<PrismaCryptocurrency> {
    return this.prisma.cryptocurrency.update(args);
  }
  async deleteCryptocurrency(
    args: Prisma.CryptocurrencyDeleteArgs
  ): Promise<PrismaCryptocurrency> {
    return this.prisma.cryptocurrency.delete(args);
  }

  async findTransactions(
    parentId: string,
    args: Prisma.TransactionFindManyArgs
  ): Promise<PrismaTransaction[]> {
    return this.prisma.cryptocurrency
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .transactions(args);
  }

  async findWallets(
    parentId: string,
    args: Prisma.WalletFindManyArgs
  ): Promise<PrismaWallet[]> {
    return this.prisma.cryptocurrency
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .wallets(args);
  }
}

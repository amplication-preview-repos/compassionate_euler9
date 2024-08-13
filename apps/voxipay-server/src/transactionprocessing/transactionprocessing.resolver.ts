import * as graphql from "@nestjs/graphql";
import { CommissionInput } from "../transactionProcessing/CommissionInput";
import { CommissionResponse } from "../transactionProcessing/CommissionResponse";
import { TransactionPostbackInput } from "../transactionProcessing/TransactionPostbackInput";
import { TransactionPostbackResponse } from "../transactionProcessing/TransactionPostbackResponse";
import { TransactionProcessingService } from "./transactionprocessing.service";

export class TransactionProcessingResolver {
  constructor(protected readonly service: TransactionProcessingService) {}

  @graphql.Query(() => [CommissionResponse])
  async GetCommissions(
    @graphql.Args()
    args: CommissionInput
  ): Promise<CommissionResponse[]> {
    return this.service.GetCommissions(args);
  }

  @graphql.Mutation(() => TransactionPostbackResponse)
  async SendTransactionPostback(
    @graphql.Args()
    args: TransactionPostbackInput
  ): Promise<TransactionPostbackResponse> {
    return this.service.SendTransactionPostback(args);
  }
}

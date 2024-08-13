import { Injectable } from "@nestjs/common";
import { CommissionInput } from "../transactionProcessing/CommissionInput";
import { CommissionResponse } from "../transactionProcessing/CommissionResponse";
import { TransactionPostbackInput } from "../transactionProcessing/TransactionPostbackInput";
import { TransactionPostbackResponse } from "../transactionProcessing/TransactionPostbackResponse";

@Injectable()
export class TransactionProcessingService {
  constructor() {}
  async GetCommissions(args: CommissionInput): Promise<CommissionResponse[]> {
    throw new Error("Not implemented");
  }
  async SendTransactionPostback(args: TransactionPostbackInput): Promise<TransactionPostbackResponse> {
    throw new Error("Not implemented");
  }
}

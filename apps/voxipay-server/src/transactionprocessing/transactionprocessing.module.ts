import { Module } from "@nestjs/common";
import { TransactionProcessingService } from "./transactionprocessing.service";
import { TransactionProcessingController } from "./transactionprocessing.controller";
import { TransactionProcessingResolver } from "./transactionprocessing.resolver";

@Module({
  controllers: [TransactionProcessingController],
  providers: [TransactionProcessingService, TransactionProcessingResolver],
  exports: [TransactionProcessingService],
})
export class TransactionProcessingModule {}

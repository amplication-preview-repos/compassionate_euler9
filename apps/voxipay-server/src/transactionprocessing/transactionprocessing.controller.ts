import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TransactionProcessingService } from "./transactionprocessing.service";
import { TransactionPostbackInput } from "../transactionProcessing/TransactionPostbackInput";
import { CommissionResponse } from "../transactionProcessing/CommissionResponse";
import { TransactionPostbackResponse } from "../transactionProcessing/TransactionPostbackResponse";

@swagger.ApiTags("transactionProcessings")
@common.Controller("transactionProcessings")
export class TransactionProcessingController {
  constructor(protected readonly service: TransactionProcessingService) {}

  @common.Get("/commissions")
  @swagger.ApiOkResponse({
    type: CommissionResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetCommissions(
    @common.Body()
    body: TransactionPostbackInput
  ): Promise<CommissionResponse[]> {
        return this.service.GetCommissions(body);
      }

  @common.Post("/send-postback")
  @swagger.ApiOkResponse({
    type: TransactionPostbackResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendTransactionPostback(
    @common.Body()
    body: TransactionPostbackInput
  ): Promise<TransactionPostbackResponse> {
        return this.service.SendTransactionPostback(body);
      }
}

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetOrderV2TestkitOrdersOrderIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}

export class GetOrderV2TestkitOrdersOrderIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrderV2TestkitOrdersOrderIdGetPathParams;
}

export class GetOrderV2TestkitOrdersOrderIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrder?: shared.VitalCoreSchemasDbSchemasTestkitsOrderClientFacingOrder;
}
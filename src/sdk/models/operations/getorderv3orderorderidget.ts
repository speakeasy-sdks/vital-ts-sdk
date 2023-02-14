import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetOrderV3OrderOrderIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}

export class GetOrderV3OrderOrderIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrderV3OrderOrderIdGetPathParams;
}

export class GetOrderV3OrderOrderIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder?: shared.VitalCoreSchemasDbSchemasLabTestOrderv2ClientFacingOrder;
}
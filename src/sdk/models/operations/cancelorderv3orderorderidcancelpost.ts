import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class CancelOrderV3OrderOrderIdCancelPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}

export class CancelOrderV3OrderOrderIdCancelPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelOrderV3OrderOrderIdCancelPostPathParams;
}

export class CancelOrderV3OrderOrderIdCancelPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  postOrderResponse?: shared.PostOrderResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
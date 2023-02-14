import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class TestOrderProcessV3OrderOrderIdTestPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}

export class TestOrderProcessV3OrderOrderIdTestPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestOrderProcessV3OrderOrderIdTestPostPathParams;
}

export class TestOrderProcessV3OrderOrderIdTestPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  testOrderProcessV3OrderOrderIdTestPost200ApplicationJSONAny?: any;
}
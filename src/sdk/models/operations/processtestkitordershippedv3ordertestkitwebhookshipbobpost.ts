import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ProcessTestkitOrderShippedV3OrderTestkitWebhookShipbobPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ShipbobOrderShipped;
}

export class ProcessTestkitOrderShippedV3OrderTestkitWebhookShipbobPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseProcessTestkitOrderShippedV3OrderTestkitWebhookShipbobPost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
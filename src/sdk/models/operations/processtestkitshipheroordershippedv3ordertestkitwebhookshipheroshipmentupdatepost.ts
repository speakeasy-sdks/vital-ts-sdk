import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ProcessTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ShipmentWebhookUpdate;
}

export class ProcessTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseProcessTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
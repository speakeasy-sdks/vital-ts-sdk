import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ReviewWheelV2PhysicianReviewWheelPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WebhookEvent;
}

export class ReviewWheelV2PhysicianReviewWheelPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reviewWheelV2PhysicianReviewWheelPost200ApplicationJSONAny?: any;
}
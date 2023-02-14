import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ReceiveGarminWorkoutStreamUpdatesV2DataWebhookGarminWorkoutsStreamPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}

export class ReceiveGarminWorkoutStreamUpdatesV2DataWebhookGarminWorkoutsStreamPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseReceiveGarminWorkoutStreamUpdatesV2DataWebhookGarminWorkoutsStreamPost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
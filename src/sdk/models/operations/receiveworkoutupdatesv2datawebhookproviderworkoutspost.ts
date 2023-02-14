import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ReceiveWorkoutUpdatesV2DataWebhookProviderWorkoutsPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: shared.ProvidersEnum;
}

export class ReceiveWorkoutUpdatesV2DataWebhookProviderWorkoutsPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReceiveWorkoutUpdatesV2DataWebhookProviderWorkoutsPostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}

export class ReceiveWorkoutUpdatesV2DataWebhookProviderWorkoutsPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseReceiveWorkoutUpdatesV2DataWebhookProviderWorkoutsPost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
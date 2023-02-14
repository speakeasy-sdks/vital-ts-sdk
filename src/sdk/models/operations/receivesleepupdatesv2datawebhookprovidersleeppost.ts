import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ReceiveSleepUpdatesV2DataWebhookProviderSleepPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: shared.ProvidersEnum;
}

export class ReceiveSleepUpdatesV2DataWebhookProviderSleepPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReceiveSleepUpdatesV2DataWebhookProviderSleepPostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}

export class ReceiveSleepUpdatesV2DataWebhookProviderSleepPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseReceiveSleepUpdatesV2DataWebhookProviderSleepPost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
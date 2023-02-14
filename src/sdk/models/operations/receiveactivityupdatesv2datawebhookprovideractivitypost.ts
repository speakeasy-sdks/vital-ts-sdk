import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ReceiveActivityUpdatesV2DataWebhookProviderActivityPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: shared.ProvidersEnum;
}

export class ReceiveActivityUpdatesV2DataWebhookProviderActivityPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReceiveActivityUpdatesV2DataWebhookProviderActivityPostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}

export class ReceiveActivityUpdatesV2DataWebhookProviderActivityPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseReceiveActivityUpdatesV2DataWebhookProviderActivityPost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
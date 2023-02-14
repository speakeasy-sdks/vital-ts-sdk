import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ReceiveBodyUpdatesV2DataWebhookProviderBodyPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: shared.ProvidersEnum;
}

export class ReceiveBodyUpdatesV2DataWebhookProviderBodyPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReceiveBodyUpdatesV2DataWebhookProviderBodyPostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}

export class ReceiveBodyUpdatesV2DataWebhookProviderBodyPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseReceiveBodyUpdatesV2DataWebhookProviderBodyPost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
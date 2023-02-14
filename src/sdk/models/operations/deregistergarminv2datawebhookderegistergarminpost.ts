import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class DeregisterGarminV2DataWebhookDeregisterGarminPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}

export class DeregisterGarminV2DataWebhookDeregisterGarminPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseDeregisterGarminV2DataWebhookDeregisterGarminPost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
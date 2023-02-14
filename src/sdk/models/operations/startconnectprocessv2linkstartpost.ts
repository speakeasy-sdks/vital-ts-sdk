import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class StartConnectProcessV2LinkStartPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BeginLinkTokenRequest;
}

export class StartConnectProcessV2LinkStartPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseStartConnectProcessV2LinkStartPost?: Record<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
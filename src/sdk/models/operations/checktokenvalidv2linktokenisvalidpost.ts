import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class CheckTokenValidV2LinkTokenIsValidPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LinkTokenBase;
}

export class CheckTokenValidV2LinkTokenIsValidPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseCheckTokenValidV2LinkTokenIsvalidPost?: Record<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
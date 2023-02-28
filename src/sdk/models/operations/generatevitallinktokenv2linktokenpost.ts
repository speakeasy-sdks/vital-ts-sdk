import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GenerateVitalLinkTokenV2LinkTokenPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LinkTokenExchange;
}

export class GenerateVitalLinkTokenV2LinkTokenPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  linkTokenExchangeResponse?: shared.LinkTokenExchangeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
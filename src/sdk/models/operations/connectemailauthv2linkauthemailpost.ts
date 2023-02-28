import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ConnectEmailAuthV2LinkAuthEmailPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EmailAuthLink;
}

export class ConnectEmailAuthV2LinkAuthEmailPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectionStatus?: shared.ConnectionStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
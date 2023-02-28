import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ConnectPasswordAuthV2LinkAuthPostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-vital-link-client-region" })
  xVitalLinkClientRegion?: string;
}

export class ConnectPasswordAuthV2LinkAuthPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ConnectPasswordAuthV2LinkAuthPostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PasswordAuthLink;
}

export class ConnectPasswordAuthV2LinkAuthPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectionStatus?: shared.ConnectionStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
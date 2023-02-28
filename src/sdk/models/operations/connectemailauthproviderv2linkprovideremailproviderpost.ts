import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ConnectEmailAuthProviderV2LinkProviderEmailProviderPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: Record<string, any>;
}

export class ConnectEmailAuthProviderV2LinkProviderEmailProviderPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConnectEmailAuthProviderV2LinkProviderEmailProviderPostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EmailProviderAuthLink;
}

export class ConnectEmailAuthProviderV2LinkProviderEmailProviderPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectionStatus?: shared.ConnectionStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
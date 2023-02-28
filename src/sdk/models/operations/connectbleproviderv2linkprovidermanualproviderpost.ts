import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ConnectBleProviderV2LinkProviderManualProviderPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: Record<string, any>;
}

export class ConnectBleProviderV2LinkProviderManualProviderPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConnectBleProviderV2LinkProviderManualProviderPostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManualConnectionData;
}

export class ConnectBleProviderV2LinkProviderManualProviderPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseConnectBleProviderV2LinkProviderManualProviderPost?: Record<string, boolean>;

  @SpeakeasyMetadata()
  statusCode: number;
}
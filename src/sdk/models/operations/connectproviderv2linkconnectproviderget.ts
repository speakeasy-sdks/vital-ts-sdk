import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ConnectProviderV2LinkConnectProviderGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}

export class ConnectProviderV2LinkConnectProviderGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConnectProviderV2LinkConnectProviderGetPathParams;
}

export class ConnectProviderV2LinkConnectProviderGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseConnectProviderV2LinkConnectProviderGet?: Record<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
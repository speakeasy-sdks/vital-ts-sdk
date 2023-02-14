import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ConnectIndividualProviderV2LinkProviderPasswordProviderPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: Record<string, any>;
}

export class ConnectIndividualProviderV2LinkProviderPasswordProviderPostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-vital-link-client-region" })
  xVitalLinkClientRegion?: string;
}

export class ConnectIndividualProviderV2LinkProviderPasswordProviderPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConnectIndividualProviderV2LinkProviderPasswordProviderPostPathParams;

  @SpeakeasyMetadata()
  headers: ConnectIndividualProviderV2LinkProviderPasswordProviderPostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.IndividualProviderData;
}

export class ConnectIndividualProviderV2LinkProviderPasswordProviderPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  providerLinkResponse?: shared.ProviderLinkResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
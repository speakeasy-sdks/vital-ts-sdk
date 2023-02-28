import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetOauthProviderV2LinkProviderOauthOauthProviderGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=oauth_provider" })
  oauthProvider: shared.OAuthProvidersEnum;
}

export class GetOauthProviderV2LinkProviderOauthOauthProviderGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOauthProviderV2LinkProviderOauthOauthProviderGetPathParams;
}

export class GetOauthProviderV2LinkProviderOauthOauthProviderGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  source?: shared.Source;

  @SpeakeasyMetadata()
  statusCode: number;
}
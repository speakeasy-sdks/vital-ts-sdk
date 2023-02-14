import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class RotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key_id" })
  apiKeyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: string;
}

export class RotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatchPathParams;
}

export class RotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKeyInDB?: shared.ApiKeyInDB;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
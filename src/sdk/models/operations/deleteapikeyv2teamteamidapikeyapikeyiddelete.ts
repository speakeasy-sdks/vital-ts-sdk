import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class DeleteApiKeyV2TeamTeamIdApikeyApiKeyIdDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key_id" })
  apiKeyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: string;
}

export class DeleteApiKeyV2TeamTeamIdApikeyApiKeyIdDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteApiKeyV2TeamTeamIdApikeyApiKeyIdDeletePathParams;
}

export class DeleteApiKeyV2TeamTeamIdApikeyApiKeyIdDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKeyInDB?: shared.ApiKeyInDB;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
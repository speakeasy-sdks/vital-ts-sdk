import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class UpdateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key_id" })
  apiKeyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: string;
}

export class UpdateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateApiKeyBody;
}

export class UpdateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKeyInDB?: shared.ApiKeyInDB;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
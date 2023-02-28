import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class CreateApiKeyV2TeamTeamIdApikeyPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: string;
}

export class CreateApiKeyV2TeamTeamIdApikeyPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateApiKeyV2TeamTeamIdApikeyPostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateApiKeyBody;
}

export class CreateApiKeyV2TeamTeamIdApikeyPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKeyInDB?: shared.ApiKeyInDB;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
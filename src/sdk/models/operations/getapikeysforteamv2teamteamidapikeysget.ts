import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetApiKeysForTeamV2TeamTeamIdApikeysGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: string;
}

export class GetApiKeysForTeamV2TeamTeamIdApikeysGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiKeysForTeamV2TeamTeamIdApikeysGetPathParams;
}

export class GetApiKeysForTeamV2TeamTeamIdApikeysGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ApiKeyInDB })
  apiKeyInDBS?: shared.ApiKeyInDB[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
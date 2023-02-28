import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class UpdateTeamV2TeamTeamIdPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: string;
}

export class UpdateTeamV2TeamTeamIdPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTeamV2TeamTeamIdPatchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TeamUpdate;
}

export class UpdateTeamV2TeamTeamIdPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamInDB?: shared.TeamInDB;
}
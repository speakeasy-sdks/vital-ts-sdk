import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class DeleteTeamV2TeamTeamIdDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: string;
}

export class DeleteTeamV2TeamTeamIdDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTeamV2TeamTeamIdDeletePathParams;
}

export class DeleteTeamV2TeamTeamIdDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamInDB?: shared.TeamInDB;
}
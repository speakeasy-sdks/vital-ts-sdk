import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetTeamV2TeamTeamIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: string;
}

export class GetTeamV2TeamTeamIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamV2TeamTeamIdGetPathParams;
}

export class GetTeamV2TeamTeamIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientFacingTeam?: shared.ClientFacingTeam;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
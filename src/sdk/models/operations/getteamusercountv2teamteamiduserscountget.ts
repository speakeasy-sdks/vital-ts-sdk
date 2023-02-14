import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetTeamUserCountV2TeamTeamIdUsersCountGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: string;
}

export class GetTeamUserCountV2TeamTeamIdUsersCountGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamUserCountV2TeamTeamIdUsersCountGetPathParams;
}

export class GetTeamUserCountV2TeamTeamIdUsersCountGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseGetTeamUserCountV2TeamTeamIdUsersCountGet?: Record<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
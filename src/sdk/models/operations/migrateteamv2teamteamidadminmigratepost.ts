import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class MigrateTeamV2TeamTeamIdAdminMigratePostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: string;
}

export class MigrateTeamV2TeamTeamIdAdminMigratePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MigrateTeamV2TeamTeamIdAdminMigratePostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.MigratePayload;
}

export class MigrateTeamV2TeamTeamIdAdminMigratePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  migrateTeamV2TeamTeamIdAdminMigratePost200ApplicationJSONAny?: any;
}
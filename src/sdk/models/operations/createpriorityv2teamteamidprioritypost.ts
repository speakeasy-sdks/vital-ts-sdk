import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class CreatePriorityV2TeamTeamIdPriorityPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: string;
}

export class CreatePriorityV2TeamTeamIdPriorityPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreatePriorityV2TeamTeamIdPriorityPostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PriorityCreate;
}

export class CreatePriorityV2TeamTeamIdPriorityPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  priority?: shared.Priority;

  @SpeakeasyMetadata()
  statusCode: number;
}
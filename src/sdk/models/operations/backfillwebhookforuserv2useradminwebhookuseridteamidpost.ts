import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class BackfillWebhookForUserV2UserAdminWebhookUserIdTeamIdPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class BackfillWebhookForUserV2UserAdminWebhookUserIdTeamIdPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class BackfillWebhookForUserV2UserAdminWebhookUserIdTeamIdPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BackfillWebhookForUserV2UserAdminWebhookUserIdTeamIdPostPathParams;

  @SpeakeasyMetadata()
  queryParams: BackfillWebhookForUserV2UserAdminWebhookUserIdTeamIdPostQueryParams;
}

export class BackfillWebhookForUserV2UserAdminWebhookUserIdTeamIdPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseBackfillWebhookForUserV2UserAdminWebhookUserIdTeamIdPost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
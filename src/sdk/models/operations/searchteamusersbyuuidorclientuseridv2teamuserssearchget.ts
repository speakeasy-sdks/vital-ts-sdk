import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class SearchTeamUsersByUuidOrClientUserIdV2TeamUsersSearchGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query_id" })
  queryId?: string;
}

export class SearchTeamUsersByUuidOrClientUserIdV2TeamUsersSearchGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchTeamUsersByUuidOrClientUserIdV2TeamUsersSearchGetQueryParams;
}

export class SearchTeamUsersByUuidOrClientUserIdV2TeamUsersSearchGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClientFacingUser })
  clientFacingUsers?: shared.ClientFacingUser[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
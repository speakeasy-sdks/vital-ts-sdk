import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetTeamsUsersV2UserGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class GetTeamsUsersV2UserGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTeamsUsersV2UserGetQueryParams;
}

export class GetTeamsUsersV2UserGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  paginatedUsersResponse?: shared.PaginatedUsersResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
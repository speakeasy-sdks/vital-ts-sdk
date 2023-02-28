import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetUserProfileRawV2SummaryProfileUserIdRawGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetUserProfileRawV2SummaryProfileUserIdRawGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;
}

export class GetUserProfileRawV2SummaryProfileUserIdRawGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserProfileRawV2SummaryProfileUserIdRawGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserProfileRawV2SummaryProfileUserIdRawGetQueryParams;
}

export class GetUserProfileRawV2SummaryProfileUserIdRawGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  rawProfile?: shared.RawProfile;

  @SpeakeasyMetadata()
  statusCode: number;
}
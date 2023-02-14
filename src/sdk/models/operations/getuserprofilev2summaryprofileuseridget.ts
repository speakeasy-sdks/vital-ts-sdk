import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetUserProfileV2SummaryProfileUserIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetUserProfileV2SummaryProfileUserIdGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;
}

export class GetUserProfileV2SummaryProfileUserIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserProfileV2SummaryProfileUserIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserProfileV2SummaryProfileUserIdGetQueryParams;
}

export class GetUserProfileV2SummaryProfileUserIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientFacingProfile?: shared.ClientFacingProfile;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
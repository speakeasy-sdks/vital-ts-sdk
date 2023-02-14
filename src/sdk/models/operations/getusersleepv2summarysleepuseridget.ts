import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetUserSleepV2SummarySleepUserIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetUserSleepV2SummarySleepUserIdGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class GetUserSleepV2SummarySleepUserIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserSleepV2SummarySleepUserIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserSleepV2SummarySleepUserIdGetQueryParams;
}

export class GetUserSleepV2SummarySleepUserIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientSleepResponse?: shared.ClientSleepResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
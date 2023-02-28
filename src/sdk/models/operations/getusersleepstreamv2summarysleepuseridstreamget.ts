import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetUserSleepStreamV2SummarySleepUserIdStreamGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetUserSleepStreamV2SummarySleepUserIdStreamGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class GetUserSleepStreamV2SummarySleepUserIdStreamGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserSleepStreamV2SummarySleepUserIdStreamGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserSleepStreamV2SummarySleepUserIdStreamGetQueryParams;
}

export class GetUserSleepStreamV2SummarySleepUserIdStreamGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientSleepResponse?: shared.ClientSleepResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
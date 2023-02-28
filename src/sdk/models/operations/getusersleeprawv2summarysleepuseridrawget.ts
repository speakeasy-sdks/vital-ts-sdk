import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetUserSleepRawV2SummarySleepUserIdRawGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetUserSleepRawV2SummarySleepUserIdRawGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class GetUserSleepRawV2SummarySleepUserIdRawGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserSleepRawV2SummarySleepUserIdRawGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserSleepRawV2SummarySleepUserIdRawGetQueryParams;
}

export class GetUserSleepRawV2SummarySleepUserIdRawGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  rawSleep?: shared.RawSleep;

  @SpeakeasyMetadata()
  statusCode: number;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetUserWorkoutsV2SummaryWorkoutsUserIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetUserWorkoutsV2SummaryWorkoutsUserIdGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class GetUserWorkoutsV2SummaryWorkoutsUserIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserWorkoutsV2SummaryWorkoutsUserIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserWorkoutsV2SummaryWorkoutsUserIdGetQueryParams;
}

export class GetUserWorkoutsV2SummaryWorkoutsUserIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientWorkoutResponse?: shared.ClientWorkoutResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
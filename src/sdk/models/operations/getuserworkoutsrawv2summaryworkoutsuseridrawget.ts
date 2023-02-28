import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetUserWorkoutsRawV2SummaryWorkoutsUserIdRawGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetUserWorkoutsRawV2SummaryWorkoutsUserIdRawGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class GetUserWorkoutsRawV2SummaryWorkoutsUserIdRawGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserWorkoutsRawV2SummaryWorkoutsUserIdRawGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserWorkoutsRawV2SummaryWorkoutsUserIdRawGetQueryParams;
}

export class GetUserWorkoutsRawV2SummaryWorkoutsUserIdRawGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  rawWorkout?: shared.RawWorkout;

  @SpeakeasyMetadata()
  statusCode: number;
}
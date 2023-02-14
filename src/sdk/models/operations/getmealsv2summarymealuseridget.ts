import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetMealsV2SummaryMealUserIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetMealsV2SummaryMealUserIdGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class GetMealsV2SummaryMealUserIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMealsV2SummaryMealUserIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMealsV2SummaryMealUserIdGetQueryParams;
}

export class GetMealsV2SummaryMealUserIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientFacingMealResponse?: shared.ClientFacingMealResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
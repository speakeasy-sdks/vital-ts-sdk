import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetUserActivityV2SummaryActivityUserIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetUserActivityV2SummaryActivityUserIdGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class GetUserActivityV2SummaryActivityUserIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserActivityV2SummaryActivityUserIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserActivityV2SummaryActivityUserIdGetQueryParams;
}

export class GetUserActivityV2SummaryActivityUserIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientActivityResponse?: shared.ClientActivityResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
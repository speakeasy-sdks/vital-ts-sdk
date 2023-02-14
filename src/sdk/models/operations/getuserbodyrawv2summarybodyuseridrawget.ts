import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetUserBodyRawV2SummaryBodyUserIdRawGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetUserBodyRawV2SummaryBodyUserIdRawGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class GetUserBodyRawV2SummaryBodyUserIdRawGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserBodyRawV2SummaryBodyUserIdRawGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserBodyRawV2SummaryBodyUserIdRawGetQueryParams;
}

export class GetUserBodyRawV2SummaryBodyUserIdRawGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  rawBody?: shared.RawBody;

  @SpeakeasyMetadata()
  statusCode: number;
}
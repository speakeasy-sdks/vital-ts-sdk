import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetTimeseriesResourceDataV2TimeseriesUserIdIggGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdIggGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource" })
  resource: shared.TimeseriesResourceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdIggGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTimeseriesResourceDataV2TimeseriesUserIdIggGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTimeseriesResourceDataV2TimeseriesUserIdIggGetQueryParams;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdIggGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClientFacingIggTimeseries })
  clientFacingIggTimeseries?: shared.ClientFacingIggTimeseries[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
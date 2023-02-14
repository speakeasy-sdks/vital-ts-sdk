import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource" })
  resource: shared.TimeseriesResourceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetQueryParams;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClientFacingRespiratoryRateTimeseries })
  clientFacingRespiratoryRateTimeseries?: shared.ClientFacingRespiratoryRateTimeseries[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
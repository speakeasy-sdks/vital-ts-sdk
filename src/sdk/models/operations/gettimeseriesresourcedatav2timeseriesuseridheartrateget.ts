import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource" })
  resource: shared.TimeseriesResourceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetQueryParams;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClientFacingHeartRateTimeseries })
  clientFacingHeartRateTimeseries?: shared.ClientFacingHeartRateTimeseries[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
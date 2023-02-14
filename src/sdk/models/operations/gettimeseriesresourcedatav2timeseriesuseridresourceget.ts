import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetTimeseriesResourceDataV2TimeseriesUserIdResourceGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" })
  resource: shared.TimeseriesResourceEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdResourceGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdResourceGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTimeseriesResourceDataV2TimeseriesUserIdResourceGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTimeseriesResourceDataV2TimeseriesUserIdResourceGetQueryParams;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdResourceGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClientFacingTimeseries })
  clientFacingTimeseries?: shared.ClientFacingTimeseries[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
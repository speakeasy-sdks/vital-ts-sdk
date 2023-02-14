import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource" })
  resource: shared.TimeseriesResourceEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetQueryParams;
}

export class GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClientFacingIgeTimeseries })
  clientFacingIgeTimeseries?: shared.ClientFacingIgeTimeseries[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
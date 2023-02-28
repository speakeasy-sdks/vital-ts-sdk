import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetBloodPressureDataV2TimeseriesUserIdBloodPressureGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetBloodPressureDataV2TimeseriesUserIdBloodPressureGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class GetBloodPressureDataV2TimeseriesUserIdBloodPressureGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBloodPressureDataV2TimeseriesUserIdBloodPressureGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetBloodPressureDataV2TimeseriesUserIdBloodPressureGetQueryParams;
}

export class GetBloodPressureDataV2TimeseriesUserIdBloodPressureGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClientFacingBloodPressureTimeseries })
  clientFacingBloodPressureTimeseries?: shared.ClientFacingBloodPressureTimeseries[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
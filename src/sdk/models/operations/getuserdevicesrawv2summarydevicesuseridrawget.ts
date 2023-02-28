import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetUserDevicesRawV2SummaryDevicesUserIdRawGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetUserDevicesRawV2SummaryDevicesUserIdRawGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;
}

export class GetUserDevicesRawV2SummaryDevicesUserIdRawGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserDevicesRawV2SummaryDevicesUserIdRawGetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserDevicesRawV2SummaryDevicesUserIdRawGetQueryParams;
}

export class GetUserDevicesRawV2SummaryDevicesUserIdRawGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  rawDevices?: shared.RawDevices;

  @SpeakeasyMetadata()
  statusCode: number;
}
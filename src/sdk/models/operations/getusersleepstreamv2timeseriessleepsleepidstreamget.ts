import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetUserSleepStreamV2TimeseriesSleepSleepIdStreamGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sleep_id" })
  sleepId: string;
}

export class GetUserSleepStreamV2TimeseriesSleepSleepIdStreamGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserSleepStreamV2TimeseriesSleepSleepIdStreamGetPathParams;
}

export class GetUserSleepStreamV2TimeseriesSleepSleepIdStreamGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientFacingSleepStream?: shared.ClientFacingSleepStream;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
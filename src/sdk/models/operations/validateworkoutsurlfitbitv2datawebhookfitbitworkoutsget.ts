import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ValidateWorkoutsUrlFitbitV2DataWebhookFitbitWorkoutsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team_id" })
  teamId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=verify" })
  verify: string;
}

export class ValidateWorkoutsUrlFitbitV2DataWebhookFitbitWorkoutsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ValidateWorkoutsUrlFitbitV2DataWebhookFitbitWorkoutsGetQueryParams;
}

export class ValidateWorkoutsUrlFitbitV2DataWebhookFitbitWorkoutsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
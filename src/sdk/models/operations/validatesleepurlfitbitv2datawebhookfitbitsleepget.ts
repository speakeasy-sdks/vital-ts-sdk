import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ValidateSleepUrlFitbitV2DataWebhookFitbitSleepGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team_id" })
  teamId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=verify" })
  verify: string;
}

export class ValidateSleepUrlFitbitV2DataWebhookFitbitSleepGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ValidateSleepUrlFitbitV2DataWebhookFitbitSleepGetQueryParams;
}

export class ValidateSleepUrlFitbitV2DataWebhookFitbitSleepGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
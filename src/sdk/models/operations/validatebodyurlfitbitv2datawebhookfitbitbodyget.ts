import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ValidateBodyUrlFitbitV2DataWebhookFitbitBodyGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team_id" })
  teamId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=verify" })
  verify: string;
}

export class ValidateBodyUrlFitbitV2DataWebhookFitbitBodyGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ValidateBodyUrlFitbitV2DataWebhookFitbitBodyGetQueryParams;
}

export class ValidateBodyUrlFitbitV2DataWebhookFitbitBodyGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
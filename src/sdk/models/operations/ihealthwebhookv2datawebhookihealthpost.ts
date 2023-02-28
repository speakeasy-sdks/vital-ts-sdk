import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class IhealthWebhookV2DataWebhookIhealthPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=body" })
  body: any;
}

export class IhealthWebhookV2DataWebhookIhealthPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: IhealthWebhookV2DataWebhookIhealthPostQueryParams;
}

export class IhealthWebhookV2DataWebhookIhealthPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseIhealthWebhookV2DataWebhookIhealthPost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ExchangeTokenV2LinkCodeExchangePostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
  code: string;
}

export class ExchangeTokenV2LinkCodeExchangePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExchangeTokenV2LinkCodeExchangePostQueryParams;
}

export class ExchangeTokenV2LinkCodeExchangePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vitalTokenExchangeResponse?: shared.VitalTokenExchangeResponse;
}
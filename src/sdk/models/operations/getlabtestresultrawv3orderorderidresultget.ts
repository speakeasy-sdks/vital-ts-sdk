import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetLabTestResultRawV3OrderOrderIdResultGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}

export class GetLabTestResultRawV3OrderOrderIdResultGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLabTestResultRawV3OrderOrderIdResultGetPathParams;
}

export class GetLabTestResultRawV3OrderOrderIdResultGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  labResultsRaw?: shared.LabResultsRaw;

  @SpeakeasyMetadata()
  statusCode: number;
}
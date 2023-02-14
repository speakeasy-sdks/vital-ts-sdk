import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetLabTestResultV3OrderOrderIdResultPdfGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}

export class GetLabTestResultV3OrderOrderIdResultPdfGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLabTestResultV3OrderOrderIdResultPdfGetPathParams;
}

export class GetLabTestResultV3OrderOrderIdResultPdfGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLabTestResultV3OrderOrderIdResultPdfGet200ApplicationJSONAny?: any;
}
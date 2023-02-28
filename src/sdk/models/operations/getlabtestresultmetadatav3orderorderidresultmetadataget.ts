import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetLabTestResultMetadataV3OrderOrderIdResultMetadataGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;
}

export class GetLabTestResultMetadataV3OrderOrderIdResultMetadataGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLabTestResultMetadataV3OrderOrderIdResultMetadataGetPathParams;
}

export class GetLabTestResultMetadataV3OrderOrderIdResultMetadataGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  labResultsMetadata?: shared.LabResultsMetadata;

  @SpeakeasyMetadata()
  statusCode: number;
}
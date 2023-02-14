import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetSourcePrioritiesV2TeamSourcePrioritiesGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=data_type" })
  dataType?: string;
}

export class GetSourcePrioritiesV2TeamSourcePrioritiesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSourcePrioritiesV2TeamSourcePrioritiesGetQueryParams;
}

export class GetSourcePrioritiesV2TeamSourcePrioritiesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSourcePrioritiesV2TeamSourcePrioritiesGet200ApplicationJSONObjects?: Record<string, any>[];
}
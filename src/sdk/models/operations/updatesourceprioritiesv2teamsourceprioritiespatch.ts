import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team_id" })
  teamId: string;
}

export class UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchQueryParams;
}

export class UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSourcePrioritiesV2TeamSourcePrioritiesPatch200ApplicationJSONObjects?: Record<string, any>[];
}
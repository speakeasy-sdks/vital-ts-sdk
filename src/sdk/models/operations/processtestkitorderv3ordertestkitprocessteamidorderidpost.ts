import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ProcessTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: string;
}

export class ProcessTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProcessTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPostPathParams;
}

export class ProcessTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responseProcessTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
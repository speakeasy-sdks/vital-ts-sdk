import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PostUserActivityV2SummaryActivityUserIdPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class PostUserActivityV2SummaryActivityUserIdPostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-vital-ios-sdk-version" })
  xVitalIosSDKVersion?: string;
}

export class PostUserActivityV2SummaryActivityUserIdPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUserActivityV2SummaryActivityUserIdPostPathParams;

  @SpeakeasyMetadata()
  headers: PostUserActivityV2SummaryActivityUserIdPostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManualActivityCreationPayload;
}

export class PostUserActivityV2SummaryActivityUserIdPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responsePostUserActivityV2SummaryActivityUserIdPost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
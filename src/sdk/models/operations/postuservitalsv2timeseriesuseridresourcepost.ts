import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PostUserVitalsV2TimeseriesUserIdResourcePostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" })
  resource: any;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class PostUserVitalsV2TimeseriesUserIdResourcePostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-vital-ios-sdk-version" })
  xVitalIosSDKVersion?: string;
}

export class PostUserVitalsV2TimeseriesUserIdResourcePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUserVitalsV2TimeseriesUserIdResourcePostPathParams;

  @SpeakeasyMetadata()
  headers: PostUserVitalsV2TimeseriesUserIdResourcePostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManualTimeseriesCreationPayload;
}

export class PostUserVitalsV2TimeseriesUserIdResourcePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responsePostUserVitalsV2TimeseriesUserIdResourcePost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-vital-ios-sdk-version" })
  xVitalIosSDKVersion?: string;
}

export class PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostPathParams;

  @SpeakeasyMetadata()
  headers: PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManualBloodPressureCreationPayload;
}

export class PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responsePostUserBloodPressureV2TimeseriesUserIdBloodPressurePost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
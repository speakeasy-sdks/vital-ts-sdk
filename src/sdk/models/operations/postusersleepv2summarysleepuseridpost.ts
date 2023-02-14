import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostUserSleepV2SummarySleepUserIdPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class PostUserSleepV2SummarySleepUserIdPostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-vital-ios-sdk-version" })
  xVitalIosSDKVersion?: string;
}

export class PostUserSleepV2SummarySleepUserIdPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUserSleepV2SummarySleepUserIdPostPathParams;

  @SpeakeasyMetadata()
  headers: PostUserSleepV2SummarySleepUserIdPostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManualSleepCreationPayload;
}

export class PostUserSleepV2SummarySleepUserIdPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responsePostUserSleepV2SummarySleepUserIdPost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostUserProfileV2SummaryProfileUserIdPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class PostUserProfileV2SummaryProfileUserIdPostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-vital-ios-sdk-version" })
  xVitalIosSDKVersion?: string;
}

export class PostUserProfileV2SummaryProfileUserIdPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUserProfileV2SummaryProfileUserIdPostPathParams;

  @SpeakeasyMetadata()
  headers: PostUserProfileV2SummaryProfileUserIdPostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManualProfileCreationPayload;
}

export class PostUserProfileV2SummaryProfileUserIdPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responsePostUserProfileV2SummaryProfileUserIdPost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
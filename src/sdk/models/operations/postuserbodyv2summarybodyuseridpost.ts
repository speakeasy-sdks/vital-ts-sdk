import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PostUserBodyV2SummaryBodyUserIdPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class PostUserBodyV2SummaryBodyUserIdPostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-vital-ios-sdk-version" })
  xVitalIosSDKVersion?: string;
}

export class PostUserBodyV2SummaryBodyUserIdPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUserBodyV2SummaryBodyUserIdPostPathParams;

  @SpeakeasyMetadata()
  headers: PostUserBodyV2SummaryBodyUserIdPostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManualBodyCreationPayload;
}

export class PostUserBodyV2SummaryBodyUserIdPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responsePostUserBodyV2SummaryBodyUserIdPost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
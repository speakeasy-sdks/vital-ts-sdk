import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostUserWorkoutV2SummaryWorkoutsUserIdPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class PostUserWorkoutV2SummaryWorkoutsUserIdPostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-vital-ios-sdk-version" })
  xVitalIosSDKVersion?: string;
}

export class PostUserWorkoutV2SummaryWorkoutsUserIdPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUserWorkoutV2SummaryWorkoutsUserIdPostPathParams;

  @SpeakeasyMetadata()
  headers: PostUserWorkoutV2SummaryWorkoutsUserIdPostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManualWorkoutCreationPayload;
}

export class PostUserWorkoutV2SummaryWorkoutsUserIdPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  responsePostUserWorkoutV2SummaryWorkoutsUserIdPost?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
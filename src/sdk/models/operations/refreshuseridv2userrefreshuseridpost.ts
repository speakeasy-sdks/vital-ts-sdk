import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class RefreshUserIdV2UserRefreshUserIdPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class RefreshUserIdV2UserRefreshUserIdPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RefreshUserIdV2UserRefreshUserIdPostPathParams;
}

export class RefreshUserIdV2UserRefreshUserIdPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userRefreshErrorResponse?: shared.UserRefreshErrorResponse;

  @SpeakeasyMetadata()
  userRefreshSuccessResponse?: shared.UserRefreshSuccessResponse;
}
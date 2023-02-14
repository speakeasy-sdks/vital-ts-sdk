import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class DeleteUserV2UserUserIdDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class DeleteUserV2UserUserIdDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUserV2UserUserIdDeletePathParams;
}

export class DeleteUserV2UserUserIdDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userSuccessResponse?: shared.UserSuccessResponse;
}
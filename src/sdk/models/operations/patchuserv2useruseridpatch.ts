import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PatchUserV2UserUserIdPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class PatchUserV2UserUserIdPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchUserV2UserUserIdPatchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UserPatchBody;
}

export class PatchUserV2UserUserIdPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
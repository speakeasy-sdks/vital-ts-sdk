import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class DeregisterProviderV2UserUserIdProviderDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: shared.ProvidersEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class DeregisterProviderV2UserUserIdProviderDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeregisterProviderV2UserUserIdProviderDeletePathParams;
}

export class DeregisterProviderV2UserUserIdProviderDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userSuccessResponse?: shared.UserSuccessResponse;
}
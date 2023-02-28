import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetUserByClientUserIdV2UserResolveClientUserIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_user_id" })
  clientUserId: string;
}

export class GetUserByClientUserIdV2UserResolveClientUserIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserByClientUserIdV2UserResolveClientUserIdGetPathParams;
}

export class GetUserByClientUserIdV2UserResolveClientUserIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientFacingUser?: shared.ClientFacingUser;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
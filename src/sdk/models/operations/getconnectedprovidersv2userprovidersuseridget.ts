import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetConnectedProvidersV2UserProvidersUserIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export class GetConnectedProvidersV2UserProvidersUserIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConnectedProvidersV2UserProvidersUserIdGetPathParams;
}

export class GetConnectedProvidersV2UserProvidersUserIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata({ elemType: shared.ClientFacingSourceWithStatus, elemDepth: 2 })
  responseGetConnectedProvidersV2UserProvidersUserIdGet?: Record<string, shared.ClientFacingSourceWithStatus[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
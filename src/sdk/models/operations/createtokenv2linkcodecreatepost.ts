import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Transform, Type } from "class-transformer";


export class CreateTokenV2LinkCodeCreatePostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expires_at;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId: string;
}

export class CreateTokenV2LinkCodeCreatePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateTokenV2LinkCodeCreatePostQueryParams;
}

export class CreateTokenV2LinkCodeCreatePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vitalTokenCreatedResponse?: shared.VitalTokenCreatedResponse;
}
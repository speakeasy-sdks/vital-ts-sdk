import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class UserCreateBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "client_user_id" })
  clientUserId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fallback_time_zone" })
  fallbackTimeZone?: string;
}
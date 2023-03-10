import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UserCreateBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_user_id" })
  clientUserId: string;

  @SpeakeasyMetadata({ data: "json, name=fallback_time_zone" })
  fallbackTimeZone?: string;
}
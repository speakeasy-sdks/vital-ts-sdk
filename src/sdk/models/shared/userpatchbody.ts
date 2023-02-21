import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UserPatchBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fallback_time_zone" })
  fallbackTimeZone?: string;
}
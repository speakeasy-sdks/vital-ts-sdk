import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class UserPatchBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "fallback_time_zone" })
  fallbackTimeZone?: string;
}
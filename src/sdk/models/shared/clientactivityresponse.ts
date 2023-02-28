import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingActivity } from "./clientfacingactivity";
import { Expose, Type } from "class-transformer";


export class ClientActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClientFacingActivity })
  @Expose({ name: "activity" })
  @Type(() => ClientFacingActivity)
  activity: ClientFacingActivity[];
}
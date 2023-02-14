import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingActivity } from "./clientfacingactivity";


export class ClientActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity", elemType: ClientFacingActivity })
  activity: ClientFacingActivity[];
}
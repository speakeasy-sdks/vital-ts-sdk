import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingSleep } from "./clientfacingsleep";


export class ClientSleepResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sleep", elemType: ClientFacingSleep })
  sleep: ClientFacingSleep[];
}
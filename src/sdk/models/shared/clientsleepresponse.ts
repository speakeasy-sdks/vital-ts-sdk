import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingSleep } from "./clientfacingsleep";
import { Expose, Type } from "class-transformer";


export class ClientSleepResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClientFacingSleep })
  @Expose({ name: "sleep" })
  @Type(() => ClientFacingSleep)
  sleep: ClientFacingSleep[];
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingBody } from "./clientfacingbody";
import { Expose, Type } from "class-transformer";


export class ClientBodyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClientFacingBody })
  @Expose({ name: "body" })
  @Type(() => ClientFacingBody)
  body: ClientFacingBody[];
}
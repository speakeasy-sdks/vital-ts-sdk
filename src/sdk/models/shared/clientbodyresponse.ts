import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingBody } from "./clientfacingbody";


export class ClientBodyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body", elemType: ClientFacingBody })
  body: ClientFacingBody[];
}
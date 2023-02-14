import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingSource } from "./clientfacingsource";


export class ConnectedSourceClientFacingRedacted extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=provider_id" })
  providerId?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: ClientFacingSource;
}
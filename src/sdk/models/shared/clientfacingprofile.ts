import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingSource } from "./clientfacingsource";


export class ClientFacingProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ClientFacingSource;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;

  @SpeakeasyMetadata({ data: "json, name=user_key" })
  userKey?: string;
}
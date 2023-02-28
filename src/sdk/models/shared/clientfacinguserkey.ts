import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class ClientFacingUserKey extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "client_user_id" })
  clientUserId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user_key" })
  userKey?: string;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class ManualConnectionData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "provider_id" })
  providerId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;
}
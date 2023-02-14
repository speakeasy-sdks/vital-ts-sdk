import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ManualConnectionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=provider_id" })
  providerId?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;
}
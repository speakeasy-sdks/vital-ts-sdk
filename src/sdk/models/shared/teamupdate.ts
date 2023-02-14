import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class TeamUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logo_url" })
  logoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=subscription_status" })
  subscriptionStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=testkits_texts_enabled" })
  testkitsTextsEnabled?: boolean;
}
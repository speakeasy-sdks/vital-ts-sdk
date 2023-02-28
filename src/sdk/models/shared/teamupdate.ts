import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class TeamUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "logo_url" })
  logoUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subscription_status" })
  subscriptionStatus?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "testkits_texts_enabled" })
  testkitsTextsEnabled?: boolean;
}
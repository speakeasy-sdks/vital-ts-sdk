import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class TeamCreate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "airtable_api_key" })
  airtableApiKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "airtable_base_id" })
  airtableBaseId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "api_key" })
  apiKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "client_id" })
  clientId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "client_secret" })
  clientSecret?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ff_apple_mobile_app_enabled" })
  ffAppleMobileAppEnabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "ff_wheel_enabled" })
  ffWheelEnabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subscription_status" })
  subscriptionStatus?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "svix_app_id" })
  svixAppId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "webhook_secret" })
  webhookSecret?: string;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApiKeyInDB } from "./apikeyindb";
import { ConnectedSourceClientFacingRedacted } from "./connectedsourceclientfacingredacted";
import { PriorityInDB } from "./priorityindb";
import { TeamUser } from "./teamuser";
import { Expose, Type } from "class-transformer";


export class TeamInDB extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "airtable_api_key" })
  airtableApiKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "airtable_base_id" })
  airtableBaseId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ elemType: ApiKeyInDB })
  @Expose({ name: "api_keys" })
  @Type(() => ApiKeyInDB)
  apiKeys?: ApiKeyInDB[];

  @SpeakeasyMetadata()
  @Expose({ name: "client_id" })
  clientId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "client_secret" })
  clientSecret?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "configuration" })
  configuration: Record<string, any>;

  @SpeakeasyMetadata({ elemType: ConnectedSourceClientFacingRedacted })
  @Expose({ name: "connected_sources" })
  @Type(() => ConnectedSourceClientFacingRedacted)
  connectedSources?: ConnectedSourceClientFacingRedacted[];

  @SpeakeasyMetadata()
  @Expose({ name: "ff_apple_mobile_app_enabled" })
  ffAppleMobileAppEnabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "ff_wheel_enabled" })
  ffWheelEnabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "logo_url" })
  logoUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata({ elemType: PriorityInDB })
  @Expose({ name: "priorities" })
  @Type(() => PriorityInDB)
  priorities?: PriorityInDB[];

  @SpeakeasyMetadata()
  @Expose({ name: "subscription_status" })
  subscriptionStatus?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "svix_app_id" })
  svixAppId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "testkits_texts_enabled" })
  testkitsTextsEnabled: boolean;

  @SpeakeasyMetadata({ elemType: TeamUser })
  @Expose({ name: "users" })
  @Type(() => TeamUser)
  users?: TeamUser[];

  @SpeakeasyMetadata()
  @Expose({ name: "webhook_secret" })
  webhookSecret?: string;
}
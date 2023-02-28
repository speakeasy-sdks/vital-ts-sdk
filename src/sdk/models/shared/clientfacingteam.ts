import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingApiKey } from "./clientfacingapikey";
import { ConnectedSourceClientFacingRedacted } from "./connectedsourceclientfacingredacted";
import { Expose, Type } from "class-transformer";


export class ClientFacingTeam extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "airtable_api_key" })
  airtableApiKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "airtable_base_id" })
  airtableBaseId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ elemType: ClientFacingApiKey })
  @Expose({ name: "api_keys" })
  @Type(() => ClientFacingApiKey)
  apiKeys?: ClientFacingApiKey[];

  @SpeakeasyMetadata()
  @Expose({ name: "client_id" })
  clientId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "client_secret" })
  clientSecret?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "configuration" })
  configuration?: Record<string, any>;

  @SpeakeasyMetadata({ elemType: ConnectedSourceClientFacingRedacted })
  @Expose({ name: "connected_sources" })
  @Type(() => ConnectedSourceClientFacingRedacted)
  connectedSources?: ConnectedSourceClientFacingRedacted[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "logo_url" })
  logoUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "svix_app_id" })
  svixAppId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "testkits_texts_enabled" })
  testkitsTextsEnabled: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "webhook_secret" })
  webhookSecret?: string;
}
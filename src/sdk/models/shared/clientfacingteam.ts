import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingApiKey } from "./clientfacingapikey";
import { ConnectedSourceClientFacingRedacted } from "./connectedsourceclientfacingredacted";


export class ClientFacingTeam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=airtable_api_key" })
  airtableApiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=airtable_base_id" })
  airtableBaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=api_keys", elemType: ClientFacingApiKey })
  apiKeys?: ClientFacingApiKey[];

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=client_secret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=connected_sources", elemType: ConnectedSourceClientFacingRedacted })
  connectedSources?: ConnectedSourceClientFacingRedacted[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=logo_url" })
  logoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=svix_app_id" })
  svixAppId?: string;

  @SpeakeasyMetadata({ data: "json, name=testkits_texts_enabled" })
  testkitsTextsEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=webhook_secret" })
  webhookSecret?: string;
}
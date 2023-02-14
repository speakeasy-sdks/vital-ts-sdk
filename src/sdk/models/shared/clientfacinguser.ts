import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectedSourceClientFacing } from "./connectedsourceclientfacing";


export class ClientFacingUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_user_id" })
  clientUserId: string;

  @SpeakeasyMetadata({ data: "json, name=connected_sources", elemType: ConnectedSourceClientFacing })
  connectedSources: ConnectedSourceClientFacing[];

  @SpeakeasyMetadata({ data: "json, name=created_on" })
  createdOn: Date;

  @SpeakeasyMetadata({ data: "json, name=fallback_time_zone" })
  fallbackTimeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=team_id" })
  teamId: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;

  @SpeakeasyMetadata({ data: "json, name=user_key" })
  userKey?: string;
}
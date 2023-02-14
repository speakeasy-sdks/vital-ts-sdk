import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectedSourceClientFacing } from "./connectedsourceclientfacing";


export class TeamUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_user_id" })
  clientUserId: string;

  @SpeakeasyMetadata({ data: "json, name=connected_sources", elemType: ConnectedSourceClientFacing })
  connectedSources: ConnectedSourceClientFacing[];

  @SpeakeasyMetadata({ data: "json, name=created_on" })
  createdOn: Date;

  @SpeakeasyMetadata({ data: "json, name=fallback_time_zone" })
  fallbackTimeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=team_id" })
  teamId: string;
}
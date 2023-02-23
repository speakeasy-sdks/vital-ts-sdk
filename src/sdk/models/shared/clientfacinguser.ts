import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectedSourceClientFacing } from "./connectedsourceclientfacing";


// ClientFacingUserFallbackTimeZone
/** 
 * 
 *     Fallback time zone of the user, in the form of a valid IANA tzdatabase identifier (e.g., `Europe/London` or `America/Los_Angeles`).
 *     Used when pulling data from sources that are completely time zone agnostic (e.g., all time is relative to UTC clock, without any time zone attributions on data points).
 *     
**/
export class ClientFacingUserFallbackTimeZone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=source_slug" })
  sourceSlug: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}

export class ClientFacingUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_user_id" })
  clientUserId: string;

  @SpeakeasyMetadata({ data: "json, name=connected_sources", elemType: ConnectedSourceClientFacing })
  connectedSources: ConnectedSourceClientFacing[];

  @SpeakeasyMetadata({ data: "json, name=created_on" })
  createdOn: Date;

  @SpeakeasyMetadata({ data: "json, name=fallback_time_zone" })
  fallbackTimeZone?: ClientFacingUserFallbackTimeZone;

  @SpeakeasyMetadata({ data: "json, name=team_id" })
  teamId: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;

  @SpeakeasyMetadata({ data: "json, name=user_key" })
  userKey?: string;
}
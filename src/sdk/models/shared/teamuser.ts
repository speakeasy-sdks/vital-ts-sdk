import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectedSourceClientFacing } from "./connectedsourceclientfacing";
import { Expose, Transform, Type } from "class-transformer";


// TeamUserFallbackTimeZone
/** 
 * 
 *     Fallback time zone of the user, in the form of a valid IANA tzdatabase identifier (e.g., `Europe/London` or `America/Los_Angeles`).
 *     Used when pulling data from sources that are completely time zone agnostic (e.g., all time is relative to UTC clock, without any time zone attributions on data points).
 *     
**/
export class TeamUserFallbackTimeZone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "source_slug" })
  sourceSlug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;
}

export class TeamUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "client_user_id" })
  clientUserId: string;

  @SpeakeasyMetadata({ elemType: ConnectedSourceClientFacing })
  @Expose({ name: "connected_sources" })
  @Type(() => ConnectedSourceClientFacing)
  connectedSources: ConnectedSourceClientFacing[];

  @SpeakeasyMetadata()
  @Expose({ name: "created_on" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdOn: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "fallback_time_zone" })
  @Type(() => TeamUserFallbackTimeZone)
  fallbackTimeZone?: TeamUserFallbackTimeZone;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "team_id" })
  teamId: string;
}
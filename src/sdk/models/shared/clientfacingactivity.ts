import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


// ClientFacingActivityProvider
/** 
 * Source the data has come from.
**/
export class ClientFacingActivityProvider extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "logo" })
  logo: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;
}

export class ClientFacingActivity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "calendar_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  calendarDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "calories_active" })
  caloriesActive?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "calories_total" })
  caloriesTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "daily_movement" })
  dailyMovement?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "floors_climbed" })
  floorsClimbed?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "high" })
  high?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "low" })
  low?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "medium" })
  medium?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  @Type(() => ClientFacingActivityProvider)
  source: ClientFacingActivityProvider;

  @SpeakeasyMetadata()
  @Expose({ name: "steps" })
  steps?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "time_zone" })
  timeZone?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "timezone_offset" })
  timezoneOffset?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user_key" })
  userKey?: string;
}
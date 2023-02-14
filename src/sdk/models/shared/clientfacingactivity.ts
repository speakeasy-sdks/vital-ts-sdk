import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// ClientFacingActivityProvider
/** 
 * Source the data has come from.
**/
export class ClientFacingActivityProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}

export class ClientFacingActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calendar_date" })
  calendarDate: Date;

  @SpeakeasyMetadata({ data: "json, name=calories_active" })
  caloriesActive?: number;

  @SpeakeasyMetadata({ data: "json, name=calories_total" })
  caloriesTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=daily_movement" })
  dailyMovement?: number;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=floors_climbed" })
  floorsClimbed?: number;

  @SpeakeasyMetadata({ data: "json, name=high" })
  high?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=low" })
  low?: number;

  @SpeakeasyMetadata({ data: "json, name=medium" })
  medium?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: ClientFacingActivityProvider;

  @SpeakeasyMetadata({ data: "json, name=steps" })
  steps?: number;

  @SpeakeasyMetadata({ data: "json, name=time_zone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone_offset" })
  timezoneOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;

  @SpeakeasyMetadata({ data: "json, name=user_key" })
  userKey?: string;
}
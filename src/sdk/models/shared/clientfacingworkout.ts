import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// ClientFacingWorkoutProvider
/** 
 * Source the data has come from.
**/
export class ClientFacingWorkoutProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}

// ClientFacingWorkoutClientFacingSport
/** 
 * Sport's name
**/
export class ClientFacingWorkoutClientFacingSport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}

export class ClientFacingWorkout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average_hr" })
  averageHr?: number;

  @SpeakeasyMetadata({ data: "json, name=average_speed" })
  averageSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=average_watts" })
  averageWatts?: number;

  @SpeakeasyMetadata({ data: "json, name=calendar_date" })
  calendarDate: Date;

  @SpeakeasyMetadata({ data: "json, name=calories" })
  calories?: number;

  @SpeakeasyMetadata({ data: "json, name=device_watts" })
  deviceWatts?: number;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=elev_high" })
  elevHigh?: number;

  @SpeakeasyMetadata({ data: "json, name=elev_low" })
  elevLow?: number;

  @SpeakeasyMetadata({ data: "json, name=hr_zones" })
  hrZones?: number[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=map" })
  map?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=max_hr" })
  maxHr?: number;

  @SpeakeasyMetadata({ data: "json, name=max_speed" })
  maxSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=max_watts" })
  maxWatts?: number;

  @SpeakeasyMetadata({ data: "json, name=moving_time" })
  movingTime?: number;

  @SpeakeasyMetadata({ data: "json, name=provider_id" })
  providerId: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: ClientFacingWorkoutProvider;

  @SpeakeasyMetadata({ data: "json, name=sport" })
  sport?: ClientFacingWorkoutClientFacingSport;

  @SpeakeasyMetadata({ data: "json, name=time_end" })
  timeEnd: Date;

  @SpeakeasyMetadata({ data: "json, name=time_start" })
  timeStart: Date;

  @SpeakeasyMetadata({ data: "json, name=timezone_offset" })
  timezoneOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=total_elevation_gain" })
  totalElevationGain?: number;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;

  @SpeakeasyMetadata({ data: "json, name=user_key" })
  userKey?: string;

  @SpeakeasyMetadata({ data: "json, name=weighted_average_watts" })
  weightedAverageWatts?: number;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


// ClientFacingWorkoutProvider
/** 
 * Source the data has come from.
**/
export class ClientFacingWorkoutProvider extends SpeakeasyBase {
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

// ClientFacingWorkoutClientFacingSport
/** 
 * Sport's name
**/
export class ClientFacingWorkoutClientFacingSport extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;
}

export class ClientFacingWorkout extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "average_hr" })
  averageHr?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "average_speed" })
  averageSpeed?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "average_watts" })
  averageWatts?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "calendar_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  calendarDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "calories" })
  calories?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "device_watts" })
  deviceWatts?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "distance" })
  distance?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "elev_high" })
  elevHigh?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "elev_low" })
  elevLow?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "hr_zones" })
  hrZones?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "map" })
  map?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "max_hr" })
  maxHr?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "max_speed" })
  maxSpeed?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "max_watts" })
  maxWatts?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "moving_time" })
  movingTime?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "provider_id" })
  providerId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  @Type(() => ClientFacingWorkoutProvider)
  source: ClientFacingWorkoutProvider;

  @SpeakeasyMetadata()
  @Expose({ name: "sport" })
  @Type(() => ClientFacingWorkoutClientFacingSport)
  sport?: ClientFacingWorkoutClientFacingSport;

  @SpeakeasyMetadata()
  @Expose({ name: "time_end" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timeEnd: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "time_start" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timeStart: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "timezone_offset" })
  timezoneOffset?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "total_elevation_gain" })
  totalElevationGain?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user_key" })
  userKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "weighted_average_watts" })
  weightedAverageWatts?: number;
}
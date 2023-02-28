import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingSleepStream } from "./clientfacingsleepstream";
import { Expose, Transform, Type } from "class-transformer";


// ClientFacingSleepProvider
/** 
 * Source the data has come from.
**/
export class ClientFacingSleepProvider extends SpeakeasyBase {
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

export class ClientFacingSleep extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "average_hrv" })
  averageHrv?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "awake" })
  awake: number;

  @SpeakeasyMetadata()
  @Expose({ name: "bedtime_start" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  bedtimeStart: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "bedtime_stop" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  bedtimeStop: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "calendar_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  calendarDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "deep" })
  deep: number;

  @SpeakeasyMetadata()
  @Expose({ name: "duration" })
  duration: number;

  @SpeakeasyMetadata()
  @Expose({ name: "efficiency" })
  efficiency?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "hr_average" })
  hrAverage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "hr_lowest" })
  hrLowest?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "latency" })
  latency?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "light" })
  light: number;

  @SpeakeasyMetadata()
  @Expose({ name: "rem" })
  rem: number;

  @SpeakeasyMetadata()
  @Expose({ name: "respiratory_rate" })
  respiratoryRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "score" })
  score?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "skin_temperature" })
  skinTemperature?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sleep_stream" })
  @Type(() => ClientFacingSleepStream)
  sleepStream?: ClientFacingSleepStream;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  @Type(() => ClientFacingSleepProvider)
  source: ClientFacingSleepProvider;

  @SpeakeasyMetadata()
  @Expose({ name: "temperature_delta" })
  temperatureDelta?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timezone_offset" })
  timezoneOffset?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total: number;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user_key" })
  userKey?: string;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingSleepStream } from "./clientfacingsleepstream";


// ClientFacingSleepProvider
/** 
 * Source the data has come from.
**/
export class ClientFacingSleepProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}

export class ClientFacingSleep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average_hrv" })
  averageHrv?: number;

  @SpeakeasyMetadata({ data: "json, name=awake" })
  awake: number;

  @SpeakeasyMetadata({ data: "json, name=bedtime_start" })
  bedtimeStart: Date;

  @SpeakeasyMetadata({ data: "json, name=bedtime_stop" })
  bedtimeStop: Date;

  @SpeakeasyMetadata({ data: "json, name=calendar_date" })
  calendarDate: Date;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=deep" })
  deep: number;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration: number;

  @SpeakeasyMetadata({ data: "json, name=efficiency" })
  efficiency?: number;

  @SpeakeasyMetadata({ data: "json, name=hr_average" })
  hrAverage?: number;

  @SpeakeasyMetadata({ data: "json, name=hr_lowest" })
  hrLowest?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency?: number;

  @SpeakeasyMetadata({ data: "json, name=light" })
  light: number;

  @SpeakeasyMetadata({ data: "json, name=rem" })
  rem: number;

  @SpeakeasyMetadata({ data: "json, name=respiratory_rate" })
  respiratoryRate?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=skin_temperature" })
  skinTemperature?: number;

  @SpeakeasyMetadata({ data: "json, name=sleep_stream" })
  sleepStream?: ClientFacingSleepStream;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: ClientFacingSleepProvider;

  @SpeakeasyMetadata({ data: "json, name=temperature_delta" })
  temperatureDelta?: number;

  @SpeakeasyMetadata({ data: "json, name=timezone_offset" })
  timezoneOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;

  @SpeakeasyMetadata({ data: "json, name=user_key" })
  userKey?: string;
}
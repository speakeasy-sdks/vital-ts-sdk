import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingHeartRateTimeseries } from "./clientfacingheartratetimeseries";
import { ClientFacingHRVTimeseries } from "./clientfacinghrvtimeseries";
import { ClientFacingHypnogramTimeseries } from "./clientfacinghypnogramtimeseries";
import { ClientFacingRespiratoryRateTimeseries } from "./clientfacingrespiratoryratetimeseries";
import { Expose, Type } from "class-transformer";


export class ClientFacingSleepStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClientFacingHeartRateTimeseries })
  @Expose({ name: "heartrate" })
  @Type(() => ClientFacingHeartRateTimeseries)
  heartrate?: ClientFacingHeartRateTimeseries[];

  @SpeakeasyMetadata({ elemType: ClientFacingHRVTimeseries })
  @Expose({ name: "hrv" })
  @Type(() => ClientFacingHRVTimeseries)
  hrv?: ClientFacingHRVTimeseries[];

  @SpeakeasyMetadata({ elemType: ClientFacingHypnogramTimeseries })
  @Expose({ name: "hypnogram" })
  @Type(() => ClientFacingHypnogramTimeseries)
  hypnogram?: ClientFacingHypnogramTimeseries[];

  @SpeakeasyMetadata({ elemType: ClientFacingRespiratoryRateTimeseries })
  @Expose({ name: "respiratory_rate" })
  @Type(() => ClientFacingRespiratoryRateTimeseries)
  respiratoryRate?: ClientFacingRespiratoryRateTimeseries[];
}
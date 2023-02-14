import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingHeartRateTimeseries } from "./clientfacingheartratetimeseries";
import { ClientFacingHRVTimeseries } from "./clientfacinghrvtimeseries";
import { ClientFacingHypnogramTimeseries } from "./clientfacinghypnogramtimeseries";
import { ClientFacingRespiratoryRateTimeseries } from "./clientfacingrespiratoryratetimeseries";


export class ClientFacingSleepStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=heartrate", elemType: ClientFacingHeartRateTimeseries })
  heartrate?: ClientFacingHeartRateTimeseries[];

  @SpeakeasyMetadata({ data: "json, name=hrv", elemType: ClientFacingHRVTimeseries })
  hrv?: ClientFacingHRVTimeseries[];

  @SpeakeasyMetadata({ data: "json, name=hypnogram", elemType: ClientFacingHypnogramTimeseries })
  hypnogram?: ClientFacingHypnogramTimeseries[];

  @SpeakeasyMetadata({ data: "json, name=respiratory_rate", elemType: ClientFacingRespiratoryRateTimeseries })
  respiratoryRate?: ClientFacingRespiratoryRateTimeseries[];
}
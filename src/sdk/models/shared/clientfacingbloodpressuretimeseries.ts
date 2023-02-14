import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ClientFacingBloodPressureTimeseries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diastolic" })
  diastolic: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=systolic" })
  systolic: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: string;
}
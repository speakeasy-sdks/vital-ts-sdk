import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ClientFacingTimeseries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}
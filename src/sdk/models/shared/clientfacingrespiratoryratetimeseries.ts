import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class ClientFacingRespiratoryRateTimeseries extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timestamp: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "unit" })
  unit: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: number;
}
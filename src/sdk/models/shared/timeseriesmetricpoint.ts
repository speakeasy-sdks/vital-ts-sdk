import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class TimeseriesMetricPoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: number;
}
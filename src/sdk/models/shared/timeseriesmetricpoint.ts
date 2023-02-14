import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class TimeseriesMetricPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}
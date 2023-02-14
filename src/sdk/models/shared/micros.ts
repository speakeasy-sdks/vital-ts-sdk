import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class Micros extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minerals" })
  minerals?: Record<string, number>;

  @SpeakeasyMetadata({ data: "json, name=trace_elements" })
  traceElements?: Record<string, number>;

  @SpeakeasyMetadata({ data: "json, name=vitamins" })
  vitamins?: Record<string, number>;
}
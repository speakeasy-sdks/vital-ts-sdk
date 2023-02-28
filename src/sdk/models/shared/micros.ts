import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class Micros extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "minerals" })
  minerals?: Record<string, number>;

  @SpeakeasyMetadata()
  @Expose({ name: "trace_elements" })
  traceElements?: Record<string, number>;

  @SpeakeasyMetadata()
  @Expose({ name: "vitamins" })
  vitamins?: Record<string, number>;
}
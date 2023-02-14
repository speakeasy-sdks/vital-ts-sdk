import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SleepV2InDB } from "./sleepv2indb";


export class RawSleep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sleep", elemType: SleepV2InDB })
  sleep: SleepV2InDB[];
}
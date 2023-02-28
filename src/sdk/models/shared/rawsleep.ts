import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SleepV2InDB } from "./sleepv2indb";
import { Expose, Type } from "class-transformer";


export class RawSleep extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SleepV2InDB })
  @Expose({ name: "sleep" })
  @Type(() => SleepV2InDB)
  sleep: SleepV2InDB[];
}
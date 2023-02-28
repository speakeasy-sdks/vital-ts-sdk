import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ActivityV2InDB } from "./activityv2indb";
import { Expose, Type } from "class-transformer";


export class RawActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ActivityV2InDB })
  @Expose({ name: "activity" })
  @Type(() => ActivityV2InDB)
  activity: ActivityV2InDB[];
}
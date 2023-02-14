import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ActivityV2InDB } from "./activityv2indb";


export class RawActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity", elemType: ActivityV2InDB })
  activity: ActivityV2InDB[];
}
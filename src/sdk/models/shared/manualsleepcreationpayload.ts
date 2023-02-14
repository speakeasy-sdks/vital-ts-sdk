import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataStageEnum } from "./datastageenum";
import { ManualProvidersEnum } from "./manualprovidersenum";
import { ManualSleepCreation } from "./manualsleepcreation";


export class ManualSleepCreationPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ManualSleepCreation })
  data: ManualSleepCreation[];

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: ManualProvidersEnum;

  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage: DataStageEnum;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=time_zone" })
  timeZone?: string;
}
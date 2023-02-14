import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataStageEnum } from "./datastageenum";
import { ManualProvidersEnum } from "./manualprovidersenum";
import { ManualWorkoutCreation } from "./manualworkoutcreation";


export class ManualWorkoutCreationPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ManualWorkoutCreation })
  data: ManualWorkoutCreation[];

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
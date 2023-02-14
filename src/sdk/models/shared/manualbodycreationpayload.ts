import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataStageEnum } from "./datastageenum";
import { ManualBodyCreationIntermediate } from "./manualbodycreationintermediate";
import { ManualProvidersEnum } from "./manualprovidersenum";


export class ManualBodyCreationPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ManualBodyCreationIntermediate;

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
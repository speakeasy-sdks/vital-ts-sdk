import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataStageEnum } from "./datastageenum";
import { ManualProvidersEnum } from "./manualprovidersenum";
import { ManualWorkoutCreation } from "./manualworkoutcreation";
import { Expose, Transform, Type } from "class-transformer";


export class ManualWorkoutCreationPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ManualWorkoutCreation })
  @Expose({ name: "data" })
  @Type(() => ManualWorkoutCreation)
  data: ManualWorkoutCreation[];

  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider: ManualProvidersEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "stage" })
  stage: DataStageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "time_zone" })
  timeZone?: string;
}
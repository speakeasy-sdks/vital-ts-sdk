import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataStageEnum } from "./datastageenum";
import { ManualProvidersEnum } from "./manualprovidersenum";
import { QuantitySample } from "./quantitysample";
import { Expose, Transform, Type } from "class-transformer";


export class ManualTimeseriesCreationPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "data" })
  @Type(() => QuantitySample)
  data: QuantitySample[];

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
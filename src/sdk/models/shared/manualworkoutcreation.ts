import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { QuantitySample } from "./quantitysample";
import { Expose, Transform, Type } from "class-transformer";


export class ManualWorkoutCreation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "calories" })
  calories: number;

  @SpeakeasyMetadata()
  @Expose({ name: "distance" })
  distance: number;

  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate: Date;

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "heart_rate" })
  @Type(() => QuantitySample)
  heartRate?: QuantitySample[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "product_type" })
  productType?: string;

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "respiratory_rate" })
  @Type(() => QuantitySample)
  respiratoryRate?: QuantitySample[];

  @SpeakeasyMetadata()
  @Expose({ name: "source_bundle" })
  sourceBundle?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sport" })
  sport: string;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate: Date;
}
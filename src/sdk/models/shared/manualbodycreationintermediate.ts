import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { QuantitySample } from "./quantitysample";
import { Expose, Type } from "class-transformer";


export class ManualBodyCreationIntermediate extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "body_fat_percentage" })
  @Type(() => QuantitySample)
  bodyFatPercentage: QuantitySample[];

  @SpeakeasyMetadata({ elemType: QuantitySample })
  @Expose({ name: "body_mass" })
  @Type(() => QuantitySample)
  bodyMass: QuantitySample[];
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { QuantitySample } from "./quantitysample";


export class ManualBodyCreationIntermediate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body_fat_percentage", elemType: QuantitySample })
  bodyFatPercentage: QuantitySample[];

  @SpeakeasyMetadata({ data: "json, name=body_mass", elemType: QuantitySample })
  bodyMass: QuantitySample[];
}
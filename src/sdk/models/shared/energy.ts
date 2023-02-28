import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum EnergyUnitEnum {
    Kcal = "kcal"
}

export class Energy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "unit" })
  unit: EnergyUnitEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: number;
}
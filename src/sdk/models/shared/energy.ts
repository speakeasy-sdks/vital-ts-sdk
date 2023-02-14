import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum EnergyUnitEnum {
    Kcal = "kcal"
}

export class Energy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: EnergyUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}
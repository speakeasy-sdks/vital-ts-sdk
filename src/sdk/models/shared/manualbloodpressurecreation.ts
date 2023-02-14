import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { QuantitySample } from "./quantitysample";


export class ManualBloodPressureCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diastolic" })
  diastolic: QuantitySample;

  @SpeakeasyMetadata({ data: "json, name=pulse" })
  pulse?: QuantitySample;

  @SpeakeasyMetadata({ data: "json, name=systolic" })
  systolic: QuantitySample;
}
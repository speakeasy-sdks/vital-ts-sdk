import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { QuantitySample } from "./quantitysample";
import { Expose, Type } from "class-transformer";


export class ManualBloodPressureCreation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "diastolic" })
  @Type(() => QuantitySample)
  diastolic: QuantitySample;

  @SpeakeasyMetadata()
  @Expose({ name: "pulse" })
  @Type(() => QuantitySample)
  pulse?: QuantitySample;

  @SpeakeasyMetadata()
  @Expose({ name: "systolic" })
  @Type(() => QuantitySample)
  systolic: QuantitySample;
}
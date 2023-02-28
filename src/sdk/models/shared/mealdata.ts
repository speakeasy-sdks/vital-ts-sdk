import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Energy } from "./energy";
import { Macros } from "./macros";
import { Micros } from "./micros";
import { Expose, Type } from "class-transformer";


export class MealData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "energy" })
  @Type(() => Energy)
  energy?: Energy;

  @SpeakeasyMetadata()
  @Expose({ name: "macros" })
  @Type(() => Macros)
  macros?: Macros;

  @SpeakeasyMetadata()
  @Expose({ name: "micros" })
  @Type(() => Micros)
  micros?: Micros;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Energy } from "./energy";
import { Macros } from "./macros";
import { Micros } from "./micros";


export class MealData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=energy" })
  energy?: Energy;

  @SpeakeasyMetadata({ data: "json, name=macros" })
  macros?: Macros;

  @SpeakeasyMetadata({ data: "json, name=micros" })
  micros?: Micros;
}
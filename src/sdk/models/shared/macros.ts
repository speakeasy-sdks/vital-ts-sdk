import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Fats } from "./fats";


export class Macros extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alcohol" })
  alcohol?: number;

  @SpeakeasyMetadata({ data: "json, name=carbs" })
  carbs?: number;

  @SpeakeasyMetadata({ data: "json, name=fats" })
  fats?: Fats;

  @SpeakeasyMetadata({ data: "json, name=fibre" })
  fibre?: number;

  @SpeakeasyMetadata({ data: "json, name=protein" })
  protein?: number;

  @SpeakeasyMetadata({ data: "json, name=sugar" })
  sugar?: number;

  @SpeakeasyMetadata({ data: "json, name=water" })
  water?: number;
}
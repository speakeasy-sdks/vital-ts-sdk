import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Fats } from "./fats";
import { Expose, Type } from "class-transformer";


export class Macros extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "alcohol" })
  alcohol?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "carbs" })
  carbs?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "fats" })
  @Type(() => Fats)
  fats?: Fats;

  @SpeakeasyMetadata()
  @Expose({ name: "fibre" })
  fibre?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "protein" })
  protein?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sugar" })
  sugar?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "water" })
  water?: number;
}
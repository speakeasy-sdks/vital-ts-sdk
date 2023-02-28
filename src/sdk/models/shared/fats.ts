import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class Fats extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "monounsaturated" })
  monounsaturated?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "omega3" })
  omega3?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "omega6" })
  omega6?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "polyunsaturated" })
  polyunsaturated?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "saturated" })
  saturated?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;
}
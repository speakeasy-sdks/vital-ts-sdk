import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class AnswerDecimal extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "valueDecimal" })
  valueDecimal: number;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class AnswerDecimal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=valueDecimal" })
  valueDecimal: number;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class AnswerString extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "valueString" })
  valueString: string;
}
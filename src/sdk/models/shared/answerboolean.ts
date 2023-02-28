import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class AnswerBoolean extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "valueBoolean" })
  valueBoolean: boolean;
}
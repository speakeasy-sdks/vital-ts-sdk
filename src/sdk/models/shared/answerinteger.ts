import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class AnswerInteger extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "valueInteger" })
  valueInteger: number;
}
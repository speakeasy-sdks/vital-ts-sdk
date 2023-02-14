import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class AnswerInteger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=valueInteger" })
  valueInteger: number;
}
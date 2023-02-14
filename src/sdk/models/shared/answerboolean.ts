import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class AnswerBoolean extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=valueBoolean" })
  valueBoolean: boolean;
}
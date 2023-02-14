import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class AnswerString extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=valueString" })
  valueString: string;
}
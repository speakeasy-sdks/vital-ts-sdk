import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class QuestionnaireItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer: any[];

  @SpeakeasyMetadata({ data: "json, name=linkId" })
  linkId: any;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
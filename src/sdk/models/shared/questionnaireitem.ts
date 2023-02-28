import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class QuestionnaireItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "answer" })
  answer: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "linkId" })
  linkId: any;

  @SpeakeasyMetadata()
  @Expose({ name: "size" })
  size?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}
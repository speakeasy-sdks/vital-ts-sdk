import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Attachment } from "./attachment";


export class AnswerAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=valueAttachment" })
  valueAttachment: Attachment;
}
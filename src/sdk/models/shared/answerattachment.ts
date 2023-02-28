import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { Expose, Type } from "class-transformer";


export class AnswerAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "valueAttachment" })
  @Type(() => Attachment)
  valueAttachment: Attachment;
}
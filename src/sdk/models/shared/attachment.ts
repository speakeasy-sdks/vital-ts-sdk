import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class Attachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contentType" })
  contentType: string;
}
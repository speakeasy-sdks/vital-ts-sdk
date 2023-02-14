import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class Attachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType: string;
}
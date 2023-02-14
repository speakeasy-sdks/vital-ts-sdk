import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PhotoTitleEnum } from "./phototitleenum";


export class PhotoAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: PhotoTitleEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PhotoTitleEnum } from "./phototitleenum";
import { Expose } from "class-transformer";


export class PhotoAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contentType" })
  contentType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: PhotoTitleEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}
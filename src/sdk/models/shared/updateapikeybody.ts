import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class UpdateApiKeyBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label: string;
}
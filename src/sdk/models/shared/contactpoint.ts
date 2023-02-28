import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class ContactPoint extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "system" })
  system: string;

  @SpeakeasyMetadata()
  @Expose({ name: "use" })
  use?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}
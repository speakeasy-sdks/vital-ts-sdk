import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class HumanName extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "family" })
  family: string;

  @SpeakeasyMetadata()
  @Expose({ name: "given" })
  given: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "text" })
  text?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "use" })
  use?: string;
}
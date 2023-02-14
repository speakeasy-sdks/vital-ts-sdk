import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class HumanName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=family" })
  family: string;

  @SpeakeasyMetadata({ data: "json, name=given" })
  given: string[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=use" })
  use?: string;
}
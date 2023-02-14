import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ContactPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=system" })
  system: string;

  @SpeakeasyMetadata({ data: "json, name=use" })
  use?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
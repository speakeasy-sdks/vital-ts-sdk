import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateApiKeyBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UpdateApiKeyBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;
}
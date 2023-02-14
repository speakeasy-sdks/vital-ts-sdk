import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class VitalTokenCreatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=exchange_url" })
  exchangeUrl: string;
}
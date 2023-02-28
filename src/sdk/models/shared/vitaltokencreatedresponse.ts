import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class VitalTokenCreatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code: string;

  @SpeakeasyMetadata()
  @Expose({ name: "exchange_url" })
  exchangeUrl: string;
}
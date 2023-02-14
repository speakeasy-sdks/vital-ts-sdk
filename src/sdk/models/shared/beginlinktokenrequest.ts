import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProvidersEnum } from "./providersenum";


export class BeginLinkTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link_token" })
  linkToken: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: ProvidersEnum;
}
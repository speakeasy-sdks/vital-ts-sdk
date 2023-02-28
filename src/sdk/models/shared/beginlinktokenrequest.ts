import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProvidersEnum } from "./providersenum";
import { Expose } from "class-transformer";


export class BeginLinkTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "link_token" })
  linkToken: string;

  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider: ProvidersEnum;
}
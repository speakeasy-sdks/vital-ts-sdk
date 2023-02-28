import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class LinkTokenExchangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "link_token" })
  linkToken: string;
}
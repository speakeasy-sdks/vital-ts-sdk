import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class LinkTokenExchangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link_token" })
  linkToken: string;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class LinkTokenBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_used" })
  isUsed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=oauth_info" })
  oauthInfo?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}
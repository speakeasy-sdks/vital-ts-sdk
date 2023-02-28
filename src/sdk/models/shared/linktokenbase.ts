import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class LinkTokenBase extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "is_used" })
  isUsed?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "oauth_info" })
  oauthInfo?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "token" })
  token: string;
}
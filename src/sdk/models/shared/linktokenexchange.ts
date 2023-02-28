import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProvidersEnum } from "./providersenum";
import { Expose } from "class-transformer";


export class LinkTokenExchange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "filter_on_providers" })
  filterOnProviders?: ProvidersEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider?: ProvidersEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "redirect_url" })
  redirectUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user_key" })
  userKey: string;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProvidersEnum } from "./providersenum";


export class LinkTokenExchange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter_on_providers" })
  filterOnProviders?: ProvidersEnum[];

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: ProvidersEnum;

  @SpeakeasyMetadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=user_key" })
  userKey: string;
}
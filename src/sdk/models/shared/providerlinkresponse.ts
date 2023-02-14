import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PasswordProvidersEnum } from "./passwordprovidersenum";


export class ProviderLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connected" })
  connected: boolean;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: PasswordProvidersEnum;

  @SpeakeasyMetadata({ data: "json, name=provider_id" })
  providerId?: string;
}
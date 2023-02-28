import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PasswordProvidersEnum } from "./passwordprovidersenum";
import { Expose } from "class-transformer";


export class ProviderLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "connected" })
  connected: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider: PasswordProvidersEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "provider_id" })
  providerId?: string;
}
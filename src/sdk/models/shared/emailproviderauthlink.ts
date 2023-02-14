import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProvidersEnum } from "./providersenum";
import { RegionEnum } from "./regionenum";


export class EmailProviderAuthLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: ProvidersEnum;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: RegionEnum;
}
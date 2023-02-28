import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProvidersEnum } from "./providersenum";
import { RegionEnum } from "./regionenum";
import { Expose } from "class-transformer";


export class EmailProviderAuthLink extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider?: ProvidersEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "region" })
  region?: RegionEnum;
}
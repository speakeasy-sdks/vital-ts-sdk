import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AuthTypeEnum } from "./authtypeenum";
import { ProvidersEnum } from "./providersenum";
import { RegionEnum } from "./regionenum";
import { Expose } from "class-transformer";


export class EmailAuthLink extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "auth_type" })
  authType: AuthTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider: ProvidersEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "region" })
  region?: RegionEnum;
}
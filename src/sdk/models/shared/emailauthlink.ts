import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AuthTypeEnum } from "./authtypeenum";
import { ProvidersEnum } from "./providersenum";
import { RegionEnum } from "./regionenum";


export class EmailAuthLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_type" })
  authType: AuthTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: ProvidersEnum;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: RegionEnum;
}
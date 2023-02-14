import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AuthTypeEnum } from "./authtypeenum";
import { ProvidersEnum } from "./providersenum";


export class PasswordAuthLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_type" })
  authType: AuthTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: ProvidersEnum;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
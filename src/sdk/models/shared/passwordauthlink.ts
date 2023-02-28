import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AuthTypeEnum } from "./authtypeenum";
import { ProvidersEnum } from "./providersenum";
import { Expose } from "class-transformer";


export class PasswordAuthLink extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "auth_type" })
  authType: AuthTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "password" })
  password: string;

  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider: ProvidersEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "username" })
  username: string;
}
import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProvidersEnum } from "./providersenum";
import { Expose } from "class-transformer";


export class DemoConnectionCreationPayload extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "provider" })
  provider: ProvidersEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;
}
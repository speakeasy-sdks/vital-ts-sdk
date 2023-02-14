import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProvidersEnum } from "./providersenum";


export class DemoConnectionCreationPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: ProvidersEnum;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;
}
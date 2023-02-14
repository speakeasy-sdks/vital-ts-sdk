import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ResourceEnum } from "./resourceenum";


export class ClientFacingSourceDetailed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_type" })
  authType?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=supported_resources" })
  supportedResources?: ResourceEnum[];
}
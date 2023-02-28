import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ResourceEnum } from "./resourceenum";
import { Expose } from "class-transformer";


export class ClientFacingSourceDetailed extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "auth_type" })
  authType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "logo" })
  logo?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supported_resources" })
  supportedResources?: ResourceEnum[];
}
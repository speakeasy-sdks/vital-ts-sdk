import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class ClientFacingSourceWithStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "logo" })
  logo: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: string;
}
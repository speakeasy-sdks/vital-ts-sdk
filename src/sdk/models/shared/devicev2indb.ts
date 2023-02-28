import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingSource } from "./clientfacingsource";
import { Expose, Type } from "class-transformer";


export class DeviceV2InDB extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "provider_id" })
  providerId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  @Type(() => ClientFacingSource)
  source?: ClientFacingSource;

  @SpeakeasyMetadata()
  @Expose({ name: "source_id" })
  sourceId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;
}
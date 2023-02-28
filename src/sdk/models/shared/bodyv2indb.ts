import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingSource } from "./clientfacingsource";
import { Expose, Transform, Type } from "class-transformer";


export class BodyV2InDB extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "priority" })
  priority?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "priority_id" })
  priorityId?: number;

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
  @Expose({ name: "timestamp" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timestamp: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;
}
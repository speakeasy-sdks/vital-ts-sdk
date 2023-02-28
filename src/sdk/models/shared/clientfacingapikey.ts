import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class ClientFacingApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "deleted_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  deletedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label: string;

  @SpeakeasyMetadata()
  @Expose({ name: "team_id" })
  teamId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}
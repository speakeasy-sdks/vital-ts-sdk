import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingSource } from "./clientfacingsource";
import { Expose, Transform, Type } from "class-transformer";


export class ClientFacingBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "calendar_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  calendarDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "fat" })
  fat?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  @Type(() => ClientFacingSource)
  source: ClientFacingSource;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user_key" })
  userKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "weight" })
  weight?: number;
}
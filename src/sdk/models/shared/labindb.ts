import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class LabInDB extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city: string;

  @SpeakeasyMetadata()
  @Expose({ name: "clia" })
  clia?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "first_line_address" })
  firstLineAddress: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "zipcode" })
  zipcode: string;
}
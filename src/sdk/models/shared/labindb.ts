import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class LabInDB extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=clia" })
  clia?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=first_line_address" })
  firstLineAddress: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=zipcode" })
  zipcode: string;
}
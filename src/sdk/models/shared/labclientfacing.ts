import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class LabClientFacing extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_line_address" })
  firstLineAddress: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;

  @SpeakeasyMetadata()
  @Expose({ name: "zipcode" })
  zipcode: string;
}
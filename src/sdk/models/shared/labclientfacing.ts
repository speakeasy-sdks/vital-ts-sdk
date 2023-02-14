import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class LabClientFacing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=first_line_address" })
  firstLineAddress: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=zipcode" })
  zipcode: string;
}
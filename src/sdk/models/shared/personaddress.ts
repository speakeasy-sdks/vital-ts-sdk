import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AddressPurposeEnum } from "./addresspurposeenum";
import { AddressTypeEnum } from "./addresstypeenum";
import { Expose } from "class-transformer";


export class PersonAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "line" })
  line: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "postalCode" })
  postalCode?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state: string;

  @SpeakeasyMetadata()
  @Expose({ name: "text" })
  text?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: AddressTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "use" })
  use: AddressPurposeEnum;
}
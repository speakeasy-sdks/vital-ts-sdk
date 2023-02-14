import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AddressPurposeEnum } from "./addresspurposeenum";
import { AddressTypeEnum } from "./addresstypeenum";


export class PersonAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=line" })
  line: string[];

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: any;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=use" })
  use: AddressPurposeEnum;
}
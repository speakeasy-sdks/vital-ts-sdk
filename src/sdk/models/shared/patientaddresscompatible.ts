import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PatientAddressCompatible extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=receiver_name" })
  receiverName?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=street" })
  street: string;

  @SpeakeasyMetadata({ data: "json, name=street_number" })
  streetNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip: string;
}
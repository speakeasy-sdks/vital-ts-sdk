import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class PatientAddressCompatible extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "receiver_name" })
  receiverName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street" })
  street: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_number" })
  streetNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "zip" })
  zip: string;
}
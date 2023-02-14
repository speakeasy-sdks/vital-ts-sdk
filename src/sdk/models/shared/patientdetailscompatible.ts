import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PatientDetailsCompatible extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dob" })
  dob: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;
}
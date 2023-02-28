import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class PatientDetailsCompatible extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dob" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dob: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "gender" })
  gender: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone_number" })
  phoneNumber?: string;
}
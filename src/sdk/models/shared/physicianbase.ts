import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class PhysicianBase extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "licensed_states" })
  licensedStates?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "npi" })
  npi: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;
}
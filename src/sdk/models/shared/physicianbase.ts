import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PhysicianBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=licensed_states" })
  licensedStates?: string[];

  @SpeakeasyMetadata({ data: "json, name=npi" })
  npi: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
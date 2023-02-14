import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PhysicianClientFacing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=npi" })
  npi: string;
}
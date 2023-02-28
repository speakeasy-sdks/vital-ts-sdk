import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class PhysicianClientFacing extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "npi" })
  npi: string;
}